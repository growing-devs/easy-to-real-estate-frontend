import { Link } from 'react-router-dom';
import { FooterWrap, FooterBox } from './style';
import footerLogo from '@/assets/footer-logo.svg';

const Footer = () => {
  return (
    <FooterWrap>
      <FooterBox>
        <div>
          <Link to="/">
            <img src={footerLogo} alt="footer-Logo" />
          </Link>

          <div className="footer-menu">
            <Link to="/">문의하기</Link>
            <Link to="/">이용약관</Link>
            <Link to="/">개인정보처리방침</Link>
          </div>
        </div>
        <div>
          <div className="footer-address">
            <ul>
              <li>주식회사 물리턴 | 대표이사 : 이윤석</li>
              <li>사업자 등록번호 : 596-86-02124</li>
              <li>아매알 : help@moreturn.co.kr</li>
            </ul>
            <ul>
              <li>주소 : 서울특별시 마포구 마포대로 122, 11층</li>
              <li>통신판매신고번호 : 2022-서울마포-2164</li>
              <li>고객센터 : 카카오톡 채팅상담하기(평일 10:00 - 17:00)</li>
            </ul>
          </div>
          <p className="copy">ⓒMoreturn Corp. All rights reserved</p>
        </div>
      </FooterBox>
    </FooterWrap>
  );
};

export default Footer;
