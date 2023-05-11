import styled from '@emotion/styled';

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 408px;
  height: 100%;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  z-index: 9;
  overflow-x: hidden;
  overflow-y: auto;
  .logo {
    width: 126px;
    margin-top: 50px;
  }
`;

export const SidebarMenus = styled.div`
  margin-top: 140px;
  width: inherit;
  a {
    display: flex;
    align-items: center;
    height: 76px;
    padding: 0 40px;
    font-weight: 500;
    font-size: 22px;
    color: #616161;
    &:hover {
      font-weight: 700;
      background-color: #f6f5ef;
      color: #1a237e;
    }
    &.active {
      font-weight: 700;
      background-color: #f6f5ef;
      color: #1a237e;
      border-right: 4px solid #1a237e;
    }
  }
`;
