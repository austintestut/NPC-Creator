import React from 'react';
import Title from "../../public/images/npc-text.png";

const Header = () => (
  <div id="header">
    <img className="app-logo" src={Title} />
    <a href="/logout">
      <button id="logout-button">Logout</button>
    </a>
  </div>
);

export default Header;