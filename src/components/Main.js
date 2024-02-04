import React, { useEffect, useRef } from 'react';
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
    /* border-top: 2px dashed #c73232; */
    padding: 30px;
    opacity: 0;
    transition: .5s;
  }
  p:on {
    opacity: 1;
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

  // const useFadeIn = (duration = 0, delay = 0) => {
  //   if (typeof duration !== "number" || typeof delay !== "number") {
  //     return;
  //   }
  //   const element = useRef();
  //   useEffect(() => {
  //     if (element.current) {
  //       const {current} = element;
  //       current.style.transition = `opacity ${duration} ${delay}s`;
  //       current.style.opacity = 1;
  //     }
  //   }, []);
  //   return { ref: element };
  // };

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
          <hr/>
          <p {...useFadeIn(1,0)}>안녕하세요<br/>풀스택 개발자 최지우입니다</p>
        </div>

      </MainContainer>









    </Container>
  );
}

export default Main;