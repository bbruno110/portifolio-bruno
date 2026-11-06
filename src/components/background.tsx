"use client";

import ContourTide, {
  type TideOptions,
} from "@bruno-oliveira/contour-tide";

export function Background({
  eventSource = "window",
  ...props
}: TideOptions) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    >
      <ContourTide
        {...props}
        eventSource={eventSource}
        style={{
          width: "100%",
          height: "100%",
          aspectRatio: "auto",
        }}
      />
    </div>
  );
}