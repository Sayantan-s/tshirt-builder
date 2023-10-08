/* eslint-disable react/no-unknown-property */
import { Decal, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useTool } from '@src/store';
import { easing } from 'maath';
import React from 'react';

type GLTFResult = ReturnType<typeof useGLTF> & {
  nodes: {
    T_Shirt_male: THREE.Mesh;
  };
  materials: {
    lambert1: THREE.MeshStandardMaterial;
  };
};

export const Jersey = () => {
  const { nodes, materials } = useGLTF('/shirt_baked.glb') as GLTFResult;
  const tool = useTool();

  useFrame((_, delta) => {
    easing.dampC(materials.lambert1.color, tool.color, 0.25, delta);
  });

  return (
    <group key={JSON.stringify(tool)}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
      >
        <Decal
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={1}
          depthTest={false}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload('/shirt_baked.glb') as GLTFResult;
