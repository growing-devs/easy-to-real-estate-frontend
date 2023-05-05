import create from 'zustand';
import { persist } from 'zustand/middleware';

interface ResponseItem {
  id: number;
  filename: string;
  data: string;
}

interface DataStoreState {
  responseItems: ResponseItem[];
  addResponseItem: (filename: string, data: string) => void;
  removeResponseItem: (id: number) => void;
}

export const useDataStore = create<DataStoreState>()(
  persist(
    (set) => ({
      responseItems: [],
      addResponseItem: (filename: string, data: string) =>
        set((state: DataStoreState) => {
          const newId =
            state.responseItems.length > 0
              ? state.responseItems[state.responseItems.length - 1].id + 1
              : 1;
          const newItem = { id: newId, filename, data };
          return { responseItems: [...state.responseItems, newItem] };
        }),
      removeResponseItem: (id: number) =>
        set((state: DataStoreState) => {
          const newResponseItems = state.responseItems.filter((item) => item.id !== id);
          return { responseItems: newResponseItems };
        }),
    }),
    {
      name: 'response-storage',
      getStorage: () => sessionStorage,
    },
  ),
);
