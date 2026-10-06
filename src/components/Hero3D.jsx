import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";

function Orb() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh scale={1.9}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial color="#6366f1" distort={0.45} speed={2} roughness={0.15} metalness={0.7} />
      </mesh>
    </Float>
  );
}

function Ring({ radius, color, speed, tilt }) {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.z += delta * speed;
  });
  return (
    <mesh ref={ref} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.012, 16, 120]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 5]} intensity={2} color="#a5b4fc" />
      <pointLight position={[-4, -2, 3]} intensity={30} color="#22d3ee" />
      <Orb />
      <Ring radius={3} color="#818cf8" speed={0.4} tilt={1.2} />
      <Ring radius={3.5} color="#22d3ee" speed={-0.3} tilt={0.5} />
      <Stars radius={50} depth={30} count={1500} factor={3} fade speed={1} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
    </Canvas>
  );
}