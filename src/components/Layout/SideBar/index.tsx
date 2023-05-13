import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { SidebarContainer, SidebarMenus, Submenus, MenuBadge } from './style';
import logo from '@/assets/logo.png';
import { useStepStore } from '@/store/store';

const SideBar = () => {
  const location = useLocation();
  const { step, setStep } = useStepStore();

  useEffect(() => {
    if (location.pathname.includes('pra')) {
      setStep(1);
    }
  }, [location]);

  return (
    <SidebarContainer>
      <NavLink to="/">
        <img className="logo" src={logo} alt="logo" />
      </NavLink>
      <SidebarMenus>
        <NavLink className={step !== 0 ? 'mainmenu active' : 'mainmenu'} to="pra">
          심사하기
        </NavLink>
        <Submenus className={step !== 0 ? '' : 'hide'}>
          <NavLink
            to="pra"
            className="submenu"
            onClick={() => {
              setStep(1);
            }}
          >
            <span className="submenuIcon material-symbols-outlined">upload_file</span>
            등기부등본 업로드
            <MenuBadge className="badge">새로 심사하기</MenuBadge>
          </NavLink>
          <NavLink
            to="/review/pdfsummary"
            className="submenu"
            onClick={() => {
              setStep(2);
            }}
          >
            <span className="submenuIcon material-symbols-outlined">description</span>
            심사결과
          </NavLink>
        </Submenus>
        <NavLink
          className="mainmenu"
          to="/myreviews"
          onClick={() => {
            setStep(0);
          }}
        >
          내 심사관리
          <MenuBadge className="badge">준비중</MenuBadge>
        </NavLink>
      </SidebarMenus>
    </SidebarContainer>
  );
};

export default SideBar;
