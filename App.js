import React from 'react'
// import { StyleSheet, Text, View } from 'react-native';
import { Font, AppLoading } from 'expo'
import {
  Container,
  Header,
  Content,
  Text,
  Body,
  Right,
  Button,
  Footer,
  FooterTab,
  Icon,
  Title,
  Spinner,
  Left,
} from 'native-base'
import InstitutionList from './Components/InstitutionList'

export default class App extends React.Component {
  state = {
    //   {
    //     OrganizationName: 'Access Community Health Network',
    //     FHIRPatientFacingURI:
    //       'https://eprescribing.accesscommunityhealth.net/FHIR/api/FHIR/DSTU2/',
    //   },
    //   {
    //     OrganizationName: 'AdvantageCare Physicians',
    //     FHIRPatientFacingURI:
    //       'https://epwebapps.acpny.com/FHIRproxy/api/FHIR/DSTU2/',
    //   },
    //   {
    //     OrganizationName: 'Allegheny Health Network',
    //     FHIRPatientFacingURI:
    //       'https://epicprisfd01.wpahs.org/PRD-FHIR/api/FHIR/DSTU2/',
    //   },
    //   {
    //     OrganizationName: 'Allina Health System',
    //     FHIRPatientFacingURI:
    //       'https://webproxy.allina.com/FHIR/api/FHIR/DSTU2/',
    //   },
    //   {
    //     OrganizationName: 'Altru Health System',
    //     FHIRPatientFacingURI: 'https://epicsoap.altru.org/fhir/api/FHIR/DSTU2/',
    //   },
    //   {
    //     OrganizationName: 'Anne Arundel Medical Center',
    //     FHIRPatientFacingURI: 'https://epicarr.aahs.org/fhir/api/FHIR/DSTU2/',
    //   },
    //   {
    //     OrganizationName: 'Ardent',
    //     FHIRPatientFacingURI:
    //       'https://epicproxy.ardenthealth.com/fhir/api/FHIR/DSTU2/',
    //   },
    //   {
    //     OrganizationName: 'Ascension - Providence Healthcare Network',
    //     FHIRPatientFacingURI:
    //       'https://stofo.providence-waco.org/FHIRProxy/api/FHIR/DSTU2/',
    //   },
    //   {
    //     OrganizationName: 'Ascension WI',
    //     FHIRPatientFacingURI:
    //       'https://eprescribe.wfhc.org/FHIRproxy/api/FHIR/DSTU2/',
    //   },
    //   {
    //     OrganizationName: 'Atlantic Health',
    //     FHIRPatientFacingURI:
    //       'https://soapproxy.atlantichealth.org/FHIRPrd/api/FHIR/DSTU2/',
    //   },
    //   {
    //     OrganizationName: 'Atrius Health',
    //     FHIRPatientFacingURI:
    //       'https://iatrius.atriushealth.org/FHIR/api/FHIR/DSTU2/',
    //   },
    //   {
    //     OrganizationName: 'Aurora Health Care - myAurora',
    //     FHIRPatientFacingURI:
    //       'https://EpicFHIR.aurora.org/FHIR/MYAURORA/api/FHIR/DSTU2/',
    //   },
    //   {
    //     OrganizationName: 'Austin Regional Clinic',
    //     FHIRPatientFacingURI:
    //       'https://mobileprod.arcmd.com/FHIR/api/FHIR/DSTU2/',
    //   },
    //   {
    //     OrganizationName: 'Baptist Health – KY \u0026 IN',
    //     FHIRPatientFacingURI:
    //       'https://epicproxy.bhsi.com/PRD-FHIR/api/FHIR/DSTU2/',
    //   },
    // ],
    fontLoaded: false,
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    })
    this.setState({ fontLoaded: true })
  }

  componentDidMount() {}

  render() {
    const { organizationList, fontLoaded } = this.state

    if (!fontLoaded) {
      return (
        <Container>
          <Header />
          <Content>
            <Spinner />
          </Content>
        </Container>
      )
    }
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>
              SMART Pilot
              <Icon
                type="FontAwesome"
                name="plane"
                style={{ color: 'white' }}
              />
            </Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <InstitutionList institutions={organizationList} />
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Institution List</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Log out</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
