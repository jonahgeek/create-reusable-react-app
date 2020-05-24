import React from "react";
import Link from "../Link/Link";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
`;

const Header = ({ logo }) => (
  <HeaderWrapper>
    <Logo src={logo} alt="logo" />
    <p>
      <small>
        This is a create-reusable-react-app boilerplate with reusable react components
      </small>
      <br />
      Edit <code>src/containers/App.js</code> and save to reload.
    </p>
    <Link url="https://reactjs.org" title="Learn React" />
  </HeaderWrapper>
);

export default Header;
