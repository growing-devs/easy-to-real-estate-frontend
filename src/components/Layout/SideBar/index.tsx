import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { SidebarContainer, SidebarMenus } from './style';
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
        <NavLink className={step !== 0 ? 'active' : ''} to="pra">
          심사하기
        </NavLink>
        <ul className={step !== 0 ? 'submenus' : 'submenus hide'}>
          <li className={step >= 1 ? 'active' : ''}>
            <span className="step" />
            등기부등본 업로드
          </li>
          <li className={step === 2 ? 'active' : ''}>
            <span className="step" />
            심사결과
          </li>
          <li>
            <span className="step" />
            심사종료
          </li>
        </ul>
        <NavLink
          to="/myreviews"
          onClick={() => {
            setStep(0);
          }}
        >
          내 심사관리
          <span className="badge">준비중</span>
        </NavLink>
      </SidebarMenus>
      <NavLink
        to="/review/pdfsummary"
        onClick={() => {
          setStep(2);
        }}
      >
        심사내역 페이지(작업용 임시)
      </NavLink>
    </SidebarContainer>
  );
};

export default SideBar;
