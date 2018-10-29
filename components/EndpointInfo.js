import React, { Component } from 'react';
import { Content, Card, CardItem, Text, Body, H3 } from 'native-base';

const ResourceCardItem = props => (
  <CardItem bordered>
    <Body>
      <H3>{props.resourceInfo.type}</H3>
      <Text>
        Interactions:{' '}
        {props.resourceInfo.interaction
          .map(interaction => interaction.code)
          .join(' | ')}
      </Text>
    </Body>
  </CardItem>
);

export default class EndpointInfo extends Component {
  renderResources = resources => {
    return resources.map(resource => (
      <ResourceCardItem key={resource.type} resourceInfo={resource} />
    ));
  };

  render() {
    const { metadata } = this.props;
    return (
      <Content padder>
        <Card>
          <CardItem header bordered>
            <Text>Mount Sinai Health System</Text>
          </CardItem>
          <CardItem>
            <Text note>URL: {metadata.url}</Text>
          </CardItem>
          <CardItem>
            <Text note>Software: {metadata.software.name}</Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem header bordered>
            <Text>Supported Resources</Text>
          </CardItem>
          {this.renderResources(metadata.rest[0].resource)}
        </Card>
      </Content>
    );
  }
}
