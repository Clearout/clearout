import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import intro from './markdown/intro.md';

export default class App extends Component {
  render() {
    const data = [
      { title: 'Home', content: intro },
      { title: 'b', content: 'y' }
    ];
    return <Nav data={data} />;
  }
}
