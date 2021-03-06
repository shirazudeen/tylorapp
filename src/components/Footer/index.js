import React from "react";
import styled from "styled-components";
import { BrowserRouter,Link} from "react-router-dom";


const Footer = () => {
  return (
    <BrowserRouter>
      <FooterContainer>
        <FooterWrap>
          <FooterLinkContainer>
            <FooterLinkWrapper>
              <FooterLinkItem>
                <FooterLinkTitle>About</FooterLinkTitle>
                <FooterLink><Link to="/Aboutus">about us</Link></FooterLink>
                <FooterLink>contact us</FooterLink>
                <FooterLink>careers</FooterLink>
                <FooterLink>wholesale</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLinkTitle>Help</FooterLinkTitle>
                <FooterLink>payments</FooterLink>
                <FooterLink>shipping</FooterLink>
                <FooterLink>Cancellation &</FooterLink>
                <FooterLink>Return</FooterLink>
                <FooterLink>FAQ</FooterLink>
                <FooterLink>report</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLinkTitle>Policy</FooterLinkTitle>
                <FooterLink>Return Policy</FooterLink>
                <FooterLink>Terms Of Use</FooterLink>
                <FooterLink>Security</FooterLink>
                <FooterLink>Privacy</FooterLink>
                <FooterLink>Sitemap</FooterLink>
                <FooterLink>EPR Compliance</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink>Twitter</FooterLink>
                <FooterLink>Facebook</FooterLink>
                <FooterLink>Youtube</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLinkTitle>Mail Us</FooterLinkTitle>
                <FooterPara>
                  Tylor Internet Private Limited, Buildings Alyssa, Begonia &
                  Clove Embassy Tech Village, Outer Ring Road,
                  Devarabeesanahalli Village, Bengaluru, 560103, Karnataka,
                  India
                </FooterPara>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLinkTitle>Registered Office Address</FooterLinkTitle>
                <FooterPara>
                  Tylor Internet Private Limited, Buildings Alyssa, Begonia &
                  Clove Embassy Tech Village, Outer Ring Road,
                  Devarabeesanahalli Village, Bengaluru, 560103, Karnataka,
                  India CIN : U51109KA2012PTC066107 Telephone: 1800 202 9898
                </FooterPara>
              </FooterLinkItem>
            </FooterLinkWrapper>
          </FooterLinkContainer>
        </FooterWrap>
      </FooterContainer>
      
    </BrowserRouter>
  );
};

export default Footer;

export const FooterContainer = styled.footer`
  background-color: #101522;
`;
export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;
export const FooterLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;
export const FooterLinkWrapper = styled.div`
  display: flex;
  flex-direction: right;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const FooterLinkItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
export const FooterLinkTitle = styled.h1`
  font-size: 12px;
  margin-bottom: 16px;
`;
export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;
export const FooterPara = styled.p``;
