/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-this-in-sfc */
import { useEffect, useState } from 'react';
import { useSearchStore } from '@/store/store';
import { MapContainer, MapFilterContainer } from './style';
import centerMarker from '@/assets/centerMarker.png';

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  const { newLat, newLng } = useSearchStore(); // 위도, 경도
  const [toggle, setToggle] = useState<boolean>(false);
  const [pano, setPano] = useState<any>(0);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    // 지도를 표시할 객체들
    const rvContainer = document.getElementById('roadview'); // 로드뷰를 표시할 div 입니다
    const mapContainer = document.getElementById('map'); // 지도를 표시할 div 입니다

    // 마커를 클릭했을 때 해당 장소의 상세정보를 보여줄 커스텀 오버레이
    const placeOverlay = new window.kakao.maps.CustomOverlay({ zIndex: 1 });
    const contentNode = document.createElement('div'); // 커스텀 오버레이의 컨텐츠 엘리먼트
    let categoryMarkers: any = []; // 카테고리 마커를 담을 배열
    let currCategory = ''; // 현재 선택된 카테고리

    // 장소 좌표
    const placePosition = new window.kakao.maps.LatLng(newLat, newLng);

    // 지도 기본 옵션
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
      setPano(panoId);
    });

    // 로드뷰 초기화가 완료되면
    window.kakao.maps.event.addListener(roadview, 'init', () => {
      // 로드뷰에 특정 장소를 표시할 마커를 생성하고 로드뷰 위에 표시
      const rvMarker = new window.kakao.maps.Marker({
        position: placePosition,
        map: roadview,
        image: markerImage,
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

    // 마커 이미지로 사용할 이미지 세팅
    const markerImage = new window.kakao.maps.MarkerImage(
      centerMarker,
      new window.kakao.maps.Size(36, 50), // 중앙 마커만 살짝 크게 조정
    );

    // 마커 생성
    const marker = new window.kakao.maps.Marker({
      position: placePosition,
      image: markerImage, // 이미지 파일을 마커로 적용
    });
    // 마커를 지도 위에 표시
    marker.setMap(map);

    // 지도 위에 표시되고 있는 카테고리 마커를 모두 제거하는 함수
    const removeMarker = () => {
      for (let i = 0; i < categoryMarkers.length; i += 1) {
        categoryMarkers[i].setMap(null);
      }
      categoryMarkers = [];
    };

    // 커스텀 오버레이의 컨텐츠 노드에 css class를 추가
    contentNode.className = 'placeinfo_wrap';

    // 엘리먼트에 이벤트 핸들러를 등록하는 함수입니다
    const addEventHandle = (target: any, type: any, callback: any) => {
      if (target.addEventListener) {
        target.addEventListener(type, callback);
      } else {
        target.attachEvent(`on${type}`, callback);
      }
    };

    // 커스텀 오버레이의 컨텐츠 노드에 mousedown, touchstart 이벤트가 발생했을때,
    // 지도 객체에 이벤트가 전달되지 않도록 이벤트 핸들러로 kakao.maps.event.preventMap 메소드를 등록
    addEventHandle(contentNode, 'mousedown', window.kakao.maps.event.preventMap);
    addEventHandle(contentNode, 'touchstart', window.kakao.maps.event.preventMap);

    // 커스텀 오버레이 컨텐츠를 설정
    placeOverlay.setContent(contentNode);

    // 카테고리 검색 완료시 호출될 콜백 함수
    const placesSearchCB = (data: any, status: any) => {
      if (status === window.kakao.maps.services.Status.OK) {
        for (let i = 0; i < data.length; i += 1) {
          displayMarker(data[i]);
        }
      }
    };

    // 카테고리 검색을 요청하는 함수
    function searchPlaces() {
      if (!currCategory) {
        return;
      }
      // 커스텀 오버레이를 숨기고
      placeOverlay.setMap(null);
      // 먼저 선택된 지도에 표시되고 있는 카테고리 마커 제거
      removeMarker();
      // 카테고리로 검색 실행
      places.categorySearch(currCategory, placesSearchCB, { useMapBounds: true });
    }

    // 카테고리 마커 클릭하면 장소명을 표시할 커스텀 인포윈도우 생성
    const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 2, removable: true });

    // 카테고리로 삼을 장소 검색 객체 생성
    const places = new window.kakao.maps.services.Places(map);

    // 지도에 카테고리 마커를 표시하는 함수
    const displayMarker = (place: any) => {
      // 카테고리 장소의 마커를 생성하고 지도에 표시
      const categoryMarker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(place.y, place.x),
      });
      categoryMarker.setMap(map); // 카테고리 마커 맴에 표시
      categoryMarkers.push(categoryMarker); // 카테고리 마커들을 카테고리 마커 배열에 push

      // 카테고리 마커에 클릭이벤트를 등록
      window.kakao.maps.event.addListener(categoryMarker, 'click', () => {
        // 카테고리 마커를 클릭하면 장소명이 인포윈도우에 표출
        infowindow.setContent(`<div>${place.place_name}</div>`);
        infowindow.open(map, categoryMarker);
      });
    };

    // 각 카테고리에 클릭 이벤트 등록
    function addCategoryClickEvent() {
      const category = document.getElementById('category');
      const children: any = category?.children;

      for (let i = 0; i < children.length; i += 1) {
        children[i].onclick = onClickCategory;
      }
    }
    // 각 카테고리에 클릭 이벤트를 실행
    addCategoryClickEvent();

    // 클릭된 카테고리에만 클릭된 스타일을 적용하는 함수
    function changeCategoryClass(el: any) {
      const category = document.getElementById('category');
      const children: any = category?.children;

      for (let i = 0; i < children.length; i += 1) {
        children[i].className = '';
      }

      if (el) {
        el.className = 'on'; // 클릭된 element의 className을 'on'으로 만들기
      }
    }

    // 카테고리를 클릭했을 때 호출되는 함수
    function onClickCategory(this: any) {
      // eslint-disable-next-line react/no-this-in-sfc, prefer-destructuring
      const id = this.id;
      const className = this.className; // 당장에 린트에러 처리 방법을 몰라서 임시방편으로 린트 무시 처리.

      placeOverlay.setMap(null);
      infowindow.close(); // 열려있던 인포윈도우 닫기

      if (className === 'on') {
        currCategory = '';
        changeCategoryClass(null);
        removeMarker();
      } else {
        currCategory = id;
        changeCategoryClass(this);
        searchPlaces();
      }
    }
  }, [newLat]);

  return (
    <div>
      <MapContainer id="container">
        {/* <input
          type="button"
          id="btnRoadview"
          value={toggle ? '지도' : '로드뷰'}
          onClick={handleToggle}
        /> */}
        <div className={typeof pano === 'number' ? 'wrapper' : 'wrapper inactive'}>
          {/* <div className="tooltip">해당 위치에 로드뷰 이미지가 없습니다</div> */}
          <button
            type="button"
            id="btnRoadview"
            className={typeof pano === 'number' ? 'active' : 'inactive'}
            onClick={handleToggle}
            disabled={typeof pano !== 'number'}
          >
            {toggle ? '지도' : '로드뷰'}
          </button>
        </div>
        <div id="map" className={toggle ? 'inactive' : 'active'} />
        <div id="roadview" className={toggle ? 'active' : 'inactive'} />
      </MapContainer>
      <MapFilterContainer id="category">
        <li id="SW8" data-order="0">
          <span className="material-symbols-outlined">directions_subway</span>
          <p>지하철역</p>
        </li>
        <li id="SC4" data-order="1">
          <span className="material-symbols-outlined">menu_book</span>
          <p>학교</p>
        </li>
        <li id="MT1" data-order="2">
          <span className="material-symbols-outlined">shopping_cart</span>
          <p>대형마트</p>
        </li>
        <li id="CT1" data-order="3">
          <span className="material-symbols-outlined">person_play</span>
          <p>문화시설</p>
        </li>
        <li id="BK9" data-order="4">
          <span className="material-symbols-outlined">monetization_on</span>
          <p>은행</p>
        </li>
        <li id="HP8" data-order="5">
          <span className="material-symbols-outlined">local_hospital</span>
          <p>병원</p>
        </li>
        <li id="PM9" data-order="6">
          <span className="material-symbols-outlined">pill</span>
          <p>약국</p>
        </li>
        <li id="FD6" data-order="7">
          <span className="material-symbols-outlined">restaurant</span>
          <p>음식점</p>
        </li>
        <li id="CE7" data-order="8">
          <span className="material-symbols-outlined">local_cafe</span>
          <p>카페</p>
        </li>
      </MapFilterContainer>
    </div>
  );
};

export default Map;
