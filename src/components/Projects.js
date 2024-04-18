import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { img1, img2, img3 } from "../image/index";

const ProjectsContainer = styled.article`
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .ProjectsBox {
    width: 70%;
    max-width: 1100px;
    padding: 4rem 2rem 2rem;

    h3 {
      font-size: 48px;
      font-family: 'GongGothicBold';
      text-decoration: underline 1px;
      text-underline-offset: 20px;
      padding: 10px 0;
      margin-bottom: 60px;
    }
  }
`;

const ContentBox = styled.div`
  box-shadow: rgba(149, 160, 165, 0.2) 0px 8px 24px;
  background-color: #fff;
  border-radius: 30px;

  h4 {
    font-size: 34px;
    font-weight: bold;
    padding: 30px 0;
    color: tomato;
  }

  .divBox {
    padding: 20px;

    img {
      width: 50%;    
    }
    p {
        font-size: 16px;
        margin: 10px 0;
    }
  }
  & + & {
    margin-top: 30px;
  }
`;

// function Projects(props) {
const Projects = forwardRef((props, ref) => {
  return (
    <ProjectsContainer ref={aboutRef => (ref.current[2] = aboutRef)}>
      <div className='ProjectsBox'>
        <h3>Projects</h3>
          <ContentBox>
            <div className='divBox'>
              <h4>문화생활력소</h4>
              <img src={img2} alt='project2_img'/>
              <div className='pBox'>
                <p>전국의 축제와 전시회를 한 눈에 찾아보고 필요하다면 예약도 할 수 있는 웹입니다.</p>
                <p>주요 기능으로는 원하는 축제를 카테고리에 따라 찾아보고 상세 정보(위치, 웹페이지) 등과 예약을 할 수 있습니다.</p>
                <p>React, Node, Express, MongoDB, AWS S3를 이용하였습니다.</p>
                <p>✔이 프로젝트는 혼자 공부하여 웹호스팅 사이트를 이용하지 않고 AWS를 사용해 배포하였습니다! </p>
                <p>❗실 서비스 중은 아닙니다.</p>
                <hr/>
                <p>◾URL  <a href='https://event.devcjw.com/'>event.devcjw.com/</a></p>
                <p>◾GitHub  <a href='https://github.com/mireum/event-project'>github.com/mireum/event-project</a></p>
              </div>
            </div>
          </ContentBox>
          <ContentBox>
            <div className='divBox'>
              <h4>마이멍</h4>
              <img src={img1} alt='project1_img'/>
              <div className='pBox'>
                <p>초보 견주들이 강아지를 올바르게 키울 수 있도록 맞춤 서비스를 제공하고, 같은 고민을 하는 사람들을 위한 웹입니다.</p>
                <p>주요 기능으로는 자신의 강아지 기입 시 그에 맞는 사료와 물품이 추천됩니다.</p>
                <p>React, Node, Express, MongoDB, AWS S3를 이용하였습니다.</p>
                <p>❗실 서비스 중은 아닙니다.</p>
                <hr/>
                <p>◾URL  <a href='https://mymung.netlify.app/'>mymung.netlify.app/</a></p>
                <p>◾GitHub  <a href='https://github.com/mireum/event-project'>github.com/mireum/event-project</a></p>
              </div>
            </div>
          </ContentBox>
          <ContentBox>
            <div className='divBox'>
              <h4>Portfolio</h4>
              <img src={img3} alt='project3_img'/>
              <div className='pBox'>
                <p>저의 포트폴리오입니다.</p>
                <p>포트폴리오 겸 리액트와 노드를 연습하기 위해 노력했습니다.</p>
                <hr/>
                <p>◾URL  <a href='https://cjwsportfolio.vercel.app/'>https://cjwsportfolio.vercel.app//</a></p>
                <p>◾GitHub  <a href='https://github.com/mireum/portfolio'>github.com/mireum/portfolio</a></p>
              </div>
            </div>
          </ContentBox>
      </div>
    </ProjectsContainer>
  );
});

export default Projects;