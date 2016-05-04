import React, { PropTypes } from 'react';

const NavBlock = (props) => {
  return (
    <div className="navBlock">
      <div className="image">
        <img src={props.img} alt="Runescape image"/>
      </div>
      <div className="text">
        <div>{props.textTitle}</div>
        <div>{props.text}</div>
      </div>
      <div className="discover">
        {props.tagline}
      </div>
    </div>

  );
}

export default NavBlock;
