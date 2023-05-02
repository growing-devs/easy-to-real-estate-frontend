import styled from '@emotion/styled';

export const MapContainer = styled.div`
  position: relative;
  width: 630px;
  height: 390px;
  #map,
  #roadview {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .active {
    z-index: 1;
  }
  .inactive {
    z-index: 0;
  }
  #btnRoadview {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 75px;
    height: 35px;
    font-size: 14px;
    border: 1px solid #dbdbdb;
    background-color: #fff;
    border-radius: 5px;
    z-index: 3;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04);
    cursor: pointer;
    :hover {
      background-color: #eee;
    }
    /* &.active:hover {
      background-color: #eee;
    } */
  }
  /* .wrapper {
    .tooltip {
      position: absolute;
      left: 10px;
      top: 45px;
      background: #646fd4;
      padding: 10px;
      border-radius: 5px;
      color: #fff;
      text-align: center;
      display: none;
      z-index: 5;
    }
    .tooltip:after {
      display: block;
      content: '';
      position: absolute;
      top: -7px;
      left: 15px;
      width: 0px;
      height: 0px;
      border-top: 8px solid none;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid #646fd4;
    }
  }
  .wrapper.inactive:hover .tooltip {
    display: block;
  } */
`;

export const MapFilterContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 630px;
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
