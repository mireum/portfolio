import React, { useEffect, useMemo, useState, useRef, forwardRef } from 'react';
import styled from 'styled-components';
import { ReactTyped } from "react-typed";
import { useFadeIn } from '../func/Func';
import mainImg from "../image/main.jpg";
import { throttle } from 'lodash';
import Header from './Header';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Container = styled.div`
  margin: 0 auto;
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

// const Input = forwardRef(function Input(props, ref1) {
//   return <AboutMe ref={ref1}/>;
// });

function Main() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const handleScroll = useMemo(
    () =>
    throttle(() => {
      const currentScrollY = window.scrollY;
      if (50 < currentScrollY) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }, 250), []
  );

  const TypedText = () => {
    return (
      <ReactTyped 
        strings={['Developer 최지우의 포트폴리오']} 
        typeSpeed={65}
        style={{fontWeight: "bold", fontSize: '40px', fontFamily: 'GongGothicBold'}}
      />
    )
  };

  // const top = useRef();
  // const element = useRef<HTMLDivElement>(null);
  // const moveTo = () => {
  //   element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // };
  
  
  // const moveTo = () => {
  //   ref1.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // };
    
  const scrollRef = useRef([]);

  return (
    <Container>
      {/* 헤더 */}
      <Header scroll={visible} scrollRef={scrollRef} />

      {/* 메인 */}
      <MainContainer>
        <div>
          {TypedText()}
          <br/>
          <p {...useFadeIn(2, 0)}>안녕하세요.<br/>풀스택 개발자 최지우입니다.<br/>
            끈기 있으며, 배우는 것을 좋아합니다.
          </p>
          <button className='cursor-p'>Read More<span className="material-symbols-outlined">stat_minus_2</span></button>
        </div>
      </MainContainer>

      {/* About me */}
      {/* {Input} */}
      <AboutMe ref={scrollRef} />
      
      {/* Skills */}
      <Skills ref={scrollRef} />

      {/* Projects */}
      <Projects ref={scrollRef} />

      {/* Contact */}
      <Contact ref={scrollRef} />

      {/* Footer */}
      <Footer />

    </Container>
  );
}

export default Main;