"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(
  () => import("@/components/hero-scene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => <div className="scene-loading">Loading 3D scene...</div>
  }
);

export function HeroSceneShell() {
  return <HeroScene />;
}
