import React from 'react';
import styled from 'styled-components';

const SkillBox = styled.article`
  background-color: bisque;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* 후에 삭제할 것 */
  height: 600px;

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
  }
`;

function Skills(props) {
  return (
    <SkillBox>
      <div className='aboutBox'>
        <h3>SKILLS</h3>
      </div>
    </SkillBox>
  );
}

export default Skills;