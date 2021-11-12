import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  background-color: black;
  color: white;

  @media (max-width: 768px){
      font-size: 13px;
  }

`

const Footer: FunctionComponent = function () {
    return (
        <FooterWrapper>
            have a nice day!
            <br />@ le2sky's portfolio site, Thank you for visiting😃
        </FooterWrapper>
    )
}
export default Footer;