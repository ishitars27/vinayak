import React from "react";
import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  const gltf = useGLTF("/helmet.glb"); // Replace with your 3D model path
  return <primitive object={gltf.scene} scale={1} />;
};

const ARViewer = () => {
  return (
    <div>
      {/* AR Button to enable AR mode */}
      <ARButton />
      <Canvas>
        <XR>
          <ambientLight intensity={0.5} />
          <OrbitControls />
          <Model />
        </XR>
      </Canvas>
    </div>
  );
};
export default ARViewer;
