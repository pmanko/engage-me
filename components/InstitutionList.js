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
  Content
} from 'native-base';

import { fetchEndpoints } from '../utils/endpoints';
import SearchBar from './SearchBar';

export default class InstitutionList extends React.Component {
  state = {
    loading: true,
    institutions: [],
    endpoint: '',
    allInstitutions: []
  };

  async componentDidMount() {
    const endpoints = await fetchEndpoints();

    this.setState({
      loading: false,
      institutions: endpoints,
      allInstitutions: endpoints
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

  renderInstitution = institution => (
    <ListItem noIndent>
      <Body>
        <Text>{institution.OrganizationName}</Text>
        <Text note numberOfLines={1}>
          {institution.FHIRPatientFacingURI}
        </Text>
      </Body>

      <Right>
        <Button>
          <Text>Log In</Text>
        </Button>
      </Right>
    </ListItem>
  );

  render() {
    const { loading, institutions } = this.state;

    if (loading) {
      return <Spinner />;
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
