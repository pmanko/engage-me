import React, { Component } from 'react';
import { Card, CardItem, Text, Body } from 'native-base';
export class PatientInfo extends Component {
  render() {
    return (
      <Card>
        <CardItem header bordered>
          <Text>Hello Your Name!</Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>Here is the data you authorized this app to have!</Text>
          </Body>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>Here is some more data you authorized this app to have!</Text>
          </Body>
        </CardItem>
        <CardItem footer bordered>
          <Text>Source: Your Institution</Text>
        </CardItem>
      </Card>
    );
  }
}

export default PatientInfo;
