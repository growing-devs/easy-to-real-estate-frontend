import { useEffect, useState } from 'react';
import { useSearchStore } from '@/store/store';
import { MapContainer } from './style';

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  const { newLat, newLng } = useSearchStore();
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    // 지도를 표시할 객체들
    const rvContainer = document.getElementById('roadview'); // 로드뷰를 표시할 div 입니다
    const mapContainer = document.getElementById('map'); // 지도를 표시할 div 입니다

    // 장소 좌표
    const placePosition = new window.kakao.maps.LatLng(newLat, newLng);

    // 지도 옵션
    const mapOption = {
      center: placePosition,
      level: 3,
    };

    // 지도 생성
    const map = new window.kakao.maps.Map(mapContainer, mapOption);

    // 로드뷰 생성 및 세팅
    const roadview = new window.kakao.maps.Roadview(rvContainer);

    // 좌표에 가장 가까운 로드뷰 가져오기
    const roadviewClient = new window.kakao.maps.RoadviewClient();
    roadviewClient.getNearestPanoId(placePosition, 50, (panoId: any) => {
      roadview.setPanoId(panoId, placePosition); // 근접한 로드뷰 실행
    });

    // 로드뷰 초기화가 완료되면
    window.kakao.maps.event.addListener(roadview, 'init', function () {
      // 로드뷰에 특정 장소를 표시할 마커를 생성하고 로드뷰 위에 표시
      const rvMarker = new window.kakao.maps.Marker({
        position: placePosition,
        map: roadview,
      });
      rvMarker.setRange(500);

      // 로드뷰의 기본 뷰포인트가 마커쪽을 향하도록 세팅
      const projection = roadview.getProjection();
      const viewpoint = projection.viewpointFromCoords(
        rvMarker.getPosition(),
        rvMarker.getAltitude(),
      );
      roadview.setViewpoint(viewpoint);
    });

    // 마커 생성
    const marker = new window.kakao.maps.Marker({
      position: placePosition,
    });

    // 마커를 지도, 로드뷰위에 표시
    marker.setMap(map);
  }, [newLat]); // 지금은 테스트 때문에 의존성 배열을 추가했으나, 최종에서는 빈배열로 수정할 것.

  return (
    <MapContainer id="container">
      <input
        type="button"
        id="btnRoadview"
        className="toggleBtn"
        value={toggle ? '지도' : '로드뷰'}
        onClick={handleToggle}
      />
      <div id="map" className={toggle ? 'inactive' : 'active'} />
      <div id="roadview" className={toggle ? 'active' : 'inactive'} />
    </MapContainer>
  );
};

export default Map;
