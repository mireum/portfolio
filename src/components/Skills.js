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
      margin-bottom: 30px;
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
        height: 100px;
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
              <li><img src='https://i.namu.wiki/i/hQfMrD-Rm8M-B__0aCo7xbbmjglNj6QJ68uJbz0qgN5zPUk8L9q3QywDQGfxmXtA6ZWc-ul5vJb8IOtiiPd0RxWI533DjRpmRyY0FJfpGjk4zQ6oNxHpt8BX58D3Gl-dffei651UNh7zcBZRmV38eQ.svg' alt='CSS'/></li>
              <li><img src='https://i.namu.wiki/i/giIM9w8ADV1lGgmJ1KD7vkOiRk3OhiqDJ-ChtoWxQgi8miHChVx7AI8j_IZkuy7x6mREtq67WsvnyDSZlychmvThXNOXYijKJx_J_6lW5k9KxKypgFCd15E4UMYcrlY88V3ot0djaJEC_hT74rOzRQ.svg' alt='JS'/></li>
              <li><img src='https://i.namu.wiki/i/T5Sc7TCs2YZjwGNE_zjupqS5bDJVGbidXEiRSE9o_nN_fEJXtX415YpjxCHKYG8JOssFZ8libGWFyJNjPjvN_Oa6VBjopVyUaXaVDGjX_YhMzdzmvciMdT-_PRY4UGVIdqewpJRdMmN_qdxfK1xIBw.svg' alt='SASS'/></li>
              <li><img src='https://t1.daumcdn.net/cfile/tistory/24457C4F58663DD011?original' alt='REACT'/></li>
              <li><img src='https://velog.velcdn.com/images/dev-mish-mash/post/1dca7b40-8e73-4981-9916-160d3fc12040/react-redux.png' alt='REDUX'/></li>
              <li><img src='https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/29/Rlogical-Blog-Images-thumbnail.png' alt='NEXTJS'/></li>
            </ul>  
          </div>
          <div>
            <h4>Backend</h4>
            <ul>
              <li><img src='https://i.namu.wiki/i/ipDC9DBSSbtvyoPMtb4JwO4l7DjZ0ZOL-7RFNNiFY_5VD6XV6exPLu5n11u_rXVHbGqa5Cjm2KfzfhxmsVh8wxPQG-BaMNTxaXPPcJ1CBrOoDBFJ_0d1iEtLGarAs9uJIkv9GxR6l95qIMnFydE_oQ.svg' alt='NODEJS'/></li>
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
              <li><img src='https://i.namu.wiki/i/qQ6-AV-oDIXhxU2HYgqfPeYqn6qKIktrvDHTcPNwb03eBkXk2V2hzy8YWmAOJMYFzk0lpSaGAbAdswmKre7hvs8kSz7X2O_lClip0W1jBNHOt0oWt0nqi0zouK1B2dBpFolOqtv4T4lPt4l9oFTQhw.svg' alt='C'/></li>
              <li><img src='https://i.namu.wiki/i/DLfnY0TdpBLGZ0a-8wKkTnMprQmutZWLEBeswhndwsnbOdXdscTb8tvA04T3hA85UsK6sd8L2N7SfGLajcTTkjgDxQK2W2_Fx7kBTk1x41jlrURdR3IIXIUzYGflay5ffv8lBmVR8X6uwx6sLUhb_g.svg' alt='C++'/></li>
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