import { create } from 'zustand';

interface DataStoreProps {
  data: any;
  setData: (data: any) => void;
}

export const DataStore = create<DataStoreProps>((set) => ({
  data: null,
  setData: (data) => set({ data }),
}));
