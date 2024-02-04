import React from 'react';
import styled from 'styled-components';
import { ReactTyped } from "react-typed";
import { useFadeIn } from '../func/Func';

const Container = styled.div`
  margin: 0 auto;
`;

const HeaderBox = styled.header`
  width: 100%;
  height: 72px;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  nav > ul{
    display: flex;
  }
`;

const MainContainer = styled.div`
  height: 600px;
  background-color: cyan;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  hr {
    width: 4rem;
    height: 0.4rem;
    border-radius: 5px;
    background-color: #c73232;
  }
  p {
    font-size: 20px;
    margin-top: 60px;
    transition: 2s;
    opacity: 0;
    animation-name: text1;
    animation-duration: 2s;
    /* animation-delay: 0.5s; */
  }
  @keyframes text1 {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0px); }
  }

`;

function Main() {

  const TypedText = () => {
    return (
      <ReactTyped 
        strings={['Developer 최지우의 포트폴리오']} 
        typeSpeed={65}
        style={{fontWeight: "bold", fontSize: '40px'}}
      />
    )
  };

  return (
    <Container>
      <HeaderBox>
        <h4>최지우's Portfolio</h4>
        <nav>
          <ul>
            <li>About me</li>
            <li>Skills</li>
            <li>Archive</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </HeaderBox>

      {/* 메인 */}
      <MainContainer>
        <div>
          {TypedText()}
          <br/>
          {/* <hr/> */}
          <p {...useFadeIn(2, 0)}>안녕하세요<br/>풀스택 개발자 최지우입니다</p>
        </div>

      </MainContainer>









    </Container>
  );
}

export default Main;