import siteContent from "@/content/site.json";
import {
  Globe,
  Layers,
  Code2,
  MousePointer2,
  ShieldCheck,
  Search,
  Zap,
  Rocket,
  ArrowRight,
  ArrowUpRight,
} from "./LucideAnimated";
import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Github, Menu, Moon, Sun, X } from "lucide-react";
import p1 from "@/assets/project-1.webp";
import p2 from "@/assets/project-2.webp";
import p3 from "@/assets/project-3.webp";
import p4 from "@/assets/project-4.webp";
import p5 from "@/assets/project-5.webp";
import avatar from "@/assets/avatar.webp";
import "./rust-inspired.css";
import { StackGlobe } from "./StackGlobe";
import { SmoothScroll } from "./SmoothScroll";
import { MotionSection, AnimatedIcon, ServiceTransition, ScrollProgress } from "./SiteMotion";

const whatsapp = "https://wa.me/5551996236798";
const serviceIcons = [Globe, MousePointer2, Layers, Code2, Search, Zap, Rocket, ShieldCheck];
const services = siteContent.services.map((service, index) => ({
  ...service,
  icon: serviceIcons[index],
}));

const projects = [
  {
    image: p1,
    name: "Alma & Pata",
    category: "Pet care",
    text: "Uma experiência acolhedora para quem cuida de quem faz parte da família.",
    url: "https://alma-pata.vercel.app/",
  },
  {
    image: p3,
    name: "Lumière",
    category: "Saúde & bem-estar",
    text: "Precisão e cuidado em uma presença digital para clínica odontológica.",
    url: "https://lumiere-self-psi.vercel.app/",
  },
  {
    image: p2,
    name: "VLTGE",
    category: "Fitness",
    text: "Design de impacto para uma academia de alta performance.",
    url: "https://voltage-academia.vercel.app/",
  },
  {
    image: p4,
    name: "Aurelius Imobiliária",
    category: "Mercado imobiliário",
    text: "Uma vitrine digital para conectar pessoas ao próximo endereço.",
    url: "https://aurelius-imobiliaria.vercel.app/",
  },
  {
    image: p5,
    name: "Oliveira & Martins",
    category: "Advocacia",
    text: "Clareza e credibilidade para um escritório de advocacia.",
    url: "https://oliveira-martins-advogados.vercel.app/",
  },
];
function Brand() {
  return (
    <span className="sl-brand">
      SHINODA<span>LABS</span>
      <span className="sl-brand-dot">®</span>
    </span>
  );
}
function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="sl-section-title">
      <p className="sl-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
