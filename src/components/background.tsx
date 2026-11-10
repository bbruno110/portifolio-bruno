"use client";

import { useSyncExternalStore } from "react";
import {
  NoiseOcean,
  type NoiseOceanProps,
  type OceanOptions,
} from "noise-ocean-react";

const mobileQuery = "(max-width: 767px), (hover: none) and (pointer: coarse)";

function subscribeToMobile(onChange: () => void) {
  const media = window.matchMedia(mobileQuery);
  if (typeof media.addEventListener === "function") {
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }

  media.addListener(onChange);
  return () => media.removeListener(onChange);
}

function getMobileSnapshot() {
  return window.matchMedia(mobileQuery).matches;
}

function getServerSnapshot() {
  return false;
}

function handleOceanError(error: Error) {
  console.warn("[NoiseOcean]", error.message);
}

type BackgroundProps = NoiseOceanProps & {
  mobileOptions?: Partial<OceanOptions>;
};

export function Background({ mobileOptions, ...props }: BackgroundProps) {
  const isMobile = useSyncExternalStore(
    subscribeToMobile,
    getMobileSnapshot,
    getServerSnapshot,
  );

  return (
    <NoiseOcean
      {...props}
      {...(isMobile ? mobileOptions : {})}
      onError={props.onError ?? handleOceanError}
      position="fixed"
      zIndex={-10}
    />
  );
}
