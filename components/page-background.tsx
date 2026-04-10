"use client";

import { Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

function MovingStars() {
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.012;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.04;
  });

  return (
    <group ref={groupRef}>
      <Sparkles count={260} scale={[20, 26, 14]} size={2.4} speed={0.08} noise={0.16} color="#d8b56b" />
      <Sparkles count={140} scale={[22, 30, 16]} size={1.8} speed={0.05} noise={0.12} color="#f2d796" />
    </group>
  );
}

export function PageBackground() {
  return (
    <div className="page-background" aria-hidden>
      <Canvas camera={{ position: [0, 0, 11], fov: 50 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.35} />
        <MovingStars />
      </Canvas>
    </div>
  );
}
