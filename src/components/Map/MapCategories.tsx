import { MapFilterContainer } from './style';

const MapCategories = () => {
  return (
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
  );
};

export default MapCategories;
