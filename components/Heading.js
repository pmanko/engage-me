import React from 'react';
import { Header, Left, Body, Right, Title, Icon } from 'native-base';

export default class Heading extends React.Component {
  render() {
    return (
      <Header>
        <Left />
        <Body>
          <Title>
            SMART Pilot
            <Icon type="FontAwesome" name="plane" style={{ color: 'white' }} />
          </Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
