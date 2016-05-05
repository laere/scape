import React, { PropTypes } from 'react';
import { IndexLink } from 'react-router';

const MainHeader = () => {
  return (
    <header>
      <div className="mainHeader">
        <IndexLink to="/">
          <div className="headerLogo">Scape</div>
        </IndexLink>
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
