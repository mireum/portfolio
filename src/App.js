// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Main from './components/Main';


const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    box-sizing: border-box;
    font-family: 'GongGothicMedium';
  }
  * {
    box-sizing: inherit;
  }
  .cursor-p {
    cursor: pointer;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
