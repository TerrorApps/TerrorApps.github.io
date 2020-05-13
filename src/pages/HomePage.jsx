import React from 'react';
import Hero from '../components/Hero.jsx';
import Carousel from '../components/Carousel.jsx';

const HomePage = (props) => {
  return (
    <div>
      <Hero
        title={props.title}
        subTitle={props.subTitle}
        description={props.description}
      />
      <Carousel />
    </div>
  );
};

export default HomePage;
