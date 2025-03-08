import { create } from 'zustand';

interface StoreState {
    openSidebar: boolean;
    setOpenSidebar: (openSidebar: boolean) => void;
}

export const useStore = create<StoreState>((set) => ({
    openSidebar: false,
    setOpenSidebar: (openSidebar) => set((state) => ({ ...state, openSidebar })),
}));
