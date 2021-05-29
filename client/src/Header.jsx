import React from "react";
import Title from "../../public/images/npc-text.png";
import Logo from "../../public/images/npc-logo.png";

const Header = ({ userName, npcCount }) => (
  <div id="header">
    <img id="header-pic" src={Logo} />
    <span id="app-username">{userName}</span>
    <div id="header-buffer-1" />
    <img className="app-logo" src={Title} />
    <div id="header-buffer-2" />
    <span id="header-npc-count">NPCs Created: {npcCount}</span>
    <a href="/logout">
      <button id="logout-button">Logout</button>
    </a>
  </div>
);

export default Header;
