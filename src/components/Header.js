import React from 'react';
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

function Header(props) {
  const { scroll } = props;

  return (
    <HeaderBox color={scroll}>
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
  );
}

export default Header;