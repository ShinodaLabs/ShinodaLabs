import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Check,
  MessageCircle,
  Smartphone,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Globe,
  Layers,
  MousePointer2,
  Search,
  ShieldCheck,
  Zap,
} from "@/components/site/LucideAnimated";
import { accountantCampaign, accountantFaq, accountantGoals, accountantWhatsAppMessage } from "@/content/accountant-landing";
import { SITE_EMAIL, SITE_PHONE } from "@/lib/seo";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { LandingFooter } from "@/components/site/LandingFooter";
import "@/components/lawyers/lawyer-landing.css";
import "./accountant-landing.css";

function track(event: string, placement?: string) {
  window.dispatchEvent(
    new CustomEvent("shinodalabs:landing", {
      detail: { event, page: "/landing-page-contadores", ...(placement ? { placement } : {}) },
    }),
  );
}

function CTA({ placement, className = "" }: { placement: string; className?: string }) {
  return (
    <a
      className={`law-button ${className}`}
      href="#conversa"
      onClick={() => track("cta_click", placement)}
    >
      {accountantCampaign.cta}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}

const services = [
  [
    Globe,
    "Estratégia antes do layout",
    "Planejamento das páginas, do público e dos objetivos do escritório.",
  ],
  [
    Layers,
    "Design com identidade",
    "Uma experiência sóbria e contemporânea — sem template de contabilidade.",
  ],
  [
    MousePointer2,
    "Conteúdo que orienta",
    "Serviços, nichos e equipe apresentados com clareza.",
  ],
  [
    Code2,
    "Desenvolvimento sob medida",
    "Uma estrutura organizada, responsiva e preparada para evoluir.",
  ],
  [
    Zap,
    "Performance desde a base",
    "Páginas leves e carregamento eficiente no celular.",
  ],
  [
    Search,
    "SEO e mensuração",
    "Estrutura técnica para busca local e mensuração conforme o escopo.",
  ],
] as const;

export function AccountantLanding() {
  const started = useRef(false);
  const presenceRef = useRef<HTMLElement>(null);
  const [stickyCta, setStickyCta] = useState(false);
  const [handoff, setHandoff] = useState("");

  useEffect(() => {
    track("page_view");
    const seen = new Set<number>();
    const onScroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      if (available <= 0) return;
      const progress = (window.scrollY / available) * 100;
      for (const threshold of [50, 90]) {
        if (progress >= threshold && !seen.has(threshold)) {
          seen.add(threshold);
          track(`scroll_${threshold}`);
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const presence = presenceRef.current;
    const conversa = document.getElementById("conversa");
    if (!presence) return;

    const update = () => {
      const reachedPresence = presence.getBoundingClientRect().top <= window.innerHeight * 0.55;
      const atForm = conversa
        ? conversa.getBoundingClientRect().top < window.innerHeight * 0.72
        : false;
      setStickyCta(reachedPresence && !atForm);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    if (!name) {
      const input = form.elements.namedItem("name") as HTMLInputElement;
      input.setCustomValidity("Informe seu nome.");
      input.reportValidity();
      return;
    }
    const business = String(data.get("business") ?? "").trim();
    const goal = String(data.get("goal") ?? "").trim();
    const message = accountantWhatsAppMessage(name, business, goal);
    const url = `https://wa.me/${SITE_PHONE.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
    track("form_submit", "contact");
    track("whatsapp_click", "contact");
    setHandoff(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className={`law-page accountant-page${stickyCta ? " law-sticky-cta-on" : ""}`}>
      <SmoothScroll />
      <a className="law-skip" href="#conteudo">
        Pular para o conteúdo
      </a>
      <main id="conteudo">
        <section className="law-hero law-wrap law-decorated">
          <div className="law-backdrop law-backdrop-hero" aria-hidden="true">
            <span className="law-backdrop-glow" />
            <span className="law-backdrop-grid" />
            <span className="law-backdrop-orbit" />
          </div>
          <div className="law-hero-copy">
            <p className="law-eyebrow">
              <span /> PRESENÇA DIGITAL PARA CONTADORES
            </p>
            <h1>
              {accountantCampaign.headline}
              <em>{accountantCampaign.highlight}</em>
            </h1>
            <p className="law-intro">{accountantCampaign.description}</p>
            <CTA placement="hero" />
            <p className="law-caption">Seu projeto começa com uma conversa. Sem compromisso.</p>
            <div className="law-hero-points">
              <span>
                <Check size={14} /> Design sob medida
              </span>
              <span>
                <Check size={14} /> Mobile first
              </span>
              <span>
                <Check size={14} /> Foco no contato
              </span>
            </div>
          </div>
          <div className="law-showcase">
            <div className="law-showcase-label">
              <span>O ESPAÇO QUE O SITE APRESENTA.</span>
              <span>01 / REFERÊNCIA</span>
            </div>
            <div className="law-browser">
              <div className="law-browser-bar">
                <span aria-hidden="true">● ● ●</span>
                <span>Ambiente de escritório</span>
                <ShieldCheck size={13} aria-hidden="true" />
              </div>
              <img
                src="/images/hero-landing-page-contadores.webp"
                alt="Prévia conceitual de um site para escritório de contabilidade: sala contemporânea"
                width={1536}
                height={1024}
                fetchPriority="high"
              />
            </div>
            <div className="law-preview-badge">
              <span className="law-icon">
                <Smartphone size={22} />
              </span>
              <div>
                <strong>Do espaço à presença digital.</strong>
                <span>O site traduz ambiente, marca e contato.</span>
              </div>
            </div>
          </div>
        </section>
        <div className="law-strip">
          <div className="law-wrap">
            <span>ESTRATÉGIA</span>
            <i>+</i>
            <span>DESIGN</span>
            <i>+</i>
            <span>DESENVOLVIMENTO</span>
            <i>+</i>
            <span>PERFORMANCE</span>
            <i>=</i>
            <strong>UM SITE À ALTURA DO ESCRITÓRIO.</strong>
          </div>
        </div>

        <section
          ref={presenceRef}
          className="law-section law-wrap law-presence"
          aria-labelledby="diferenca"
        >
          <div className="law-presence-heading">
            <div>
              <p className="law-eyebrow">01 / SEU ESCRITÓRIO NA INTERNET</p>
              <h2 id="diferenca">
                A confiança do atendimento
                <br />
                <span>merece um site à altura.</span>
              </h2>
            </div>
            <p>
              Indicação e WhatsApp sustentam muitos escritórios. Seu site reúne serviços, nichos, equipe e o caminho para uma conversa — especialmente para quem chega pelo Google.
            </p>
          </div>
          <div className="law-presence-grid">
            {[
              {
                Icon: ShieldCheck,
                label: "APRESENTE",
                title: "Uma primeira impressão profissional",
                description:
                  "Mostre o escritório, a equipe e o posicionamento — PME, MEI, nicho — sem template azul genérico.",
                detail: "Seu escritório, com identidade própria.",
              },
              {
                Icon: Layers,
                label: "ESCLAREÇA",
                title: "Serviços fáceis de entender",
                description:
                  "Organize abertura, fiscal, folha e consultivo com clareza, sem jargão vazio e sem milagre tributário.",
                detail: "Conteúdo claro. Navegação intuitiva.",
              },
              {
                Icon: MousePointer2,
                label: "APROXIME",
                title: "O próximo contato começa aqui",
                description:
                  "Facilite WhatsApp, e-mail e o pedido de conversa, com uma experiência confortável no celular.",
                detail: "Canais de contato sempre à mão.",
              },
            ].map(({ Icon, label, title, description, detail }, index) => (
              <article className="law-presence-card" key={label}>
                <div className="law-presence-card-top">
                  <span className="law-presence-icon">
                    <Icon size={28} />
                  </span>
                  <span className="law-small-label">
                    0{index + 1} / {label}
                  </span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="law-presence-detail">
                  <Check size={15} aria-hidden="true" />
                  {detail}
                </div>
              </article>
            ))}
          </div>
          <div className="law-presence-footer">
            <p>
              <strong>Um endereço próprio para o seu escritório.</strong>
              <br />
              Para quem chega por indicação, pelas redes ou pela busca.
            </p>
            <a href="#conversa" onClick={() => track("cta_click", "presence")}>
              {accountantCampaign.cta} <ArrowRight size={18} />
            </a>
          </div>
        </section>

        <section className="law-section law-surface law-decorated" aria-labelledby="entrega">
          <div className="law-backdrop law-backdrop-services" aria-hidden="true">
            <span className="law-backdrop-glow" />
            <span className="law-backdrop-grid" />
            <span className="law-backdrop-orbit" />
          </div>
          <div className="law-wrap">
            <div className="law-section-heading">
              <p className="law-eyebrow">02 / A SOLUÇÃO SHINODALABS</p>
              <h2 id="entrega">
                Muito além de uma
                <br />
                <span>boa primeira impressão.</span>
              </h2>
              <p>
                Da primeira ideia ao site no ar, cada parte tem uma função: apresentar o escritório e facilitar o contato comercial.
              </p>
            </div>
            <div className="law-services">
              {services.map(([Icon, title, description], index) => (
                <article className="law-service-card" key={title}>
                  <div className="law-service-top">
                    <span className="law-service-icon">
                      <Icon size={25} />
                    </span>
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="law-fit law-wrap">
          <div>
            <p className="law-eyebrow">SEU MOMENTO, SEU PROJETO</p>
            <h2>
              Uma solução para
              <br />
              <span>a próxima fase do escritório.</span>
            </h2>
          </div>
          <ul>
            {[
              "Você está criando a primeira presença digital profissional.",
              "Seu site é datado ou genérico.",
              "Você quer um endereço próprio além do WhatsApp.",
              "Você quer apresentar serviços e nichos com clareza.",
            ].map((text) => (
              <li key={text}>
                <Check size={19} aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
        </section>

        <section
          className="law-section law-wrap law-faq law-faq-refined"
          aria-labelledby="duvidas-titulo"
        >
          <div className="law-faq-intro">
            <p className="law-eyebrow">03 / SEM PONTAS SOLTAS</p>
            <h2 id="duvidas-titulo">
              Um novo site começa
              <br />
              <span>com boas respostas.</span>
            </h2>
            <p>
              Do investimento à publicação, entenda como funciona a criação do site do escritório e o que alinhamos antes de começar.
            </p>
            <div className="law-faq-help">
              <MessageCircle size={28} />
              <h3>Seu projeto tem uma dúvida específica?</h3>
              <p>
                Conte o que você precisa. Vamos conversar sobre as possibilidades para o seu escritório.
              </p>
              <a href="#conversa" onClick={() => track("cta_click", "faq")}>
                Quero tirar uma dúvida <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="law-faq-list">
            <p className="law-faq-list-label">
              <ShieldCheck size={16} /> INFORMAÇÃO CLARA, DESDE O INÍCIO
            </p>
            {accountantFaq.map(([question, answer], index) => (
              <details key={question}>
                <summary>
                  <span className="law-faq-number" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <span className="law-faq-question">{question}</span>
                  <span className="law-faq-toggle" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="conversa" className="law-section law-wrap">
          <div className="law-contact law-decorated">
            <div className="law-backdrop law-backdrop-contact" aria-hidden="true">
              <span className="law-backdrop-glow" />
              <span className="law-backdrop-orbit" />
            </div>
            <div>
              <p className="law-eyebrow">VAMOS CONSTRUIR SEU PRÓXIMO PASSO</p>
              <h2>
                Seu escritório tem valor.
                <br />
                <span>Sua presença digital pode mostrar isso.</span>
              </h2>
              <p>
                Conte um pouco sobre seu momento. Vamos conversar sobre o site que faz sentido para o seu escritório.
              </p>
              <div className="law-contact-note">
                <MessageCircle size={23} aria-hidden="true" />
                <span>
                  Conversa direta com a ShinodaLabs.
                  <br />
                  Proposta personalizada para o seu projeto.
                </span>
              </div>
              <a className="law-email" href={`mailto:${SITE_EMAIL}`}>
                Prefere e-mail? {SITE_EMAIL} <ArrowUpRight size={14} />
              </a>
            </div>
            <form
              onSubmit={submit}
              onFocus={() => {
                if (!started.current) {
                  started.current = true;
                  track("form_start", "contact");
                }
              }}
            >
              <h3>Vamos falar sobre seu projeto</h3>
              <p>Preencha e continue a conversa no WhatsApp.</p>
              <label htmlFor="accountant-name">
                Seu nome <span>(obrigatório)</span>
              </label>
              <input
                id="accountant-name"
                name="name"
                autoComplete="name"
                required
                maxLength={100}
                placeholder="Como podemos chamar você?"
                onInput={(event) => event.currentTarget.setCustomValidity("")}
              />
              <label htmlFor="accountant-business">
                Escritório <span>(opcional)</span>
              </label>
              <input
                id="accountant-business"
                name="business"
                autoComplete="organization"
                maxLength={150}
                placeholder="Nome do escritório"
              />
              <label htmlFor="accountant-goal">
                Qual é o seu momento? <span>(opcional)</span>
              </label>
              <select id="accountant-goal" name="goal" defaultValue="">
                <option value="">Selecione uma opção</option>
                {accountantGoals.map((goal) => (
                  <option key={goal}>{goal}</option>
                ))}
              </select>
              <p className="law-form-privacy">
                Os dados serão usados para conversar sobre seu projeto. Ao continuar, você abre o
                WhatsApp com uma mensagem pronta para revisar e enviar.{" "}
                <a href="#privacidade">Saiba como seus dados são tratados.</a>
              </p>
              <button className="law-button" type="submit">
                Continuar no WhatsApp <ArrowUpRight size={18} aria-hidden="true" />
              </button>
              {handoff && (
                <p className="law-handoff" role="status">
                  Sua mensagem está pronta; o envio é feito por você no WhatsApp. Se a janela não
                  abriu,{" "}
                  <a
                    href={handoff}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => track("whatsapp_click", "retry")}
                  >
                    clique aqui para continuar
                  </a>
                  .
                </p>
              )}
            </form>
          </div>
        </section>
        <section className="law-wrap law-privacy" id="privacidade">
          <details>
            <summary>Privacidade neste contato</summary>
            <p>
              Os campos deste formulário ficam apenas na memória da página e não são gravados por
              ela. Ao continuar, nome, escritório e objetivo informados são
              incluídos no endereço da mensagem enviada ao WhatsApp, que poderá constar no
              histórico do navegador. Você decide se envia a mensagem. A ShinodaLabs usará o contato
              recebido para responder à solicitação comercial. Evite enviar dados fiscais de clientes. Dados financeiros de terceiros não devem ir nesta conversa.
            </p>
            <p>
              O WhatsApp aplica sua própria{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noreferrer"
              >
                política de privacidade
              </a>
              . A página também utiliza o Vercel Analytics já presente no site para métricas de
              navegação; os campos do formulário não são enviados nos eventos desta página. Para
              dúvidas ou pedidos relativos aos seus dados, escreva para{" "}
              <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.
            </p>
          </details>
        </section>
      </main>
      <LandingFooter
        studioLine="Estúdio digital · soluções para contabilidade"
        onContactClick={() => track("cta_click", "footer")}
      />
      <div className="law-mobile-cta" aria-hidden={!stickyCta} inert={!stickyCta || undefined}>
        <CTA placement="mobile" />
      </div>
    </div>
  );
}
