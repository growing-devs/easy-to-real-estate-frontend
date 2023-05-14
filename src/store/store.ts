import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 주소 검색 데이터 + 간편 심사시 서버에서 받을 데이터
interface SearchState {
  address: string; // 주소
  newLat: number; // 위도
  newLng: number; // 경도
  sampleData1: string; // 테스트용 샘플 데이터
  sampleData2: string;
  sampleData3: string;
  setAddress: (address: string) => void;
  setLat: (lat: number) => void;
  setLng: (lng: number) => void;
  setRes: (res: any) => void; // response 전체를 받아와서 처리하는 액션
}

export const useSearchStore = create<SearchState>((set) => ({
  address: '신천동 7-18',
  newLat: 0,
  newLng: 0,
  sampleData1: '',
  sampleData2: '',
  sampleData3: '',
  setAddress: (searchAddress) => {
    set((state) => ({ address: searchAddress }));
  },
  setLat: (lat) => {
    set((state) => ({ newLat: lat }));
  },
  setLng: (lng) => {
    set((state) => ({ newLng: lng }));
  },
  setRes: (res) => {
    set((state) => ({
      sampleData1: res.sigunguCode,
      sampleData2: res.sido,
      sampleData3: res.sigungu,
    }));
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
    set((state) => ({ step: num }));
  },
}));

interface TitleState {
  currentTitle: string | null;
  setTitle: (menuName: string) => void;
}
export const useTitleStore = create<TitleState>((set) => ({
  currentTitle: null,
  setTitle: (menuName) => {
    set((state) => ({ currentTitle: menuName }));
  },
}));
