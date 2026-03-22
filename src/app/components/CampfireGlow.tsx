export default function CampfireGlow() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 motion-safe:animate-campfire-flicker"
      style={{
        background:
          "radial-gradient(ellipse at 50% 100%, rgba(249,115,22,0.14) 0%, rgba(245,158,11,0.06) 30%, transparent 65%)",
      }}
      aria-hidden="true"
    />
  );
}
