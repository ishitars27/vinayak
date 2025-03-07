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
    <>
      {/* ✅ Ensure ARButton is Clickable */}
      <ARButton 
        sessionInit={{ requiredFeatures: ['hit-test'] }} 
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000, // Ensure it's above other elements
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        View in AR
      </ARButton>

      <div className="ar-overlay">
        <Canvas>
          <XR>
            <ambientLight intensity={0.5} />
            <OrbitControls />
            <Model modelPath={product.model} />
          </XR>
        </Canvas>

        <button className="ar-close" onClick={onClose}>Close AR</button>
      </div>
    </>
  );
};

export default ARViewer;
