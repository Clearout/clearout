import React, { Component } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import './Content.css';

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = { text: null };
  }

  componentWillMount() {
    const { data } = this.props;
    fetch(data)
      .then(response => response.text())
      .then(text => {
        this.setState({ text: text });
      });
  }

  render() {
    const { visible } = this.props;
    const { text } = this.state;
    return (
      <ContentDiv>
        {visible && <ReactMarkdown skipHtml={true}>{text}</ReactMarkdown>}
      </ContentDiv>
    );
  }
}

const ContentDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  h1,
  h2,
  h3,
  h4,
  p {
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.background};
  }
  table {
    text-align: left;
  }
`;
