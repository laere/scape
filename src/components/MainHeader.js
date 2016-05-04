import React, { PropTypes } from 'react';

const MainHeader = () => {
  return (
    <div className="mainHeader">
      <div className="headerLogo">Scape</div>
      <ul>
        <li className="headerNavLink">About</li>
        <div className="navDot"></div>
        <li className="headerNavLink">Related Sites</li>
        <div className="navDot"></div>
        <li className="headerNavLink">Twitch</li>
      </ul>
    </div>
  );
}

export default MainHeader;
