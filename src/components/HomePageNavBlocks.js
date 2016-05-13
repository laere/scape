import React, { PropTypes } from 'react';
import NavBlock from './NavBlock';

const HomePageNavBlocks = (props) => {
  return (
    <nav role="navigation">
      <div className="navBlocks-Wrapper">
        <NavBlock img="http://vignette2.wikia.nocookie.net/runescape2/images/c/c7/Araxxor_News_(3)_update_image.jpg/revision/latest?cb=20140728125234"
          textTitle="Beastery"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          tagline="Discover More"
          path="beastery"/>
        <NavBlock img="http://rationalstandard.com/wp-content/uploads/2016/04/Ruuhkainen_p%C3%A4iv%C3%A4_G_E-ss%C3%A4.png"
          textTitle="Grand Exchange"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          tagline="Discover More"
          path="grandexchange"/>
        <NavBlock img="http://i.imgur.com/at2IK1d.gif"
          textTitle="Hiscores"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          tagline="Discover More"
          path="hiscores"/>
      </div>
    </nav>
  );
}

export default HomePageNavBlocks;
