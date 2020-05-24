import React from "react";
import logo from "./logo.svg";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header/Header";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`;

const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
  return (
    <>
    <GlobalStyle />
    <AppWrapper>
      <Header logo={logo} />
    </AppWrapper>
    </>
  );
}

export default App;
