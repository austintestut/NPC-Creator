import React from "react";
import Footer from "./Footer.jsx";

const LandingPage = ({ authenticateUser }) => (
  <div id="landing">
    <span id="landing-title">NPC Creator</span>
    <a href="/google">
      <button type="button" id="login-button">
        Log in with Google
      </button>
    </a>
    <Footer />
  </div>
);

export default LandingPage;
