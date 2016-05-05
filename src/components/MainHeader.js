import React, { PropTypes } from 'react';

const MainHeader = () => {
  return (
    <header>
      <div className="mainHeader">
        <div className="headerLogo">Scape</div>
        <nav role="navigation">
          <ul>
            <li className="headerNavLink">About</li>
            {/*<div className="navDot"></div>*/}
            <li className="headerNavLink">Related Sites</li>
            {/*<div className="navDot"></div>*/}
            <li className="headerNavLink">Twitch</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainHeader;
