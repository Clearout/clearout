import React, { Component } from 'react';
import styled from 'styled-components';

export default class ThemeSelector extends Component {
  changeTheme = theme => {
    const { setActiveTheme } = this.props;
    setActiveTheme(theme);
  };

  render() {
    const { themes } = this.props;
    const buttons = Object.keys(themes).map(theme => {
      return <Button onClick={() => this.changeTheme(theme)}>{theme}</Button>;
    });
    return <StyledThemeSelector>{buttons}</StyledThemeSelector>;
  }
}
const StyledThemeSelector = styled.div`
  flex-shrink: 0;
  width: 10%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Button = styled.button`
  color: ${props => props.theme.color};
  border: 1px solid ${props => props.theme.color};
  background: ${props => props.theme.background};
  padding: 4px 3px;
  font-size: 15px;
  border-radius: 3px;
  margin: 2px;
  box-shadow: 0;
  word-wrap: break-word;
  :hover {
    background: ${props => props.theme.active};
    cursor: pointer;
  }
  :focus {
    outline: 0;
  }
`;
