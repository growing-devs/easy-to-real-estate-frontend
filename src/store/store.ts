import { create } from 'zustand';

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
  address: '제주특별자치도 제주시 첨단로 242',
  newLat: 33.450701,
  newLng: 126.570667,
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
