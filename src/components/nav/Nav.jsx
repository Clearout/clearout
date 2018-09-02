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
  background-color: #fafafa;
  border-bottom: 1px solid #d9d9d9;
  padding-left: 40px;
  flex-shrink: 0;
`;
const Tab = styled.button`
  font-family: Open Sans;
  background-color: inherit;
  color: #008c72;
  float: left;
  border: none;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  width: 78px;
  padding: 4px 3px;
  font-size: 15px;
  border-radius: 0;
  :hover {
    background-color: #008c7212;
  }
  ${props => (props.active ? 'font-weight: 600' : 'font-weight: 400')};
  ${props => (props.active ? 'border-bottom: 3px solid #008c72' : '0')};
`;
