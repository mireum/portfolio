import React from 'react';
import styled from 'styled-components';
import { BsPersonLinesFill } from "react-icons/bs";
import { MdCall, MdSchool } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

const About = styled.article`
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .aboutBox{
    width: 70%;
    max-width: 1100px;
    padding: 4rem 2rem 2rem;

    h3 {
      font-size: 48px;
      font-family: 'GongGothicBold';
      text-decoration: underline 1px;
      text-underline-offset: 20px;
      padding: 10px 0;
      margin-bottom: 30px;
    }
    ul {
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
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      padding: 30px;
      justify-content: center;
      align-items: center;
    }
    .info > .infoBox {
      width: 330px;
      height: 130px;
      min-width: 245px;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      padding: 30px;
      box-shadow: rgba(149, 160, 165, 0.4) 0px 8px 24px;
      border-radius: 20px;
      margin: 14px;

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

function AboutMe(props) {
  return (
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
            <BsPersonLinesFill style={{position: 'relative', right: '17px'}}/>
          </div>
          <div className='content'>
            이름<br/><hr/>
            <span className='text'>최지우</span>
          </div>
        </div>
        <div className='infoBox'>
          <div className='icon'>
            <MdCall />
          </div>
          <div className='content'>
            연락처<br/><hr/>
            <span className='text'>010-4378-9978</span>
          </div>
        </div>
        <div className='infoBox'>
          <div className='icon'>
            <IoIosMail />
          </div>
          <div className='content'>
            이메일<br/><hr/>
            <span className='text'>yljw225<br/>@naver.com</span>
          </div>
        </div>
        <div className='infoBox'>
          <div className='icon'>
            <MdSchool />
          </div>
          <div className='content'>
            학력<br/><hr/>
            <span className='text'>가톨릭 대학교<br/>정보통신전자공학과</span>
          </div>
        </div>
      </div>
    </div>
  </About>
  );
}

export default AboutMe;