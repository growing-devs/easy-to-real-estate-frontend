import { useEffect } from 'react';
import { useSearchStore } from '@/store/store';
import Map from '@/components/Map';

const Location = () => {
  const { address, setLat, setLng } = useSearchStore();

  // 주소 받으면 좌표로 변환해서 전역 상태로 저장
  useEffect(() => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(address, (result: any, status: any) => {
      console.log(address);
      if (status === window.kakao.maps.services.Status.OK) {
        console.log('성공');
        setLat(result[0].y);
        setLng(result[0].x);
      }
    });
  }, [address]);

  return (
    <div>
      <Map />
    </div>
  );
};

export default Location;
