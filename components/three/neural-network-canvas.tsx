"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

interface NeuralNetworkProps {
  density?: number;
  className?: string;
}

function Nodes({ count }: { count: number }) {
  const points = useRef<THREE.Points>(null);
  const lines = useRef<THREE.LineSegments>(null);
  const { mouse, viewport } = useThree();

  const { positions, velocities, edgeBuffer, basePositions } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const basePositions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const x = (Math.random() - 0.5) * 14;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 6;
      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;
      basePositions[i3] = x;
      basePositions[i3 + 1] = y;
      basePositions[i3 + 2] = z;
      velocities[i3] = (Math.random() - 0.5) * 0.0015;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.0015;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.0008;
    }

    const edgeBuffer = new Float32Array(count * count * 6);
    return { positions, velocities, edgeBuffer, basePositions };
  }, [count]);

  const linesGeom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(edgeBuffer, 3));
    g.setDrawRange(0, 0);
    return g;
  }, [edgeBuffer]);

  const pointsGeom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [positions]);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const pos = pointsGeom.attributes.position.array as Float32Array;
    const targetMouseX = (mouse.x * viewport.width) / 2;
    const targetMouseY = (mouse.y * viewport.height) / 2;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const bx = basePositions[i3];
      const by = basePositions[i3 + 1];
      const bz = basePositions[i3 + 2];

      // gentle drift
      pos[i3] = bx + Math.sin(t * 0.18 + i * 0.5) * 0.3;
      pos[i3 + 1] = by + Math.cos(t * 0.22 + i * 0.4) * 0.25;
      pos[i3 + 2] = bz + Math.sin(t * 0.14 + i * 0.7) * 0.2;

      // subtle cursor attraction
      const dx = targetMouseX - pos[i3];
      const dy = targetMouseY - pos[i3 + 1];
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 3.5) {
        const force = (1 - dist / 3.5) * 0.18;
        pos[i3] += dx * force * delta;
        pos[i3 + 1] += dy * force * delta;
      }
    }
    pointsGeom.attributes.position.needsUpdate = true;

    // recompute edges
    const edgeArr = linesGeom.attributes.position.array as Float32Array;
    let ei = 0;
    const maxDist = 1.7;
    const maxDistSq = maxDist * maxDist;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const ax = pos[i3];
      const ay = pos[i3 + 1];
      const az = pos[i3 + 2];
      for (let j = i + 1; j < count; j++) {
        const j3 = j * 3;
        const dx = ax - pos[j3];
        const dy = ay - pos[j3 + 1];
        const dz = az - pos[j3 + 2];
        const dsq = dx * dx + dy * dy + dz * dz;
        if (dsq < maxDistSq) {
          edgeArr[ei++] = ax;
          edgeArr[ei++] = ay;
          edgeArr[ei++] = az;
          edgeArr[ei++] = pos[j3];
          edgeArr[ei++] = pos[j3 + 1];
          edgeArr[ei++] = pos[j3 + 2];
        }
      }
    }
    linesGeom.setDrawRange(0, ei / 3);
    linesGeom.attributes.position.needsUpdate = true;

    if (points.current) {
      points.current.rotation.y = Math.sin(t * 0.04) * 0.05;
    }
    if (lines.current) {
      lines.current.rotation.y = Math.sin(t * 0.04) * 0.05;
    }
  });

  return (
    <group>
      <lineSegments ref={lines} geometry={linesGeom}>
        <lineBasicMaterial
          color="#4DA3FF"
          transparent
          opacity={0.18}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
      <points ref={points} geometry={pointsGeom}>
        <pointsMaterial
          size={0.05}
          color="#ffffff"
          transparent
          opacity={0.85}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  );
}

export function NeuralNetworkCanvas({ density = 60, className }: NeuralNetworkProps) {
  return (
    <div className={className} aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.6]}
      >
        <fog attach="fog" args={["#0B0B0F", 6, 14]} />
        <ambientLight intensity={0.4} />
        <Nodes count={density} />
      </Canvas>
    </div>
  );
}
