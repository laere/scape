import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const NavBlock = (props) => {
  return (
    <Link to={props.path}>
      <div className="navBlock">
        <div>
          <img className="navBlock__image" src={props.img} alt="Runescape image"/>
        </div>
        <div className="navBlock__text">
          <div className="navBlock__text--textTitle">{props.textTitle}</div>
          <div>{props.text}</div>
        </div>
        <div className="navBlock__discover">
          {props.tagline}
        </div>
      </div>
    </Link>
  );
}

export default NavBlock;
