import React, { PropTypes } from 'react';

const NavBlock = (props) => {
  return (
    <div className="navBlock">
      <div className="navBlock__image">
        <img src={props.img} alt="Runescape image"/>
      </div>
      <div className="navBlock__text">
        <div className="navBlock__text--textTitle">{props.textTitle}</div>
        <div>{props.text}</div>
      </div>
      <div className="navBlock__discover">
        {props.tagline}
      </div>
    </div>

  );
}

export default NavBlock;
