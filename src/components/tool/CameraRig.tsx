import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import React, { FC, PropsWithChildren, useRef } from 'react';
// eslint-disable-next-line import/no-unresolved
export const CameraRig: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    // const position = [-0.4, 0, 2];
    easing.damp3(state.camera.position, [0, 0, 2], 0.1, delta);
    easing.dampE(
      ref.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      delta,
    );
  });
  return <group ref={ref}>{children}</group>;
};
