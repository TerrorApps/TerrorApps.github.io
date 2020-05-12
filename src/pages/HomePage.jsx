import React from 'react';
import Hero from '../components/Hero.jsx';

const HomePage = (props) => {
  return (
    <Hero
      title={props.title}
      subTitle={props.subTitle}
      description={props.description}
    />
  );
};

export default HomePage;
