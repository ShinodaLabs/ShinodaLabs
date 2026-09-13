import { useEffect } from "react";
import TagManager from "@sooro-io/react-gtm-module";
import ReactGA from "react-ga4";
import { useRouterState } from "@tanstack/react-router";
import {
  GOOGLE_TAG_ID,
  LAWYER_LANDING_GOOGLE_TAG_ID,
  LAWYER_LANDING_TAG_MANAGER_ID,
} from "@/lib/google-tag-manager";

const configuredGoogleTags = new Set<string>();
let initializedTagManager = false;

export function GoogleTracking() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const isLawyerLanding = pathname === "/landing-page-advogados";

  useEffect(() => {
    const tagIds = [
      GOOGLE_TAG_ID,
      isLawyerLanding ? LAWYER_LANDING_GOOGLE_TAG_ID : undefined,
    ].filter((id): id is string => Boolean(id));
    const newTagIds = tagIds.filter((id) => !configuredGoogleTags.has(id));

    if (newTagIds.length > 0) {
      if (configuredGoogleTags.size === 0) {
        ReactGA.initialize(newTagIds.map((trackingId) => ({ trackingId })));
      } else {
        newTagIds.forEach((trackingId) => ReactGA.gtag("config", trackingId));
      }

      newTagIds.forEach((id) => configuredGoogleTags.add(id));
    }

    if (tagIds.length > 0) {
      ReactGA.send({ hitType: "pageview", page: pathname });
    }

    if (isLawyerLanding && LAWYER_LANDING_TAG_MANAGER_ID && !initializedTagManager) {
      TagManager.initialize({ gtmId: LAWYER_LANDING_TAG_MANAGER_ID });
      initializedTagManager = true;
    }
  }, [isLawyerLanding, pathname]);

  return null;
}
