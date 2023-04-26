import { useEffect, useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { Map, MapMarker, Roadview, RoadviewMarker } from 'react-kakao-maps-sdk';

const Simple = () => {
  const [toggle, setToggle] = useState<string>('map');
  const [address, setAdress] = useState<string>('');
  const [ytoLat, setYtoLat] = useState<number>(0);
  const [xtoLng, setXtoLng] = useState<number>(0);
  const geocoder = new kakao.maps.services.Geocoder();
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

    console.log(fullAddress);
    setAdress(fullAddress);
  };

  // 주소 검색 결과가 발생되면 좌표로 변환
  useEffect(() => {
    geocoder.addressSearch(address, function (res: any) {
      console.log(res[0].x, res[0].y);
      setXtoLng(res[0].x);
      setYtoLat(res[0].y);
    });
  }, [address]);

  // 지도에 넣어줄 좌표
  const placePosition = {
    lat: ytoLat,
    lng: xtoLng,
  };

  return (
    <div>
      주소검색
      <button type="button" onClick={handleClick}>
        Open
      </button>
      <div style={{ width: '600px', height: '400px', position: 'relative' }}>
        <Map // 로드뷰를 표시할 Container
          center={placePosition}
          style={{
            display: toggle === 'map' ? 'block' : 'none',
            width: '100%',
            height: '100%',
          }}
          level={3}
        >
          <MapMarker position={placePosition} />
          {toggle === 'map' && (
            <input
              style={{
                position: 'absolute',
                top: '5px',
                left: '5px',
                zIndex: 10,
              }}
              type="button"
              onClick={() => setToggle('roadview')}
              title="로드뷰 보기"
              value="로드뷰"
            />
          )}
        </Map>
        <Roadview // 로드뷰를 표시할 Container
          position={{ ...placePosition, radius: 50 }}
          style={{
            display: toggle === 'roadview' ? 'block' : 'none',
            width: '100%',
            height: '100%',
          }}
        >
          <RoadviewMarker position={placePosition} />
          {toggle === 'roadview' && (
            <input
              style={{
                position: 'absolute',
                top: '5px',
                left: '5px',
                zIndex: 10,
              }}
              type="button"
              onClick={() => setToggle('map')}
              title="지도 보기"
              value="지도"
            />
          )}
        </Roadview>
      </div>
    </div>
  );
};

export default Simple;
