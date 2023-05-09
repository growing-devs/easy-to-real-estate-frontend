import create from 'zustand';
import { persist } from 'zustand/middleware';

// 사용예시 아이디값으로 데이타 불러오기
// const { responseItems } = useDataStore();
// responseItems[responseItems(id)];
// 데이타 삭제시
// const { removeResponseItem } = useDataStore();
// removeResponseItem(id);

//  파일 구분 아이디 파일이름 json데이타
interface ResponseItem {
  id: number;
  filename: string;
  data: string;
}
// 배열 형태로 넣기위함
interface DataStoreState {
  responseItems: ResponseItem[];
  addResponseItem: (filename: string, data: string) => void;
  removeResponseItem: (id: number) => void;
}

export const useDataStore = create<DataStoreState>()(
  // 세션에 저장하기위해 persist
  persist(
    (set) => ({
      responseItems: [],
      // 파일 추가 파일이름과 데이타를 받음
      addResponseItem: (filename: string, data: string) =>
        set((state: DataStoreState) => {
          // 배열에 넣을때 숫자 증가
          const newId =
            state.responseItems.length > 0
              ? state.responseItems[state.responseItems.length - 1].id + 1
              : 1;
          const newItem = { id: newId, filename, data };
          return { responseItems: [...state.responseItems, newItem] };
        }),
      // 파일 삭제 아이디값을 받음
      removeResponseItem: (id: number) =>
        set((state: DataStoreState) => {
          const newResponseItems = state.responseItems.filter((item) => item.id !== id);
          return { responseItems: newResponseItems };
        }),
    }),
    {
      // 세션 스토리지 이름
      name: 'moreturn-response-storage',
      getStorage: () => sessionStorage,
    },
  ),
);
