function getGoogleTagId(tagId: string | undefined) {
  const id = tagId?.trim();
  return id && /^G-[A-Z0-9]+$/i.test(id) ? id : undefined;
}

export const GOOGLE_TAG_ID = getGoogleTagId(import.meta.env.VITE_SHINODALABS_GA_ID);
export const LAWYER_LANDING_GOOGLE_TAG_ID = getGoogleTagId(import.meta.env.VITE_LP_ADVOGADOS_GA_ID);
const lawyerLandingTagManagerId = import.meta.env.VITE_LP_ADVOGADOS_GTM_ID?.trim();

export const LAWYER_LANDING_TAG_MANAGER_ID =
  lawyerLandingTagManagerId && /^GTM-[A-Z0-9]+$/i.test(lawyerLandingTagManagerId)
    ? lawyerLandingTagManagerId
    : undefined;
