function getGoogleTagId(tagId: string | undefined) {
  const id = tagId?.trim();
  return id && /^G-[A-Z0-9]+$/i.test(id) ? id : undefined;
}

function getTagManagerId(tagId: string | undefined) {
  const id = tagId?.trim();
  return id && /^GTM-[A-Z0-9]+$/i.test(id) ? id : undefined;
}

export const GOOGLE_TAG_ID = getGoogleTagId(import.meta.env.VITE_SHINODALABS_GA_ID);

export const LAWYER_LANDING_GOOGLE_TAG_ID = getGoogleTagId(import.meta.env.VITE_LP_ADVOGADOS_GA_ID);
export const LAWYER_LANDING_TAG_MANAGER_ID = getTagManagerId(import.meta.env.VITE_LP_ADVOGADOS_GTM_ID);

export const GYM_LANDING_GOOGLE_TAG_ID = getGoogleTagId(import.meta.env.VITE_LP_ACADEMIAS_GA_ID);
export const GYM_LANDING_TAG_MANAGER_ID = getTagManagerId(import.meta.env.VITE_LP_ACADEMIAS_GTM_ID);

export const LANDING_ANALYTICS: Record<string, { ga?: string; gtm?: string }> = {
  "/landing-page-advogados": {
    ga: LAWYER_LANDING_GOOGLE_TAG_ID,
    gtm: LAWYER_LANDING_TAG_MANAGER_ID,
  },
  "/landing-page-academias": {
    ga: GYM_LANDING_GOOGLE_TAG_ID,
    gtm: GYM_LANDING_TAG_MANAGER_ID,
  },
  "/landing-page-dentistas": {
    ga: getGoogleTagId(import.meta.env.VITE_LP_DENTISTAS_GA_ID),
    gtm: getTagManagerId(import.meta.env.VITE_LP_DENTISTAS_GTM_ID),
  },
  "/landing-page-clinicas-medicas": {
    ga: getGoogleTagId(import.meta.env.VITE_LP_CLINICAS_MEDICAS_GA_ID),
    gtm: getTagManagerId(import.meta.env.VITE_LP_CLINICAS_MEDICAS_GTM_ID),
  },
  "/landing-page-psicologos": {
    ga: getGoogleTagId(import.meta.env.VITE_LP_PSICOLOGOS_GA_ID),
    gtm: getTagManagerId(import.meta.env.VITE_LP_PSICOLOGOS_GTM_ID),
  },
  "/landing-page-veterinarias": {
    ga: getGoogleTagId(import.meta.env.VITE_LP_VETERINARIAS_GA_ID),
    gtm: getTagManagerId(import.meta.env.VITE_LP_VETERINARIAS_GTM_ID),
  },
  "/landing-page-saloes": {
    ga: getGoogleTagId(import.meta.env.VITE_LP_SALOES_GA_ID),
    gtm: getTagManagerId(import.meta.env.VITE_LP_SALOES_GTM_ID),
  },
  "/landing-page-imobiliarias": {
    ga: getGoogleTagId(import.meta.env.VITE_LP_IMOBILIARIAS_GA_ID),
    gtm: getTagManagerId(import.meta.env.VITE_LP_IMOBILIARIAS_GTM_ID),
  },
  "/landing-page-arquitetos": {
    ga: getGoogleTagId(import.meta.env.VITE_LP_ARQUITETOS_GA_ID),
    gtm: getTagManagerId(import.meta.env.VITE_LP_ARQUITETOS_GTM_ID),
  },
  "/landing-page-fotografos": {
    ga: getGoogleTagId(import.meta.env.VITE_LP_FOTOGRAFOS_GA_ID),
    gtm: getTagManagerId(import.meta.env.VITE_LP_FOTOGRAFOS_GTM_ID),
  },
  "/landing-page-contadores": {
    ga: getGoogleTagId(import.meta.env.VITE_LP_CONTADORES_GA_ID),
    gtm: getTagManagerId(import.meta.env.VITE_LP_CONTADORES_GTM_ID),
  },
  "/landing-page-tatuagem": {
    ga: getGoogleTagId(import.meta.env.VITE_LP_TATUAGEM_GA_ID),
    gtm: getTagManagerId(import.meta.env.VITE_LP_TATUAGEM_GTM_ID),
  },
};
