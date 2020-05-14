import React from 'react';
import Hero from '../components/Hero.jsx';
import Carousel from '../components/Carousel.jsx';

const HomePage = (props) => {
  return (
    <div>
      <div className="aaron-fullscreen">
        <div className="row mx-0 aaron-fullscreen justify-content-center align-items-center">
          <Hero
            title={props.title}
            subTitle={props.subTitle}
            description={props.description}
          />
          {/* <div className="align-items-end">hello</div> */}
        </div>
      </div>
      {/* <div className="aaron-fullscreen"> */}
      <div className="row h-100 justify-content-center align-items-center">
        <Carousel />
      </div>
      {/* </div> */}
    </div>
  );
};

export default HomePage;
