import { useEffect } from "react";
import TagManager from "@sooro-io/react-gtm-module";
import ReactGA from "react-ga4";
import { useRouterState } from "@tanstack/react-router";
import { GOOGLE_TAG_ID, LANDING_ANALYTICS } from "@/lib/google-tag-manager";

const configuredGoogleTags = new Set<string>();
let initializedTagManager = false;

export function GoogleTracking() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const landing = LANDING_ANALYTICS[pathname];

  useEffect(() => {
    const tagIds = [GOOGLE_TAG_ID, landing?.ga].filter((id): id is string => Boolean(id));
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

    if (landing?.gtm && !initializedTagManager) {
      TagManager.initialize({ gtmId: landing.gtm });
      initializedTagManager = true;
    }
  }, [landing, pathname]);

  return null;
}
