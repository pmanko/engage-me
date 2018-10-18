import PropTypes from 'prop-types'
import React from 'react'
import { List, ListItem, Body, Right, Button, Text, Spinner } from 'native-base'
import { fetchEndpoints } from '../utils/endpoints'

export default class InstitutionList extends React.Component {
  state = {
    loading: true,
    institutions: [],
  }

  async componentDidMount() {
    const endpoints = await fetchEndpoints()

    this.setState({
      loading: false,
      institutions: endpoints,
    })
  }

  // static propTypes = {
  //   institutions: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       OrganizationName: PropTypes.string.isRequired,
  //       FHIRPatientFacingURI: PropTypes.string.isRequired,
  //     })
  //   ).isRequired,
  // }

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
  )

  render() {
    const { loading, institutions } = this.state
    if (loading) {
      return <Spinner />
    }
    return <List dataArray={institutions} renderRow={this.renderInstitution} />
  }
}

// OrganizationName
//
