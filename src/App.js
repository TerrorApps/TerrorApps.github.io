import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super(props);
    this.state = {
      title: 'Terror Apps',
      headerLinks: [
        {
          title: 'Home',
          path: '/',
        },
        {
          title: 'About',
          path: '/about',
        },
        {
          title: 'Contact',
          path: '/contact',
        },
      ],
      home: {
        title: 'Be Relentless',
        subTitile: 'Projects that make a difference',
        description: 'See projects below',
      },
      about: {
        title: 'About Us',
      },
      contact: {
        title: 'Contact Us',
      },
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to the Terror Squad</h1>
        <h2>I hope this change works</h2>
      </div>
    );
  }
}

export default App;
