import { create } from 'zustand';

const state = {
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
};

const useToolStore = create<typeof state>(() => state);

export const useTool = () => useToolStore((state) => state);
