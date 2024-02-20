import React from 'react';
import styled from 'styled-components';

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
      }
      img {
        width: 100px;
        height: 90px;
      }
      img.long {
        width: 150px;
        height: 100px;
      }
    
    }
  }
`;

function Skills(props) {
  return (
    <SkillBox>
      <div className='aboutBox'>
        <h3>SKILLS</h3>
        <div className='skillBox'>
          <div>
            <h4>Frontend</h4>
            <ul>
              <li><img src='https://www.w3.org/html/logo/downloads/HTML5_Logo.svg' alt='HTML'/></li>
              <li><img style={{width:70}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/428px-CSS.3.svg.png?20160504153216' alt='CSS'/></li>
              <li><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Javascript_Logo.png/640px-Javascript_Logo.png' alt='JS'/></li>
              <li><img src='https://rstudio.github.io/sass/reference/figures/logo.svg' alt='SASS'/></li>
              <li><img src='https://t1.daumcdn.net/cfile/tistory/24457C4F58663DD011?original' alt='REACT'/></li>
              <li><img src='https://velog.velcdn.com/images/dev-mish-mash/post/1dca7b40-8e73-4981-9916-160d3fc12040/react-redux.png' alt='REDUX'/></li>
              <li><img src='https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/29/Rlogical-Blog-Images-thumbnail.png' alt='NEXTJS'/></li>
            </ul>  
          </div>
          <div>
            <h4>Backend</h4>
            <ul>
              <li><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1920px-Node.js_logo.svg.png' alt='NODEJS'/></li>
              <li><img src='https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/8d565/express-js.webp' alt='EXPRESSJS'/></li>
              <li><img src='https://miro.medium.com/v2/resize:fit:640/format:webp/1*doAg1_fMQKWFoub-6gwUiQ.png' alt='MONGODB'/></li>
              <li><img className='long' src='https://miro.medium.com/v2/resize:fit:720/format:webp/1*acfAKaDI7uv5GyFnJmiPhA.png' alt='MONGOOSE'/></li>
            </ul>
          </div>
          <div className='deployAndCoop'>
            <div>
              <h4>Deployment</h4>
              <ul>
                <li><img src='https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146074.png' alt='AWS'/></li>
                <li><img className='long' src='https://searchvectorlogo.com/wp-content/uploads/2023/06/netlify-logo-vector-2023.png' alt='NETLIFY'/></li>
                <li><img className='long' src='https://contents.nextunicorn.kr/company/8cf6848f88d71774/rep-82c61846ecd2c67b014399f80566436a2d21.png?s=640x&t=cover&f=jpg' alt='CLOUDTYPE'/></li>
              </ul>
            </div>
            <div>
              <h4>Cooperation</h4>
              <ul>
                <li><img className='long' src='https://logos-world.net/wp-content/uploads/2021/03/Trello-Logo.png' alt='Trello'/></li>
                <li><img className='long' src='https://logowik.com/content/uploads/images/figma459.logowik.com.webp' alt='Figma'/></li>
              </ul>
            </div>
          </div>
          <div>
            <h4>Etc</h4>
            <ul>
              <li><img src='https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png' alt='Github'/></li>
              <li><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/1226px-The_C_Programming_Language_logo.svg.png' alt='C'/></li>
              <li><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png' alt='C++'/></li>
              <li><img src='https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' alt='Python'/></li>
              <li><img src='https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png' alt='Java'/></li>
            </ul>
          </div>
        </div>
      </div>
    </SkillBox>
  );
}

export default Skills;