"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { useZoerIframe } from "@/hooks/useZoerIframe";
import { Theme } from "@zoerai/zoer-copilot";

function GlobalClientEffectsContent() {
  const { theme } = useTheme();

  // Global hooks
  useZoerIframe();

  const ZoerCopilot = dynamic(
    async () => {
      const mod = await import("@zoerai/zoer-copilot");
      return mod.ZoerCopilot;
    },
    { ssr: false }
  );

  return <ZoerCopilot theme={theme as Theme} postgrestApiKey={''} />;
}

export default function GlobalClientEffects() {
  return (
    <Suspense fallback={null}>
      <GlobalClientEffectsContent />
    </Suspense>
  );
}    