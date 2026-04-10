"use client";

import { OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Mesh } from "three";

function FloatingShape() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.35;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.9) * 0.2;
  });

  const color = useMemo(() => "#2f8f67", []);

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.2, 0.34, 180, 20]} />
      <meshStandardMaterial color={color} metalness={0.7} roughness={0.2} />
    </mesh>
  );
}

export function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[2, 2, 2]} intensity={1.3} color="#f3e8c8" />
      <pointLight position={[-3, -2, -2]} intensity={0.9} color="#2f8f67" />
      <Sparkles count={80} scale={7} size={2.1} speed={0.4} color="#d8b56b" />
      <FloatingShape />
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={1.2} />
    </Canvas>
  );
}
