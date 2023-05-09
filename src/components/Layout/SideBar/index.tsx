import { NavLink } from 'react-router-dom';
import { SidebarContainer, SidebarMenus } from './style';
import logo from '@/assets/logo.png';

const SideBar = () => {
  return (
    <SidebarContainer>
      <img className="logo" src={logo} alt="logo" />
      <SidebarMenus>
        <NavLink to="/pra">심사하기</NavLink>
        <NavLink to="/news">내 심사관리</NavLink>
      </SidebarMenus>
    </SidebarContainer>
  );
};

export default SideBar;
