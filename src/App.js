import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Nav from './components/nav/Nav';
import ThemeSelector from './components/themeselector/Themeselector';
import intro from './markdown/intro.md';
import projects from './markdown/projects.md';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTheme: themes.light
    };
  }

  setActiveTheme = theme => {
    this.setState({ activeTheme: themes[theme] });
  };

  render() {
    const data = [
      { title: 'Home', content: intro },
      { title: 'Projects', content: projects }
    ];
    const { activeTheme } = this.state;
    return (
      <ThemeProvider theme={activeTheme}>
        <Page>
          <ThemeSelector themes={themes} setActiveTheme={this.setActiveTheme} />
          <StyledPage>
            <Nav data={data} />
          </StyledPage>
        </Page>
      </ThemeProvider>
    );
  }
}
const themes = {
  light: {
    color: '#000',
    background: '#fff',
    active: '#333'
  },
  dark: {
    color: '#eee',
    background: '#000',
    active: '#333'
  },
  sepia: {
    color: '#333',
    background: '#eee',
    active: '#ddd'
  }
};

const Page = styled.div`
  display: flex;
  flex-direction: row;
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.background};
`;

const StyledPage = styled.div`
  width: 80%;
  height: 100vh;
  overflow: auto;
`;
