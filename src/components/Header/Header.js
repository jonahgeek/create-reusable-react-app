import React from "react";
import "./Header.css";
import Link from "../Link/Link";

const Header = ({ logo }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      <small>
        This is a create-react-app boilerplate with reusable react components
      </small>
      <br />
      Edit <code>src/containers/App.js</code> and save to reload.
    </p>
    <Link url="https://reactjs.org" title="Learn React" />
  </header>
);

export default Header;
