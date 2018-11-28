// @flow

import React from 'react';
import { Header, Left, Body, Right, Title, Icon } from 'native-base';

export default class Heading extends React.Component<Props> {
  render() {
    return (
      <Header>
        <Left />
        <Body>
          <Title>Engage Me!</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
