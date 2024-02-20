import React from 'react';
import styled from 'styled-components';

const ArchiveContainer = styled.article`
  /* background-color: aliceblue; */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .ArchiveBox {
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

    .content {
      display: flex;
      border: 1px solid black;

      img {
        width: 20%;
      }
    }
  }
`;


function Archive(props) {
  return (
    <ArchiveContainer>
      <div className='ArchiveBox'>
        <h3>Archive</h3>
        <div className='content'>
          <img src='https://velog.velcdn.com/images/persestitan/post/7557ea9c-4eaf-4124-b743-530a8375c41b/image.jpeg' alt='Github' />
          <a href='github.com/mireum'>github.com/mireum</a>
        </div>
      </div>
    </ArchiveContainer>
  );
}

export default Archive;