import React from 'react';
import {
  List,
  ListItem,
  Body,
  Right,
  Button,
  Text,
  Spinner,
  Container,
  Content,
  Header,
  Left,
  Icon,
  Title
} from 'native-base';

import { fetchEndpoints, fetchMetadata } from '../utils/endpoints';
import SearchBar from './SearchBar';
import EndpointInfo from './EndpointInfo';
import { PatientInfo } from './PatientInfo';

export default class InstitutionList extends React.Component {
  state = {
    loading: true,
    institutions: [],
    endpoint: '',
    allInstitutions: [],
    chosenInstitution: '',
    metadata: '',
    showPatientInfo: false
  };

  async componentDidMount() {
    const endpoints = await fetchEndpoints();
    const metadata = await fetchMetadata();
    //console.warn(metadata.rest[0].resource);
    this.setState({
      chosenInstitution: '',
      loading: false,
      institutions: endpoints,
      allInstitutions: endpoints,
      metadata
    });
  }

  handleFilterInstitution = searchString => {
    const { allInstitutions } = this.state;

    if (allInstitutions === []) {
      return;
    }

    const filteredInstitutions = allInstitutions.filter(institution =>
      institution.OrganizationName.toLowerCase().includes(
        searchString.toLowerCase()
      )
    );

    this.setState({
      institutions: filteredInstitutions
    });
  };

  handleChooseInstitution = () => {
    this.setState({
      chosenInstitution: 'key'
    });
  };

  handleShowPatientInfo = () => {
    this.setState({
      showPatientInfo: true
    });
  };

  handleBackButton = () => {
    this.setState({
      chosenInstitution: '',
      showPatientInfo: false
    });
  };

  renderInstitution = institution => (
    <ListItem noIndent onPress={this.handleChooseInstitution}>
      <Left>
        <Button transparent onPress={this.handleChooseInstitution}>
          <Icon name="ios-information-circle-outline" />
        </Button>
        <Text numberOfLines={1}>{institution.OrganizationName}</Text>
      </Left>
      <Right>
        <Button transparent onPress={this.handleShowPatientInfo}>
          <Icon name="ios-arrow-forward" />
        </Button>
      </Right>
    </ListItem>
  );

  renderHeader = () => (
    <Header>
      <Left>
        <Button transparent onPress={this.handleBackButton}>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body>
        <Title>
          SMART Pilot&nbsp;
          <Icon type="FontAwesome" name="plane" style={{ color: 'white' }} />
        </Title>
      </Body>
    </Header>
  );

  render() {
    const {
      loading,
      institutions,
      chosenInstitution,
      metadata,
      showPatientInfo
    } = this.state;

    if (loading) {
      return <Spinner />;
    }

    if (chosenInstitution) {
      return (
        <Container>
          {this.renderHeader()}
          <EndpointInfo metadata={metadata} />
        </Container>
      );
    }

    if (showPatientInfo) {
      return (
        <Container>
          {this.renderHeader()}
          <PatientInfo resources={metadata.rest[0].resource} />
        </Container>
      );
    }

    return (
      <Container>
        <SearchBar onChange={this.handleFilterInstitution} />
        <Content>
          <List dataArray={institutions} renderRow={this.renderInstitution} />
        </Content>
      </Container>
    );
  }
}

// OrganizationName
//
