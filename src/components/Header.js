import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const HeaderBox = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: transparent;
  color: white;
  z-index: 10;

  ${props => props.color &&
    css`
      color: black;
      background-color: white;
    `
  }

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
        font-family: 'GongGothicBold';
      }
      li.active {
        /* color: #808080; */
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

const NAV = [
  {idx: 0, name: 'About Me'},
  {idx: 1, name: 'Skills'},
  {idx: 2, name: 'Projects'},
  {idx: 3, name: 'Contact'},
]

// function Header(props) {
const Header = ({ scroll, scrollRef }) => {
  const [navIndex, setNavIndex] = useState(null);
  const navRef = useRef([]);

  useEffect(() => {
    scrollRef.current[navIndex]?.scrollIntoView({ behavior: 'smooth' });
    setNavIndex(null);
  }, [scrollRef, navIndex]);

  // 현재 스크롤 위치에 따라 NavBar 버튼 스타일 바꿈
  useEffect(() => {
    const changeNavBtnStyle = () => {
      scrollRef.current.forEach((ref, idx) => {
        if (ref.offsetTop - 180 < window.scrollY) {
          navRef.current.forEach(ref => {
            ref.className = ref.className.replace(' active', '');
          });
          
          navRef.current[idx].className += ' active';
        }
      });
    };
    window.addEventListener('scroll', changeNavBtnStyle);

    return () => {
      window.removeEventListener('scroll', changeNavBtnStyle);
    };
  }, [scrollRef]);

  return (
    <HeaderBox color={scroll}>
      <div className='header'>
        <h4 className='cursor-p'>최지우's Portfolio</h4>
        <nav>
          <ul>
            {NAV.map(({ idx, name }) => (
              <li 
                key={idx} 
                ref={ref => (navRef.current[idx] = ref)} 
                onClick={() => {setNavIndex(idx);}}
              >
                {name}
              </li>
            ))}
            {/* <li>About me</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li> */}
          </ul>
        </nav>
      </div>
    </HeaderBox>
  );

// }
}
export default Header;