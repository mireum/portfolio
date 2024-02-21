import React from 'react';
import styled from 'styled-components';
import { HiArrowUpCircle } from "react-icons/hi2";

const FooterContainer = styled.footer`
  background-color: #343434;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: end;

  .upBtn {
    color: #fff;
    font-size: 3rem;
    margin-right: 18px;
    margin-top: 6px;
  }

  .upBtn:hover {
    color: #ccc;
  }
`;
function Footer(props) {
  return (
    <FooterContainer>
      <div className='upBtn cursor-p' onClick={() => {window.scrollTo({ top: 0, behavior: 'smooth' })}}><HiArrowUpCircle /></div>
    </FooterContainer>
  );
}

export default Footer;