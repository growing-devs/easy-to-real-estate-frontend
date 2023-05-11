import styled from '@emotion/styled';

export const MapContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 328px;
  #map {
    width: 100%;
    height: 100%;
    &.active {
      width: 50%;
    }
  }
  #roadview {
    &.active {
      /* z-index: 1; */
      display: block;
      width: 50%;
    }
    &.inactive {
      /* z-index: 0; */
      display: none;
    }
  }

  #btnRoadview {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 138px;
    height: 45px;
    font-weight: 600;
    font-size: 16px;
    color: #9f9f9f;
    border: 1px solid #dbdbdb;
    background-color: #fff;
    border-radius: 5px;
    z-index: 2;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04);
    cursor: pointer;
    :hover {
      background-color: #eee;
    }
  }

  .placeinfo_wrap {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: -130px;
    bottom: 65px;
    border-radius: 4px;
    .place_title {
      width: 260px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      font-weight: 700;
      font-size: 15px;
      height: 40px;
      background-color: #458af2;
      padding: 10px;
      cursor: pointer;
      border: 1px solid #ddd;
      border-radius: 4px 4px 0px 0px;
    }
    .place_body {
      width: 260px;
      background-color: #fff;
      padding: 10px;
      border: 1px solid #ddd;
      border-width: 0 1px 1px 1px;
      border-radius: 0px 0px 4px 4px;
      .road_address {
        font-size: 13px;
      }
      .address {
        font-size: 12px;
        color: #8f8f8f;
        margin-bottom: 14px;
        margin-top: 7px;
      }
      .phone {
        font-size: 12px;
        color: #4caf50;
      }
    }
    .tooltip {
      width: 40px;
      height: 10px;
      border-top: 10px solid #ddd;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 0px solid transparent;
    }
    .tooltip:after {
      content: '';
      position: absolute;
      border-top: 10px solid #fff;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 0px solid transparent;
      bottom: 1px;
      left: 110px;
    }
  }
`;

export const MapFilterContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 550px;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 63px;
    height: 63px;
    background-color: #fdfdfd;
    color: #8f8f8f;
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
    border: 2px solid #bdbdbd;
    border-radius: 4px;
    cursor: pointer;
    :hover {
      background-color: #e9e9e9;
    }
    p {
      margin-top: 5px;
    }
    &.on {
      background-color: #e8eaf6;
      border-color: #1a237e;
      color: #1a237e;
    }
  }
`;

export const PlaceListWrapper = styled.ul`
  margin-top: 15px;
  width: 100%;
  ul {
    width: 100%;
    margin-right: 30px;
  }
  .listTitle {
    padding: 15px 0;
    font-weight: 700;
    font-size: 18px;
    background-color: #458af2;
    color: #fff;
    display: flex;
    justify-content: center;
  }
  .placelist {
    padding: 10px 0;
  }
  .placelist:nth-of-type(2n-1) {
    background-color: #eee;
  }
  .listName {
    font-weight: 700;
    margin-right: 30px;
  }
  .listAddress {
    margin-right: 30px;
  }
`;
