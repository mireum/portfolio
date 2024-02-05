import React from 'react';
import styled from 'styled-components';
import { ReactTyped } from "react-typed";
import { useFadeIn } from '../func/Func';
import mainImg from "../image/main.jpg";
import { BsPersonLinesFill } from "react-icons/bs";

const Container = styled.div`
  margin: 0 auto;
`;

const HeaderBox = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: transparent;
  z-index: 10;
  
  /* 내리면 흰바탕에 color black으로 */
  color: white;

  .header {
    max-width: 70%;
    height: 72px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    
    h4 {
      font-size: 24px;
    }
    nav > ul{
      display: flex;
  
      li {
        cursor: pointer;
      }
      li + li {
        margin-left: 30px;
      }
    }
    h4:hover, li:hover {
      animation-name: header;
      animation-duration: .5s;
      animation-fill-mode: forwards;
    }
    @keyframes header {
    0% { transform: translateY(0px); }
    100% { transform: translateY(-5px); }
    }
  }
`;

const MainContainer = styled.article`
  height: 600px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(0deg, rgba(112,93,80,.8), rgba(0, 0, 0, 0.5)), url(${mainImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;

  p {
    font-size: 24px;
    margin-top: 60px;
    line-height: 1.8rem;
    animation-name: text1;
    animation-duration: 2s;
  }

  button {
    line-height: 2rem;
    padding: 8px 20px;
    border: none;
    border-radius: 24px;
    background-color: #bd7f46;
    color: #fff;
    font-family: 'GongGothicMedium';
    font-size: 16px;
    position: relative;
    top: 60px;
    animation-name: btn1;
    animation-duration: 2s;

    span {
      position: relative;
      top: 8px;
      left: 5px;
    }
  }
  button:hover {
    background-color: #a16b3a;
  }
  @keyframes text1 {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0px); }
  }
  @keyframes btn1 {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0px); }
  }
`;

const About = styled.article`
  height: 600px;
  background-color: cyan;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .aboutBox{
    width: 70%;
    background-color: aliceblue;

    h3 {
      font-size: 48px;
      font-family: 'GongGothicBold';
      text-decoration: underline 1px;
      text-underline-offset: 20px;
      padding: 10px 0;
      margin-bottom: 30px;
    }
    ul {
      /* border: 1px solid black; */
      width: 70%;
      padding: 30px 0;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 30px;
      box-shadow: rgba(149, 160, 165, 0.2) 0px 8px 24px;
      font-size: 20px;

      li span.underline {
        font-size: 30px;
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(94,182,45,1) 0%, rgba(76,186,139,0.9) 50%, rgba(0,212,255,1) 100%);
        background-position: bottom;
        background-size: 100% 30%;
        background-repeat: no-repeat;
      }
      li + li {
        margin-top: 30px;
      }
    }
    .info {
      width: 70%;
      background-color: aqua;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
    }
    .info > .infoBox {
      width: 50%;
      line-height: 2rem;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      padding: 20px;

      .icon {
        font-size: 40px;
      }
      .content {
        font-family: 'GongGothicBold';
      }
      .text {
        font-size: 16px;
        font-family: 'GongGothicMedium';
      }
    }
  }
`;

function Main() {

  const TypedText = () => {
    return (
      <ReactTyped 
        strings={['Developer 최지우의 포트폴리오']} 
        typeSpeed={65}
        style={{fontWeight: "bold", fontSize: '40px', fontFamily: 'GongGothicBold'}}
      />
    )
  };

  return (
    <Container>
      <HeaderBox>
        <div className='header'>
          <h4 className='cursor-p'>최지우's Portfolio</h4>
          <nav>
            <ul>
              <li>About me</li>
              <li>Skills</li>
              <li>Archive</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </HeaderBox>

      {/* 메인 */}
      <MainContainer>
        <div>
          {TypedText()}
          <br/>
          <p {...useFadeIn(2, 0)}>안녕하세요.<br/>풀스택 개발자 최지우입니다.<br/>
            끈기 있으며, 배우는 것을 좋아합니다.
          </p>
          <button className='cursor-p'>Read More<span class="material-symbols-outlined">stat_minus_2</span></button>
        </div>
      </MainContainer>

      {/* About me */}
      <About>
        <div className='aboutBox'>
          <h3>ABOUT ME</h3>
          <ul>
            <li><span>▪쉽게 포기하지 않는 <span className='underline'>근성</span>이 있습니다.</span></li>
            <li><span>▪문제를 <span className='underline'>극복</span>하고&nbsp;
              <span className='underline'>발전</span>하는 것을 좋아합니다.</span></li>
            <li><span>▪새로운 것을 <span className='underline'>배움</span>에&nbsp; 
              <span className='underline'>적극적</span>입니다.</span></li>
          </ul>
          <div className='info'>
            <div className='infoBox'>
              <div className='icon'>
                <BsPersonLinesFill />
              </div>
              <div className='content'>
                이름<br/>
                <span className='text'>최지우</span>
              </div>
            </div>
            <div>연락처</div>
            <div>이메일</div>
            <div>학력</div>
          </div>
        </div>
      </About>







    </Container>
  );
}

export default Main;