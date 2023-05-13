import styled from '@emotion/styled';

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 370px;
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

  /* 1920 미만 */
  @media (max-width: 1919px) {
    width: 250px;
  }
`;

export const SidebarMenus = styled.div`
  margin-top: 140px;
  width: inherit;
  .mainmenu {
    display: flex;
    align-items: center;
    height: 76px;
    padding: 0 40px;
    font-weight: 500;
    font-size: 16px;
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
      border-right: 4px solid #ccac55;
    }
  }
`;

export const Submenus = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #8f8f8f;
  .submenu {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    padding: 15px 40px;
    .submenuIcon {
      margin-right: 8px;
    }
    &.active {
      font-weight: 700;
      color: #1a237e;
    }
  }
  &.hide {
    display: none;
  }
`;

export const MenuBadge = styled.span`
  padding: 7px;
  margin-left: 3px;
  font-weight: 600;
  font-size: 11px;
  color: #1a237e;
  background-color: #f3f4fa;
  border-radius: 8px;
`;
