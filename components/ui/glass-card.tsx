"use client";

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const MyGLTFModel = () => {
  const { scene } = useGLTF("/models/scene.gltf"); // path from public folder
  const modelRef = useRef<THREE.Group>(null);

  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={5}
      position={[0, -1, 0]}
    />
  );
};

const GLTFScene = () => {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
        {/* <ambientLight intensity={0.2} color="#facc15"/> */}
        {/* <directionalLight position={[3, 5, 5]} intensity={1} color="#facc15" /> */}
        <Environment preset="studio" background={false} />
        <MyGLTFModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default GLTFScene;
