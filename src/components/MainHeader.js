import React, { PropTypes } from 'react';

const MainHeader = (props) => {
  return (
    <div className="mainHeader">
      <div className="headerLogo">Scape</div>
      <ul>
        <li className="headerNavLink">About</li>
        ~
        <li className="headerNavLink">Related Sites</li>
        ~
        <li className="headerNavLink">Twitch</li>
      </ul>
    </div>
  );
}

export default MainHeader;
