import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
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

const FooterWrap = styled.footer`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  background-color: #f0f4ff;
  color: black;
  text-align: center;
`;

const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1224px;
  margin: 0 auto;
  gap: 60px;

  & > div {
    display: flex;
    justify-content: space-between;

    &:first-of-type {
      align-items: start;
    }

    &:last-of-type {
      align-items: end;
    }
  }

  .footer-menu {
    display: flex;
    gap: 60px;

    a {
      font-size: 16px;
      font-weight: 500;
      color: #767676;
    }
  }

  .footer-address {
    display: flex;
    gap: 60px;

    ul {
      text-align: start;
      line-height: 200%;
      font-size: 12px;
      color: #767676;
    }
  }

  .copy {
    font-size: 12px;
    color: #767676;
  }
`;
