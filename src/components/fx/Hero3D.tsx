import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const LIME = "#c4f13c";
const AMBER = "#f0a43a";
const SERVICE_NODES = 6;

function Scene({ reduced, lite, pointer }: { reduced: boolean; lite: boolean; pointer: React.MutableRefObject<{ x: number; y: number }> }) {
  const rig = useRef<THREE.Group>(null);
  const core = useRef<THREE.Group>(null);
  const rings = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  const wide = viewport.width / viewport.height > 1.1;
  const baseX = wide ? viewport.width * 0.27 : 0;
  const scale = wide ? Math.min(1.05, viewport.height / 6.8) : Math.min(0.85, viewport.width / 6.5);

  const stars = useMemo(() => {
    const n = lite ? 220 : 420;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 3.2 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [lite]);

  const nodes = useMemo(
    () =>
      Array.from({ length: SERVICE_NODES }, (_, i) => ({
        angle: (i / SERVICE_NODES) * Math.PI * 2,
        radius: 2.35 + (i % 2) * 0.35,
        tilt: (i % 3) * 0.4 - 0.4,
        color: i % 2 ? AMBER : LIME,
      })),
    [],
  );

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    if (core.current && !reduced) {
      core.current.rotation.y += dt * 0.18;
      core.current.rotation.x += dt * 0.06;
      const pulse = 1 + Math.sin(t * 1.4) * 0.025;
      core.current.scale.setScalar(pulse);
    }
    if (rings.current && !reduced) {
      rings.current.rotation.z += dt * 0.12;
      rings.current.rotation.y -= dt * 0.08;
    }
    if (rig.current) {
      const targetX = baseX + pointer.current.x * 0.35;
      const targetY = pointer.current.y * 0.25;
      rig.current.position.x += (targetX - rig.current.position.x) * 0.05;
      rig.current.position.y += (targetY - rig.current.position.y) * 0.05;
      rig.current.rotation.y += (pointer.current.x * 0.4 - rig.current.rotation.y) * 0.04;
      rig.current.rotation.x += (-pointer.current.y * 0.25 - rig.current.rotation.x) * 0.04;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 3, 5]} intensity={40} color={LIME} />
      <pointLight position={[-5, -2, 3]} intensity={25} color={AMBER} />

      <group ref={rig} position={[baseX, 0, 0]} scale={scale}>
        <group ref={core}>
          <mesh>
            <icosahedronGeometry args={[1.35, 1]} />
            <meshBasicMaterial color={LIME} wireframe transparent opacity={0.85} />
          </mesh>
          <mesh>
            <icosahedronGeometry args={[1.05, 0]} />
            <meshStandardMaterial color="#2b3318" emissive="#4d6a12" emissiveIntensity={0.55} roughness={0.35} metalness={0.5} flatShading />
          </mesh>
          <mesh scale={1.7}>
            <icosahedronGeometry args={[1, 2]} />
            <meshBasicMaterial color={LIME} wireframe transparent opacity={0.1} />
          </mesh>
        </group>

        <group ref={rings}>
          {nodes.map((n, i) => (
            <group key={i} rotation={[n.tilt, 0, n.angle]}>
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[n.radius, 0.004, 8, 160]} />
                <meshBasicMaterial color={n.color} transparent opacity={0.28} />
              </mesh>
              <mesh position={[n.radius, 0, 0]}>
                <sphereGeometry args={[0.07, 16, 16]} />
                <meshBasicMaterial color={n.color} />
              </mesh>
            </group>
          ))}
        </group>

        <points>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[stars, 3]} />
          </bufferGeometry>
          <pointsMaterial color="#e8f0d0" size={0.022} sizeAttenuation transparent opacity={0.65} depthWrite={false} />
        </points>
      </group>
    </>
  );
}

export default function Hero3D({ active, reduced, lite }: { active: boolean; reduced: boolean; lite: boolean }) {
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced) return;
    const move = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [reduced]);

  return (
    <Canvas
      role="img"
      aria-label="Decorative 3D model: a rotating wireframe core orbited by six service nodes"
      frameloop={active ? (reduced ? "demand" : "always") : "never"}
      dpr={lite ? 1 : [1, 1.25]}
      camera={{ position: [0, 0, 7], fov: 45 }}
      gl={{ antialias: !lite, alpha: true, powerPreference: "high-performance", stencil: false }}
      style={{ pointerEvents: "none" }}
    >
      <Scene reduced={reduced} lite={lite} pointer={pointer} />
    </Canvas>
  );
}
