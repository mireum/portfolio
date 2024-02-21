import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { MdContentCopy } from "react-icons/md";

const ContactContainer = styled.article`
  background-color: bisque;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .ContactBox{
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

    p {
      font-size: 20px;

      span:hover {
        color: blue;
      }
    }
  }
`;
// function Contact(props) {
const Contact = forwardRef((props, ref) => {

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 이메일이 복사되었습니다!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ContactContainer ref={aboutRef => (ref.current[3] = aboutRef)}>
      <div className='ContactBox'>
        <h3>Contact</h3>
        <p>Email: <span className='cursor-p' onClick={() => handleCopyClipBoard('yljw225@naver.com')}>yljw225@naver.com <MdContentCopy /></span></p>
      </div>
    </ContactContainer>
  );
});

export default Contact;