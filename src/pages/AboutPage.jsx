import React from 'react';
import Hero from '../components/Hero.jsx';
import Content from '../components/Content.jsx';

const AboutPage = (props) => {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        Hey there, this is just a filler page for Terror Apps at the moment.
      </Content>
    </div>
  );
};

export default AboutPage;
