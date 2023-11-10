import React from "react";
import GitHubLogo from "../images/GitHubLogo.png";

export default function NavBar() {
  return (
    <>
      <div className="NavBar">
        <h2>PokéFinder</h2>
        <a
          href="https://github.com/Deen-q/PokeFinder"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubLogo} alt="GitHubIcon" />
        </a>
      </div>
    </>
  );
}