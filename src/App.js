// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    box-sizing: border-box;
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
        <Route path="/" element={} />
      </Routes>
    </>
  );
}

export default App;
