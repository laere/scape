import React, { PropTypes } from 'react';
import NavBlock from './NavBlock';

const HomePageNavBlocks = (props) => {
  return (
    <nav role="navigation">
      <div className="navBlocks-Wrapper">
        <NavBlock img="http://lorempixel.com/image_output/animals-q-c-640-480-5.jpg"
          textTitle="Beastery"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          tagline="Discover More"
          path="beastery"/>
        <NavBlock img="http://lorempixel.com/image_output/animals-q-c-640-480-5.jpg"
          textTitle="Grand Exchange"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          tagline="Discover More"
          path="ge"/>
        <NavBlock img="http://lorempixel.com/image_output/animals-q-c-640-480-5.jpg"
          textTitle="Hiscores"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          tagline="Discover More"
          path="hiscores"/>
      </div>
    </nav>
  );
}

export default HomePageNavBlocks;
