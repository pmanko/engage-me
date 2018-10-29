import React, { Component } from 'react';
import { Card, Body, Content, CardItem, Text, Spinner } from 'native-base';
import {
  fetchPatientData,
  fetchPatientResourceCount
} from '../utils/endpoints';
export class PatientInfo extends Component {
  state = {
    patientInfo: {},
    resourceCounts: [],
    loading: true
  };

  async componentDidMount() {
    const { resources } = this.props;

    const patientInfo = await fetchPatientData();
    const counts = [];

    for (var resource of resources) {
      counts.push(await fetchPatientResourceCount(resource.type));
    }

    this.setState({
      patientInfo,
      resourceCounts: counts,
      loading: false
    });
  }

  render() {
    const { patientInfo, resourceCounts, loading } = this.state;

    if (loading) {
      return <Spinner />;
    }

    return (
      <Content>
        <Card>
          <CardItem header bordered>
            <Text>Hello {patientInfo.name[0].given}</Text>
          </CardItem>
          <CardItem>
            <Text note>Gender: {patientInfo.gender}</Text>
          </CardItem>
          <CardItem>
            <Text note>
              Birth Date:
              {patientInfo.birthDate}
            </Text>
          </CardItem>
        </Card>

        {resourceCounts.map(
          (resourceCount, i) =>
            !!resourceCount.count && (
              <Card key={i}>
                <CardItem bordered>
                  <Text>
                    {resourceCount.name}
                    s: {resourceCount.count}
                  </Text>
                </CardItem>
              </Card>
            )
        )}
      </Content>
    );
  }
}

export default PatientInfo;