export function RustInspiredSite() {
  const [menu, setMenu] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesButton = useRef<HTMLButtonElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState(0);
  useEffect(() => {
    try {
      setDark(localStorage.getItem("shinoda-theme") !== "light");
    } catch {
      // Keep the default theme when browser storage is unavailable.
    }
  }, []);
  useEffect(() => {
    const handle = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (menu) menuButton.current?.focus();
        if (servicesOpen) servicesButton.current?.focus();
        setMenu(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [menu, servicesOpen]);
  const toggleTheme = () => {
    setDark(!dark);
    try {
      localStorage.setItem("shinoda-theme", !dark ? "dark" : "light");
    } catch {
      // Theme switching still works without persistence.
    }
  };
  return (
    <div className={`sl-site${dark ? " sl-dark" : ""}`} id="top">
      <SmoothScroll />
      <a className="sl-skip" href="#conteudo-principal">
        Pular para o conteúdo
      </a>
      <header className="sl-header">
        <ScrollProgress />
        <div className="sl-container sl-nav">
          <a href="#top" aria-label="ShinodaLabs — início">
            <Brand />
          </a>
          <nav className="sl-desktop-nav" aria-label="Navegação principal">
            <div
              className="sl-dropdown"
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false);
              }}
            >
              <button
                ref={servicesButton}
                aria-expanded={servicesOpen}
                aria-controls="sl-services-nav"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Serviços <ChevronDown size={12} />
              </button>
              <div className="sl-dropdown-panel" id="sl-services-nav" hidden={!servicesOpen}>
                {services.slice(0, 4).map((s, i) => (
                  <a
                    key={s.name}
                    href="#services"
                    onClick={() => {
                      setActive(i);
                      setServicesOpen(false);
                    }}
                  >
                    <s.icon size={17} />
                    <span>{s.name}</span>
                    <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            </div>
            <a href="#work">Projetos</a>
            <a href="#about">Sobre o estúdio</a>
            <a href="#process">Como funciona</a>
            <a href="#contact">Contato</a>
          </nav>
          <div className="sl-nav-actions">
            <a
              href="https://github.com/rodrigordgfs/"
              target="_blank"
              rel="noreferrer"
              className="sl-github"
              aria-label="GitHub da ShinodaLabs"
            >
              <Github size={17} />
              <span>GitHub</span>
            </a>
            <button
              onClick={toggleTheme}
              aria-label={dark ? "Ativar tema claro" : "Ativar tema escuro"}
            >
              {dark ? <Moon size={19} /> : <Sun size={19} />}
            </button>
            <button
              className="sl-menu-toggle"
              ref={menuButton}
              aria-label={menu ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menu}
              aria-controls="sl-mobile-nav"
              onClick={() => setMenu(!menu)}
            >
              {menu ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {menu && (
          <nav className="sl-mobile-nav" id="sl-mobile-nav" aria-label="Navegação móvel">
            {[
              ["Serviços", "#services"],
              ["Projetos", "#work"],
              ["Sobre o estúdio", "#about"],
              ["Como funciona", "#process"],
              ["Contato", "#contact"],
            ].map(([text, href]) => (
              <a key={href} href={href} onClick={() => setMenu(false)}>
                {text}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="conteudo-principal" tabIndex={-1}>
        <MotionSection className="sl-hero" background="mesh">
          <div className="sl-container">
            <div className="sl-hero-grid">
              <div>
                <p className="sl-eyebrow">ESTÚDIO DIGITAL INDEPENDENTE</p>
                <h1>Sites de alta performance para marcas que querem ir além.</h1>
                <p className="sl-hero-description">
                  Transformamos ideias em experiências digitais que conectam marcas e pessoas.
                  Design sob medida, engenharia de precisão e uma base sólida para transformar
                  visitantes em clientes.
                </p>
                <dl className="sl-pillars">
                  {[
                    ["Design", "sob medida"],
                    ["Performance", "desde a base"],
                    ["SEO técnico", "para ser encontrado"],
                    ["Código", "feito para evoluir"],
                  ].map(([a, b]) => (
                    <div key={a}>
                      <dt>{a}</dt>
                      <dd>{b}</dd>
                    </div>
                  ))}
                </dl>
                <div className="sl-buttons">
                  <a className="sl-button sl-button-primary" href="#contact">
                    Iniciar projeto <ArrowUpRight size={17} />
                  </a>
                  <a className="sl-button" href="#work">
                    Ver projetos <ArrowRight size={17} />
                  </a>
                </div>
              </div>
              <StackGlobe dark={dark} />
            </div>
            <dl className="sl-stats">
              {[
                ["7+", "ANOS DE EXPERIÊNCIA"],
                ["5", "PROJETOS SELECIONADOS"],
                ["Sob medida", "DESIGN & DESENVOLVIMENTO"],
                ["24h", "PRAZO PARA PRIMEIRO CONTATO"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </MotionSection>
        <MotionSection className="sl-section sl-ecosystem">
          <div className="sl-container">
            <SectionTitle
              eyebrow="ECOSSISTEMA DE DESENVOLVIMENTO"
              title="Tecnologia que trabalha pelo seu negócio"
              text="Ferramentas modernas e uma arquitetura sólida para criar experiências rápidas, acessíveis e prontas para evoluir."
            />
            <div className="sl-tech-grid">
              {[
                ["⚛", "React"],
                ["N", "Next.js"],
                ["TS", "TypeScript"],
                ["≈", "Tailwind CSS"],
                ["◇", "Figma"],
                ["▲", "Vercel"],
                ["V", "Vue.js"],
                ["◈", "TanStack"],
                ["↗", "Motion"],
                ["⬡", "Node.js"],
                ["⌘", "GitHub"],
                ["◎", "Web APIs"],
              ].map(([mark, label]) => (
                <div key={label}>
                  <AnimatedIcon>{mark}</AnimatedIcon>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </MotionSection>
        <MotionSection className="sl-section" id="about">
          <div className="sl-container">
            <SectionTitle
              eyebrow="UMA BASE BEM CONSTRUÍDA"
              title="Por que ShinodaLabs"
              text="Design e desenvolvimento lado a lado, com atenção a cada detalhe da experiência digital da sua empresa."
            />
            <div className="sl-benefits">
              <article className="sl-benefit sl-performance">
                <div className="sl-diagram-title">
                  <span>Da ideia à experiência</span>
                  <code>Web core</code>
                </div>
                <div className="sl-flow">
                  <span>Sua ideia</span>
                  <i />
                  <strong>
                    <Layers size={20} />
                    ShinodaLabs<small>design + engenharia</small>
                  </strong>
                  <i />
                  <div>
                    <span>Desktop</span>
                    <span>Tablet</span>
                    <span>Mobile</span>
                  </div>
                </div>
                <h3>Alta performance</h3>
                <p>Código enxuto. Carregamento rápido. Experiência fluida.</p>
                <pre>
                  <span>[shinodalabs]</span>
                  {"\n"}design = "sob medida"{"\n"}performance = "desde a base"{"\n"}experiência =
                  "responsiva"
                </pre>
              </article>
              {[
                {
                  Icon: ShieldCheck,
                  title: "Qualidade & confiança",
                  text: "Código organizado, boas práticas e atenção à segurança em cada entrega.",
                  code: "trust",
                },
                {
                  Icon: Layers,
                  title: "Preparado para crescer",
                  text: "Arquitetura modular para acompanhar os próximos passos do seu negócio.",
                  code: "scale",
                },
                {
                  Icon: MousePointer2,
                  title: "Experiência em primeiro lugar",
                  text: "Navegação intuitiva, acessibilidade e cuidado em cada interação.",
                  code: "ux",
                },
                {
                  Icon: Code2,
                  title: "Desenvolvimento sob medida",
                  text: "Uma solução que respeita sua marca, seus objetivos e seu contexto.",
                  code: "code",
                },
              ].map(({ Icon, title, text, code }) => (
                <article className="sl-benefit" key={code}>
                  <div className="sl-card-icon">
                    <Icon size={24} />
                    <code>{code}</code>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
              <article className="sl-benefit sl-wide">
                <div className="sl-card-icon">
                  <Globe size={24} />
                  <code>web</code>
                </div>
                <h3>Conectado ao seu ecossistema</h3>
                <p>Seu site integrado às ferramentas que já fazem parte da sua operação.</p>
                <div className="sl-integrations">
                  {[
                    ["CONTATO", "WhatsApp", "Conversa direta com seus clientes."],
                    ["DADOS", "Analytics", "Uma base para entender a audiência."],
                    ["BUSCA", "Google", "Estrutura para descoberta orgânica."],
                  ].map(([a, b, c]) => (
                    <div key={a}>
                      <code>{a}</code>
                      <h4>{b}</h4>
                      <p>{c}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </MotionSection>
        <MotionSection className="sl-section" id="services" background="orbits">
          <div className="sl-container">
            <SectionTitle
              eyebrow="SOLUÇÕES DIGITAIS"
              title="Do primeiro pixel ao próximo passo"
              text="Serviços que se complementam para construir uma presença digital consistente."
            />
            <div className="sl-service-tabs" role="tablist" aria-label="Serviços">
              {services.map((s, i) => (
                <button
                  key={s.name}
                  id={`service-tab-${i}`}
                  role="tab"
                  aria-selected={active === i}
                  aria-controls={`service-panel-${i}`}
                  tabIndex={active === i ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => {
                    if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
                      e.preventDefault();
                      const next =
                        e.key === "Home"
                          ? 0
                          : e.key === "End"
                            ? services.length - 1
                            : (i + (e.key === "ArrowRight" ? 1 : -1) + services.length) %
                              services.length;
                      setActive(next);
                      document.getElementById(`service-tab-${next}`)?.focus();
                    }
                  }}
                >
                  <span>
                    {s.tag}
                    <code>{s.code}</code>
                  </span>
                  <s.icon size={20} />
                  <strong>{s.name}</strong>
                </button>
              ))}
            </div>
            {services.map((service, index) => (
              <div
                className="sl-service-panel"
                id={`service-panel-${index}`}
                key={service.name}
                hidden={active !== index}
                role="tabpanel"
                aria-labelledby={`service-tab-${index}`}
                tabIndex={0}
              >
                <ServiceTransition active={index}>
                  <div>
                    <p className="sl-eyebrow">{service.tag}</p>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <a href="#contact" className="sl-text-link">
                      Vamos conversar <ArrowRight size={16} />
                    </a>
                  </div>
                  <div className="sl-service-visual">
                    <div className="sl-visual-core">
                      <service.icon size={25} />
                      <code>{service.code}</code>
                    </div>
                    <div className="sl-visual-branches">
                      {service.points.map((point) => (
                        <span key={point}>
                          <Check size={15} />
                          {point}
                        </span>
                      ))}
                    </div>
                    <span className="sl-visual-caption">ESTRATÉGIA → DESIGN → DESENVOLVIMENTO</span>
                  </div>
                </ServiceTransition>
              </div>
            ))}
          </div>
        </MotionSection>
        <MotionSection className="sl-section" id="process">
          <div className="sl-container">
            <SectionTitle
              eyebrow="PROCESSO TRANSPARENTE"
              title="Uma rota clara, do início ao lançamento"
              text="Você acompanha cada etapa. Eu cuido dos detalhes que transformam uma boa ideia em um produto bem construído."
            />
            <div className="sl-process-table">
              <div className="sl-process-heading">
                <span>Etapa do projeto</span>
                <span>O que construímos juntos</span>
              </div>
              {[
                ["01", "Discovery", "Negócio, audiência, objetivos e escopo bem definidos."],
                [
                  "02",
                  "Estratégia & UX",
                  "Arquitetura de informação, fluxos e protótipos navegáveis.",
                ],
                ["03", "Design system", "Identidade visual, componentes e direção de movimento."],
                ["04", "Engenharia", "Desenvolvimento com tipagem forte, revisão e performance."],
                [
                  "05",
                  "Lançamento & evolução",
                  "Deploy, SEO técnico e próximos passos do produto.",
                ],
              ].map(([n, title, desc]) => (
                <div className="sl-process-row" key={n}>
                  <span>
                    <code>{n}</code>
                    {title}
                  </span>
                  <span>
                    <Check size={18} />
                    {desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>
        <MotionSection className="sl-section" id="work" background="mesh">
          <div className="sl-container">
            <SectionTitle
              eyebrow="PROJETOS SELECIONADOS"
              title="Feitos para marcas com personalidade"
              text="Diferentes mercados. A mesma atenção ao design, à experiência e à qualidade de cada entrega."
            />
            <div className="sl-project-grid">
              {projects.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="sl-project"
                >
                  <div className="sl-project-image">
                    <img
                      src={p.image}
                      alt={`Site ${p.name}`}
                      loading="lazy"
                      width="800"
                      height="500"
                    />
                  </div>
                  <div className="sl-project-content">
                    <div className="sl-project-label">
                      <span>{p.category}</span>
                      <ArrowUpRight size={18} />
                    </div>
                    <h3>{p.name}</h3>
                    <p>{p.text}</p>
                    <code>React · TypeScript · Tailwind CSS</code>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </MotionSection>
        <MotionSection className="sl-section" background="aurora">
          <div className="sl-container">
            <SectionTitle
              eyebrow="DESIGN COM DIREÇÃO"
              title="Seu próximo capítulo começa aqui"
              text="Uma nova marca, um site que precisa evoluir ou uma ideia esperando sair do papel. Vamos construir o próximo passo."
            />
            <div className="sl-launch">
              <div>
                <h2>Uma presença digital à altura da sua ambição.</h2>
                <p>
                  Traga a ideia e o contexto. Eu transformo em uma rota clara de design,
                  desenvolvimento e lançamento.
                </p>
                <div className="sl-buttons">
                  <a
                    className="sl-button sl-button-primary"
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Enviar briefing <ArrowUpRight size={16} />
                  </a>
                  <a className="sl-button" href="mailto:shinodalabs@gmail.com">
                    Enviar e-mail <ArrowRight size={16} />
                  </a>
                </div>
              </div>
              <div className="sl-launch-diagram" aria-hidden="true">
                <div>
                  <Code2 size={32} />
                  <span>build.</span>
                </div>
                <i />
                <div>
                  <Rocket size={32} />
                  <span>launch.</span>
                </div>
              </div>
            </div>
          </div>
        </MotionSection>
        <MotionSection className="sl-section" id="faq">
          <div className="sl-container">
            <SectionTitle
              eyebrow="PERGUNTAS FREQUENTES"
              title="Antes de começar"
              text="Respostas diretas sobre o estúdio e como iniciar seu projeto."
            />
            <div className="sl-faq">
              {siteContent.faq.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </MotionSection>
        <MotionSection className="sl-section" id="contact">
          <div className="sl-container">
            <SectionTitle
              eyebrow="CONTATO DIRETO"
              title="Vamos conversar"
              text="Conte sobre o seu negócio, o que você quer construir e onde quer chegar."
            />
            <a className="sl-contact-card" href={whatsapp} target="_blank" rel="noreferrer">
              <div className="sl-contact-person">
                <img
                  src={avatar}
                  alt="Rodrigo, fundador da ShinodaLabs"
                  width="64"
                  height="64"
                  loading="lazy"
                />
                <div>
                  <h3>Fale com quem vai construir seu projeto.</h3>
                  <p>Rodrigo · Fundador & desenvolvedor · Resposta em até 24h</p>
                </div>
              </div>
              <ArrowUpRight size={25} />
            </a>
            <a className="sl-email" href="mailto:shinodalabs@gmail.com">
              shinodalabs@gmail.com <ArrowUpRight size={14} />
            </a>
          </div>
        </MotionSection>
      </main>
      <footer className="sl-footer">
        <div className="sl-container">
          <div className="sl-footer-grid">
            <div>
              <a href="#top" aria-label="Voltar ao início">
                <Brand />
              </a>
              <p>
                Estúdio digital independente.
                <br />
                Design com intenção. Código com precisão.
              </p>
            </div>
            <div>
              <h3>Serviços</h3>
              {services.slice(0, 5).map((s, i) => (
                <a key={s.name} href="#services" onClick={() => setActive(i)}>
                  {s.name}
                </a>
              ))}
            </div>
            <div>
              <h3>Estúdio</h3>
              <a href="#about">Sobre a ShinodaLabs</a>
              <a href="#work">Projetos selecionados</a>
              <a href="#process">Nosso processo</a>
              <a href="#faq">Perguntas frequentes</a>
              <a href="#contact">Contato</a>
            </div>
            <div>
              <h3>Conecte-se</h3>
              <a href="https://github.com/rodrigordgfs/" target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight size={12} />
              </a>
              <a href="https://www.linkedin.com/in/shinoda-labs/" target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight size={12} />
              </a>
              <a href="https://instagram.com/shinodalabs/" target="_blank" rel="noreferrer">
                Instagram <ArrowUpRight size={12} />
              </a>
              <a href={whatsapp} target="_blank" rel="noreferrer">
                WhatsApp <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
          <div className="sl-footer-bottom">
            <span>© {new Date().getFullYear()} ShinodaLabs. Todos os direitos reservados.</span>
            <span>Feito com atenção aos detalhes.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
