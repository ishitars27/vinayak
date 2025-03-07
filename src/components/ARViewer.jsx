import React from "react";
import { Canvas } from "@react-three/fiber";
import { XR, ARButton } from "@react-three/xr";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={0.5} />;
};

const ARViewer = ({ product, onClose }) => {
  if (!product || !product.model) return null; // Ensure product is valid

  return (
    <div className="ar-overlay">
      {/* ✅ Place ARButton Outside Canvas */}
      <ARButton sessionInit={{ requiredFeatures: ['hit-test'] }}>View in AR</ARButton>

      <Canvas>
        <XR>
          <ambientLight intensity={0.5} />
          <OrbitControls />
          <Model modelPath={product.model} />
        </XR>
      </Canvas>

      <button className="ar-close" onClick={onClose}>Close AR</button>
    </div>
  );
};

export default ARViewer;
