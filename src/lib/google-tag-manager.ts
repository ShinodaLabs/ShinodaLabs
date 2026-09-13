const gtmId = import.meta.env.VITE_SHINODALABS_GTM_ID?.trim();

export const GOOGLE_TAG_MANAGER_ID = gtmId && /^GTM-[A-Z0-9]+$/i.test(gtmId) ? gtmId : undefined;

const scriptStart =
  "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','";

export const googleTagManagerScript = GOOGLE_TAG_MANAGER_ID
  ? scriptStart + GOOGLE_TAG_MANAGER_ID + "');"
  : undefined;
