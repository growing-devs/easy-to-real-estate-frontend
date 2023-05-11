/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-this-in-sfc */
import { useEffect, useState } from 'react';
import { useSearchStore } from '@/store/store';
import { MapContainer, PlaceListWrapper } from './style';
import centerMarker from '@/assets/centerMarker.png';
import categoryMarkerimg from '@/assets/categoryMarker.png';
import MapCategories from './MapCategories';
import AroundLists from './AroundLists';

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
    let overlayOn = true;

    // 장소 좌표
    const placePosition = new window.kakao.maps.LatLng(newLat, newLng);

    // 지도 기본 옵션
    const mapOption = {
      center: placePosition,
      level: 3,
    };

    // 지도 생성
    const map = new window.kakao.maps.Map(mapContainer, mapOption);

    // 마커 이미지로 사용할 이미지 세팅
    const markerImage = new window.kakao.maps.MarkerImage(
      centerMarker,
      new window.kakao.maps.Size(90, 87), // 중앙 마커만 살짝 크게 조정
    );

    // 마커 생성
    const marker = new window.kakao.maps.Marker({
      position: placePosition,
      image: markerImage, // 이미지 파일을 마커로 적용
    });
    // 마커를 지도 위에 표시
    marker.setMap(map);

    // 로드뷰 생성
    const roadview = new window.kakao.maps.Roadview(rvContainer);

    // 로드뷰 핀  이미지를 생성
    const roadviewPinImg = new window.kakao.maps.MarkerImage(
      'https://t1.daumcdn.net/localimg/localimages/07/2018/pc/roadview_minimap_wk_2018.png',
      new window.kakao.maps.Size(26, 46),
      {
        // 스프라이트 이미지를 사용
        // 스프라이트 이미지 전체의 크기를 지정하고
        spriteSize: new window.kakao.maps.Size(1666, 168),
        // 사용하고 싶은 영역의 좌상단 좌표를 입력합니다.
        // background-position으로 지정하는 값이며 부호는 반대입니다.
        spriteOrigin: new window.kakao.maps.Point(705, 114),
        offset: new window.kakao.maps.Point(13, 46),
      },
    );

    // 로드뷰 핀을 생성
    const roadviewPin = new window.kakao.maps.Marker({
      image: roadviewPinImg,
      position: placePosition,
      draggable: true,
    });

    // 로드뷰 핀에 dragend 이벤트 할당
    window.kakao.maps.event.addListener(roadviewPin, 'dragend', () => {
      const position = roadviewPin.getPosition(); // 현재 마커가 놓인 자리의 좌표
      toggleRoadview(position); // 로드뷰를 토글합니다
    });

    // 좌표로부터 로드뷰 파노라마 ID를 가져올 로드뷰 클라이언트 객체를 생성
    const roadviewClient = new window.kakao.maps.RoadviewClient();
    // 전달받은 좌표에 가까운 로드뷰의 파노라마 ID를 추출하여 로드뷰 설정하는 함수
    function toggleRoadview(position: any) {
      roadviewClient.getNearestPanoId(position, 100, (panoId: any) => {
        roadview.setPanoId(panoId, position); // 근접한 로드뷰 실행
      });
    }

    // 로드뷰가 토글되면,
    if (toggle) {
      overlayOn = true;
      // 지도 위에 로드뷰 도로 오버레이를 추가
      map.addOverlayMapTypeId(window.kakao.maps.MapTypeId.ROADVIEW);
      // 지도 위에 마커를 표시합니다
      roadviewPin.setMap(map);
      // 마커의 위치를 지도 중심으로 설정
      roadviewPin.setPosition(map.getCenter());
      // 로드뷰의 위치를 지도 중심으로 설정
      toggleRoadview(map.getCenter());
    }

    // 로드뷰 위치가 바뀔때 마다 작동하는 이벤트 할당
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

    window.kakao.maps.event.addListener(roadview, 'position_changed', () => {
      // 현재 로드뷰의 위치로 로드뷰 핀 옮기기
      const rvPosition = roadview.getPosition(); // 현재 로드뷰의 위치 값 받아오기
      map.setCenter(rvPosition); // 지도의 중앙을 현재 로드뷰의 위치
      // 로드뷰 지도 오버레이 된 상태면,
      if (overlayOn) {
        roadviewPin.setPosition(rvPosition); // 로드뷰 핀 위치를 현재 로드뷰 위치로 설정
      }
    });

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
        console.log(data);
        for (let i = 0; i < data.length; i += 1) {
          displayMarker(data[i]);
        }
      }
    };

    // 카테고리 검색을 요청하는 함수
    function searchPlaces() {
      // if (!currCategory) {
      //   return;
      // }
      // 카테고리의 커스텀 인포윈도우를 숨기고
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

    // 카테고리 이미지로 사용할 이미지 세팅
    const categoryMarkerImage = new window.kakao.maps.MarkerImage(
      categoryMarkerimg,
      new window.kakao.maps.Size(45, 58),
    );

    // 지도에 카테고리 마커를 표시하는 함수
    const displayMarker = (place: any) => {
      // 카테고리 장소의 마커를 생성하고 지도에 표시
      const categoryMarker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(place.y, place.x),
        image: categoryMarkerImage,
      });
      categoryMarker.setMap(map); // 카테고리 마커 맴에 표시
      categoryMarkers.push(categoryMarker); // 카테고리 마커들을 카테고리 마커 배열에 push

      // 카테고리 마커에 클릭이벤트를 등록
      window.kakao.maps.event.addListener(categoryMarker, 'click', () => {
        // 카테고리 마커를 클릭하면 장소 정보를 인포윈도우에 전달
        displayPlaceInfo(place);
      });
    };

    // 카테고리 마커의 커스텀 인포윈도우를 생성하는 함수
    function displayPlaceInfo(place: any) {
      console.log(place);
      const content = `
      <a href="${place.place_url}" target="_blank" class=place_title>
      ${place.place_name}
      <span class="material-symbols-outlined arrow">
      chevron_right
      </span>
      </a>
      <div class=place_body>
      <p class=road_address>${place.road_address_name}</p>
      <p class=address>(지번 : ${place.address_name})</p>
      <p class=phone>${place.phone}</p>
      </div>
      <div class=tooltip />
      `;
      contentNode.innerHTML = content;
      placeOverlay.setPosition(new window.kakao.maps.LatLng(place.y, place.x));
      placeOverlay.setMap(map);
    }

    // 지도 클릭시 발생하는 이벤트 등록
    window.kakao.maps.event.addListener(map, 'click', () => {
      placeOverlay.setMap(null);
    });

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
  }, [newLat, toggle]);

  return (
    <div>
      <MapContainer id="container">
        <input
          type="button"
          id="btnRoadview"
          value={toggle ? '지도 보기' : '로드뷰 보기'}
          onClick={handleToggle}
        />
        <div id="map" className={toggle ? 'active' : 'inactive'} />
        <div id="roadview" className={toggle ? 'active' : 'inactive'} />
      </MapContainer>
      <MapCategories />
      <AroundLists />
    </div>
  );
};

export default Map;
