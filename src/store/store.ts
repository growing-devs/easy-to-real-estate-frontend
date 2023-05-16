import { create } from 'zustand';

interface SearchState {
  address: string; // 주소
  newLat: number; // 위도
  newLng: number; // 경도
  setAddress: (address: string) => void;
  setLat: (lat: number) => void;
  setLng: (lng: number) => void;
}
// 주소 검색 데이터 + 간편 심사시 서버에서 받을 데이터
export const useSearchStore = create<SearchState>((set) => ({
  address: '신천동 7-18',
  newLat: 37.5144542739603,
  newLng: 127.1007349885,
  sampleData1: '',
  sampleData2: '',
  sampleData3: '',
  setAddress: (searchAddress) => {
    set({ address: searchAddress });
  },
  setLat: (lat) => {
    set({ newLat: lat });
  },
  setLng: (lng) => {
    set({ newLng: lng });
  },
}));

interface StspState {
  step: number;
  setStep: (num: number) => void;
}
// step 1은 등기부 업로드, step 2는 심사 내역 확인, step 0은 그 외
export const useStepStore = create<StspState>((set) => ({
  step: 0,
  setStep: (num) => {
    set({ step: num });
  },
}));

interface TitleState {
  currentTitle: string | null;
  setTitle: (menuName: string) => void;
}
export const useTitleStore = create<TitleState>((set) => ({
  currentTitle: null,
  setTitle: (menuName) => {
    set({ currentTitle: menuName });
  },
}));
