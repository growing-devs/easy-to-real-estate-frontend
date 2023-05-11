import { NavLink } from 'react-router-dom';
import { SidebarContainer, SidebarMenus } from './style';
import logo from '@/assets/logo.png';

const SideBar = () => {
  return (
    <SidebarContainer>
      <NavLink to="/">
        <img className="logo" src={logo} alt="logo" />
      </NavLink>
      <SidebarMenus>
        <NavLink to="/pra">심사하기</NavLink>
        <NavLink to="/myreviews">내 심사관리</NavLink>
      </SidebarMenus>
      <NavLink to="/pra/summary">심사내역 페이지 이동(작업용 임시)</NavLink>
    </SidebarContainer>
  );
};

export default SideBar;
