const gtmId = import.meta.env.VITE_SHINODALABS_GTM_ID?.trim();

export const GOOGLE_TAG_ID = gtmId && /^G-[A-Z0-9]+$/i.test(gtmId) ? gtmId : undefined;

export const googleTagScript = GOOGLE_TAG_ID
  ? "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','" +
    GOOGLE_TAG_ID +
    "');"
  : undefined;

export const googleTagScriptUrl = GOOGLE_TAG_ID
  ? "https://www.googletagmanager.com/gtag/js?id=" + GOOGLE_TAG_ID
  : undefined;
