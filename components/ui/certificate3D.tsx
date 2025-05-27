"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import { cn } from "@/lib/utils";

interface Certificate3DProps {
  imageUrl: string;
  width?: number;
  height?: number;
}

const FloatingCertificate: React.FC<Certificate3DProps> = ({
  imageUrl,
  width = 5,
  height = 5,
}) => {
  const texture = useTexture(imageUrl);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(t / 3) * 0.2;
      meshRef.current.rotation.x = Math.sin(t / 5) * 0.05;
      meshRef.current.position.y = Math.sin(t / 2) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial
        map={texture}
        metalness={0.3}
        roughness={0.4}
        emissive={new THREE.Color("#1a1a1a")}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

const CameraRig: React.FC = () => {
  const { camera } = useThree();
  useFrame(({ mouse }) => {
    camera.position.x += (mouse.x * 1.2 - camera.position.x) * 0.05;
    camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });
  return null;
};

const hoverVariants = {
  initial: {
    scale: 1,
    rotate: 0,
    textShadow: "0px 0px 0px rgba(0,0,0,0)",
  },
  hover: {
    scale: 1.1,
    rotate: -2,
    textShadow: "0px 0px 12px rgba(0, 255, 150, 0.4)",
    color: "#ffffff",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
};

const Certificate3D: React.FC<Certificate3DProps> = (props) => {
  return (
    <div className="relative w-full h-screen mx-auto rounded-xl shadow-2xl overflow-hidden">
      {/* Matching Background */}
      <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-green-500/30 rounded-full blur-[160px] animate-pulse z-0" />
            <motion.div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px", "0px 0px"], // move diagonally by one grid size
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      {/* Certificate Titles with Framer Motion */}
      <motion.div
        className="absolute top-1/2 left-4 -translate-y-1/2 text-7xl font-extrabold text-gray-700 select-none z-10"
        variants={hoverVariants}
        initial="initial"
        whileHover="hover"
      >
        Payout
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-4 -translate-y-1/2 text-7xl font-extrabold text-gray-700 select-none text-right z-10"
        variants={hoverVariants}
        initial="initial"
        whileHover="hover"
      >
        Certificate
      </motion.div>

      {/* Canvas */}
      <Canvas
        style={{ width: "100%", height: "500px", zIndex: 1 }}
        camera={{ position: [0, 0, 7], fov: 50 }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 4, 6]} intensity={1} />
        <spotLight
          position={[0, 5, 5]}
          angle={0.3}
          penumbra={0.5}
          intensity={0.8}
          castShadow
        />
        <FloatingCertificate {...props} />
        <CameraRig />
      </Canvas>
    </div>
  );
};

export default Certificate3D;
