import React, { forwardRef } from 'react';
import styled from 'styled-components';
import HTML from '../image/HTML';
import { AWS, C, CLOUDTYPE, CPP, CSS, EXPRESSJS, FIGMA, GITHUB, JAVA, JS, MONGODB, MONGOOSE, NETLIFY, NEXTJS, NODEJS, PYTHON, REACT, REDUX, TRELLO } from '../image';
import SASS from '../image/SASS';

const SkillBox = styled.article`
  background-color: bisque;
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
      margin-bottom: 40px;
    }
    .skillBox {
      h4 {
        font-size: 30px;
        margin-bottom: 20px;
      }
      .deployAndCoop {
        display: flex;
        justify-content: center;

        div + div {
          margin-left: 60px;
        }
      }
      ul {
        display: flex;
        justify-content: center;
        margin-bottom: 60px;
        
        li + li {
          margin-left: 10px;
        }
        /* li {
          width: 100px;
          height: 90px;
        }
        li.long {
          width: 150px;
          height: 100px;
        } */
        .img {
          width: 100px;
          height: 90px;
        }
        .long {
          width: 150px;
          height: 90px;
        }
      }
    
    }
  }
`;

// function Skills(props) {
const Skills = forwardRef((props, ref) => {
  return (
    <SkillBox ref={aboutRef => (ref.current[1] = aboutRef)}>
      <div className='aboutBox'>
        <h3>SKILLS</h3>
        <div className='skillBox'>
          <div>
            <h4>Frontend</h4>
            <ul>
              <li><HTML className='img' /></li>
              <li><img className='img' style={{width:70}} src={CSS} alt='CSS'/></li>
              <li><img className='img' src={JS} alt='JS'/></li>
              <li><SASS className='img' /></li>
              <li><img className='img' src={REACT} alt='REACT'/></li>
              <li><img className='img' src={REDUX} alt='REDUX'/></li>
              <li><img className='img' src={NEXTJS} alt='NEXTJS'/></li>
            </ul>  
          </div>
          <div>
            <h4>Backend</h4>
            <ul>
              <li><img className='long' src={NODEJS} alt='NODEJS'/></li>
              <li><img className='img' src={EXPRESSJS} alt='EXPRESSJS'/></li>
              <li><img className='img' src={MONGODB} alt='MONGODB'/></li>
              <li><img className='long' src={MONGOOSE} alt='MONGOOSE'/></li>
            </ul>
          </div>
          <div className='deployAndCoop'>
            <div>
              <h4>Deployment</h4>
              <ul>
                <li><img className='img' src={AWS} alt='AWS'/></li>
                <li><img className='long' src={NETLIFY} alt='NETLIFY'/></li>
                <li><img className='long' src={CLOUDTYPE} alt='CLOUDTYPE'/></li>
              </ul>
            </div>
            <div>
              <h4>Cooperation</h4>
              <ul>
                <li><img className='long' src={TRELLO} alt='TRELLO'/></li>
                <li><img className='long' src={FIGMA} alt='FIGMA'/></li>
              </ul>
            </div>
          </div>
          <div>
            <h4>Etc</h4>
            <ul>
              <li><img className='long' src={GITHUB} alt='Github'/></li>
              <li><img className='img' src={C} alt='C'/></li>
              <li><img className='img' src={CPP} alt='C++'/></li>
              <li><img className='long' src={PYTHON} alt='PYTHON'/></li>
              <li><img className='long' src={JAVA} alt='JAVA'/></li>
            </ul>
          </div>
        </div>
      </div>
    </SkillBox>
  );
  
});
// }

export default Skills;