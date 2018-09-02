import React, { Component } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

export default class Nav extends Component {
  render() {
    const { data, visible } = this.props;
    return (
      <ContentDiv>
        {visible && <ReactMarkdown>{data}</ReactMarkdown>}
      </ContentDiv>
    );
  }
}

const ContentDiv = styled.div`
  width: 80%;
  margin: 0 auto;
`;
