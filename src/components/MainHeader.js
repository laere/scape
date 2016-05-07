import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const MainHeader = () => {
  return (
    <header>
      <div className="mainHeader">
        <Link to="/">
          <div className="headerLogo">scape</div>
        </Link>
        <nav role="navigation">
          <ul>
            <Link to="about">
              <li className="headerNavLink">About</li>
            </Link>
            {/*<div className="navDot"></div>*/}
            <Link to="relatedsites">
              <li className="headerNavLink">Related Sites</li>
            </Link>
            {/*<div className="navDot"></div>*/}
            <Link to="streams">
              <li className="headerNavLink">Streams</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainHeader;
