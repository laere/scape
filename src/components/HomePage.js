import React, { PropTypes } from 'react';
import Banner from './Banner';
import HomePageNavBlocks from './HomePageNavBlocks';

const HomePage = () => {
  return (
    <main role="main">
      <div className="mainContent">
        <Banner/>
        <HomePageNavBlocks />
      </div>
    </main>
  );
}

export default HomePage;
