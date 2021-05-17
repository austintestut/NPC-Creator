import React from 'react';

const Header = () => (
  <div id="header">
    <span className="header-title">
    NPC Creator
    </span>
    <a href="/logout">
      <button>Logout</button>
    </a>
  </div>
);

export default Header;