import React from 'react';
import Title from "../../public/images/npc-text.png";

const Header = ({userName}) => (
  <div id="header">
    <img className="app-logo" src={Title} />
    <div id="header-buffer" />
    <span id="app-username">{userName}</span>
    <a href="/logout">
      <button id="logout-button">Logout</button>
    </a>
  </div>
);

export default Header;