import styled from '@emotion/styled';

export const MapContainer = styled.div`
  position: relative;
  #map, #roadview {
    position: absolute;
    width: 630px;
    height: 390px;
  }
  .active{
    z-index: 1;
  }
  .inactive {
    z-index: 0;
  }
  .toggleBtn {
    position:absolute;
    top: 5px;
    left: 5px;
    width: 75px;
    height: 35px;
    font-size: 14px;
    border: 1px solid #dbdbdb;
    background-color: #fff;
    border-radius: 5px;
    z-index: 10;
    box-shadow: 0 1px 1px rgba(0,0,0,.04)
    cursor: pointer;
    :hover {
      background-color: #eee;
    }
  }
`;
