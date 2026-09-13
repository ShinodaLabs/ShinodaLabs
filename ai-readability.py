from pathlib import Path
import re,json
p=Path('src/components/site/RustInspiredSite.tsx');s=p.read_text(encoding='utf-8-sig')
a=s.index('const services = [');b=s.index('\nconst projects =',a)
raw=s[a+len('const services = '):b].strip().rstrip(';')
raw=re.sub(r'^\s*icon: \w+,\n','',raw,flags=re.M)
raw=re.sub(r'(?m)^(\s*)(\w+):',r'\1"\2":',raw)
raw=re.sub(r',\s*([}\]])',r'\1',raw)
services=json.loads(raw)
seo=Path('src/lib/seo.ts').read_text(encoding='utf-8-sig')
f=seo[seo.index('export const FAQ_ITEMS = ')+len('export const FAQ_ITEMS = '):seo.index('] as const;',seo.index('export const FAQ_ITEMS'))+1]
f=re.sub(r'(?m)^(\s*)(\w+):',r'\1"\2":',f);f=re.sub(r',\s*([}\]])',r'\1',f);faq=json.loads(f)
faq[-1]['answer']='Entre em contato pelo WhatsApp ou pelo e-mail shinodalabs@gmail.com. A resposta é personalizada em até 24 horas, com briefing, escopo e próximos passos claros.'
Path('src/content').mkdir(exist_ok=True)
Path('src/content/site.json').write_text(json.dumps({'services':services,'faq':faq},ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
s=s[:a]+'''const serviceIcons = [Globe, MousePointer2, Layers, Code2, Search, Zap, Rocket, ShieldCheck];
const services = siteContent.services.map((service, index) => ({ ...service, icon: serviceIcons[index] }));
'''+s[b:]
s='import siteContent from "@/content/site.json";\n'+s
s=s.replace('const [dark, setDark] = useState(false);','const [dark, setDark] = useState(true);').replace('setDark(localStorage.getItem("shinoda-theme") === "dark");','setDark(localStorage.getItem("shinoda-theme") !== "light");')
s=s.replace('  const service = services[active];\n','')
s=s.replace('aria-controls="service-panel"','aria-controls={`service-panel-${i}`}')
a=s.index('            <div\n              className="sl-service-panel"');b=s.index('\n          </div>\n        </MotionSection>',a)
panel=s[a:b].replace('id="service-panel"','id={`service-panel-${index}`}\n              key={service.name}\n              hidden={active !== index}').replace('aria-labelledby={`service-tab-${active}`}','aria-labelledby={`service-tab-${index}`}').replace('<ServiceTransition active={active}>','<ServiceTransition active={index}>')
s=s[:a]+'            {services.map((service, index) => (\n'+panel+'\n            ))}'+s[b:]
pos=s.index('        <MotionSection className="sl-section" id="contact">')
s=s[:pos]+'''        <MotionSection className="sl-section" id="faq">
          <div className="sl-container">
            <SectionTitle eyebrow="PERGUNTAS FREQUENTES" title="Antes de começar" text="Respostas diretas sobre o estúdio e como iniciar seu projeto." />
            <div className="sl-faq">
              {siteContent.faq.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
            </div>
          </div>
        </MotionSection>
'''+s[pos:]
s=s.replace('<a href="#process">Nosso processo</a>','<a href="#process">Nosso processo</a>\n              <a href="#faq">Perguntas frequentes</a>')
p.write_text(s,encoding='utf-8')
# Keep structured data aligned with the same content rendered in the page.
p=Path('src/lib/seo.ts');s=seo;a=s.index('export const SERVICE_TYPES =');b=s.index('\ntype MetaTag',a)
s=s[:a]+'''export const SERVICE_TYPES = siteContent.services.map(service => service.name);
export const FAQ_ITEMS = siteContent.faq;
'''+s[b:];s='import siteContent from "@/content/site.json";\n'+s
s=s.replace('content: "#ffffff"','content: "#111113"').replace('content: "light dark"','content: "dark light"')
s=s.replace('"@type": "ProfessionalService"','"@type": "Service"').replace('        priceRange: "$$",\n','').replace('          { "@type": "City", name: "São Paulo" },\n','').replace('          { "@type": "City", name: "Porto Alegre" },\n','')
s=s.replace('name: service,\n              provider:', 'name: service,\n              description: siteContent.services[index].description,\n              provider:')
p.write_text(s,encoding='utf-8')
p=Path('src/routes/__root.tsx');s=p.read_text(encoding='utf-8-sig');s=s.replace('import { buildCanonicalLink, buildMetaTags, buildStructuredDataGraph } from "@/lib/seo";\n','');s=s.replace('  const structuredData = buildStructuredDataGraph("/");\n','');s=re.sub(r'        <script\n          type="application/ld\+json"[\s\S]*?        />\n','',s);s=s.replace('content: "#ffffff"','content: "#111113"').replace('content: "light dark"','content: "dark light"');p.write_text(s,encoding='utf-8')
p=Path('src/routes/index.tsx');s=p.read_text(encoding='utf-8-sig').replace('  buildMetaTags,','  buildMetaTags,\n  buildStructuredDataGraph,');s=s.replace('links: [buildCanonicalLink("/")],','''links: [buildCanonicalLink("/"),
      { rel: "describedby", href: "/llms.txt", type: "text/plain" },
      { rel: "alternate", href: "/index.md", type: "text/markdown", title: "ShinodaLabs em texto" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildStructuredDataGraph("/")).replace(/</g, "\\\\u003c") }],''');p.write_text(s,encoding='utf-8')

