import { SITE_EMAIL } from "@/lib/seo";

type LandingFooterProps = {
  studioLine: string;
  onContactClick?: () => void;
};

const pageLinks = [
  ["A diferença", "#diferenca"],
  ["O que entregamos", "#entrega"],
  ["Dúvidas", "#duvidas-titulo"],
  ["Conversar", "#conversa"],
] as const;

export function LandingFooter({ studioLine, onContactClick }: LandingFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="law-footer">
      <div className="law-wrap">
        <div className="law-footer-grid">
          <div className="law-footer-brand">
            <a className="law-brand" href="/" aria-label="ShinodaLabs — início">
              <img src="/logo.png" alt="" width={171} height={38} decoding="async" />
            </a>
            <p>Design com intenção. Código com precisão.</p>
            <span className="law-footer-note">{studioLine}</span>
          </div>
          <nav className="law-footer-col" aria-label="Nesta página">
            <p className="law-footer-heading">Nesta página</p>
            <ul className="law-footer-links">
              {pageLinks.map(([label, href]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="law-footer-col">
            <p className="law-footer-heading">Estúdio</p>
            <ul className="law-footer-links">
              <li>
                <a href="/">ShinodaLabs</a>
              </li>
              <li>
                <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
              </li>
              <li>
                <a href="#conversa" onClick={onContactClick}>
                  Vamos conversar
                </a>
              </li>
              <li>
                <a href="#privacidade">Privacidade</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="law-footer-bottom">
          <span>© {year} ShinodaLabs. Todos os direitos reservados.</span>
          <a href="/">Voltar ao site</a>
        </div>
      </div>
    </footer>
  );
}
