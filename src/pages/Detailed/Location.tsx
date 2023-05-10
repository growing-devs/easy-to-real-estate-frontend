import { useEffect } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useSearchStore } from '@/store/store';
import Map from '@/components/Map';

const Location = () => {
  const { address, setAddress, setLat, setLng } = useSearchStore();
  const open = useDaumPostcodePopup();

  // 지도 검색 모달 팝업하기 위한 클릭 핸들러
  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  // 타입 지정 안하면 에러나니까 일단은 any 타입으로 받는다.
  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setAddress(fullAddress);
  };

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
      주소검색
      <button type="button" onClick={handleClick}>
        Open
      </button>
      <Map />
    </div>
  );
};

export default Location;
