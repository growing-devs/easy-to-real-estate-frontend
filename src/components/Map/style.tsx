import styled from '@emotion/styled';

export const MapContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 390px;
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
    z-index: 3;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04);
    cursor: pointer;
    :hover {
      background-color: #eee;
    }
  }
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
