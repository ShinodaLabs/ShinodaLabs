function createGoogleTag(tagId: string | undefined) {
  const id = tagId?.trim();
  const googleTagId = id && /^G-[A-Z0-9]+$/i.test(id) ? id : undefined;

  return {
    id: googleTagId,
    script: googleTagId
      ? "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','" +
        googleTagId +
        "');"
      : undefined,
    scriptUrl: googleTagId
      ? "https://www.googletagmanager.com/gtag/js?id=" + googleTagId
      : undefined,
  };
}

const mainGoogleTag = createGoogleTag(import.meta.env.VITE_SHINODALABS_GTM_ID);
const lawyerLandingGoogleTag = createGoogleTag(import.meta.env.VITE_LP_ADVOGADOS_GTM_ID);

export const GOOGLE_TAG_ID = mainGoogleTag.id;
export const googleTagScript = mainGoogleTag.script;
export const googleTagScriptUrl = mainGoogleTag.scriptUrl;

export const lawyerLandingGoogleTagScript = lawyerLandingGoogleTag.script;
export const lawyerLandingGoogleTagScriptUrl = lawyerLandingGoogleTag.scriptUrl;
