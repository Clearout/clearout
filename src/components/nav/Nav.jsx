import React, { Component } from 'react';
import styled from 'styled-components';
import Content from '../content/Content';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    const titles = this.props.data.map(data => (data = data.title));
    this.state = {
      activeTab: titles[0]
    };
  }

  openTab = e => {
    let id = e.target.id;
    if (this.state.activeTab !== id) {
      this.setState({
        activeTab: id
      });
    }
  };

  render() {
    const { data } = this.props;
    const { activeTab } = this.state;

    const tabs = data.map(data => {
      const { title } = data;
      const active = activeTab === title;
      return (
        <Tab
          key={`tab-${title}`}
          id={title}
          onClick={this.openTab}
          active={active}
        >
          {title}
        </Tab>
      );
    });

    const tabContents = data.map(data => {
      const { title, content } = data;
      const visible = activeTab === title;
      return (
        <Content data={content} key={`content-${title}`} visible={visible} />
      );
    });

    return (
      <React.Fragment>
        <Tabs>{tabs}</Tabs>
        {tabContents}
      </React.Fragment>
    );
  }
}

const Tabs = styled.div`
  overflow: hidden;
  width: 90%;
  margin: 0 auto;
  flex-shrink: 0;
  background-color: ${props => props.theme.background};
  border-bottom: 1px solid ${props => props.theme.color};
`;
const Tab = styled.button`
  font-family: Open Sans;
  background-color: inherit;
  float: left;
  border: none;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  width: 78px;
  padding: 4px 3px;
  font-size: 18px;
  border-radius: 0;
  color: ${props => props.theme.color};
  border-bottom: ${props =>
    props.active ? `3px solid ${props.theme.color}` : '0'};
  font-weight: ${props => (props.active ? '600' : '500')};
  :hover {
    background-color: ${props => props.theme.active};
    border-bottom: 3px solid ${props => props.theme.color};
  }
`;
