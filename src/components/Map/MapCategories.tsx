import { MapFilterContainer } from './style';

const MapCategories = () => {
  return (
    <MapFilterContainer id="category">
      <li id="SW8">
        <span className="material-symbols-outlined">directions_subway</span>
        <p>지하철역</p>
      </li>
      <li id="SC4">
        <span className="material-symbols-outlined">menu_book</span>
        <p>학교</p>
      </li>
      <li id="MT1">
        <span className="material-symbols-outlined">shopping_cart</span>
        <p>대형마트</p>
      </li>
      <li id="CT1">
        <span className="material-symbols-outlined">person_play</span>
        <p>문화시설</p>
      </li>
      <li id="BK9">
        <span className="material-symbols-outlined">monetization_on</span>
        <p>은행</p>
      </li>
      <li id="HP8">
        <span className="material-symbols-outlined">local_hospital</span>
        <p>병원</p>
      </li>
      <li id="FD6">
        <span className="material-symbols-outlined">restaurant</span>
        <p>음식점</p>
      </li>
      <li id="CE7">
        <span className="material-symbols-outlined">local_cafe</span>
        <p>카페</p>
      </li>
      <li id="AG2">
        <span className="material-symbols-outlined">real_estate_agent</span>
        <p>부동산</p>
      </li>
    </MapFilterContainer>
  );
};

export default MapCategories;
