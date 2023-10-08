/* eslint-disable react/no-unknown-property */

import { Center, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { CameraRig } from './CameraRig';
import { Jersey } from './models/Jersey';
export const CanvasTool = () => {
  return (
    <Canvas
      shadows
      style={{ width: `100%`, height: `500px`, position: `relative` }}
      camera={{ fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.5} />
      <Environment preset='city' />
      <CameraRig>
        {/* <Backdrop /> */}
        <Center>
          <Jersey />
        </Center>
      </CameraRig>
    </Canvas>
  );
};
