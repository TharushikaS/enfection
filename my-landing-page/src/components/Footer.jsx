import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #222;
  color: #fff;
  text-align: center;
  padding: 20px;
`;

const FooterText = styled.p`
  font-size: 14px;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>© 2024 All Rights Reserved</FooterText>
    </FooterContainer>
  );
}

export default Footer;
