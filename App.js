// @flow

import React, { Component } from 'react';

// import { StyleSheet, Text, View } from 'react-native';
import {
  Container,
  Content,
  Text,
  Button,
  Footer,
  FooterTab,
  Icon
} from 'native-base';
import { UIManager, LayoutAnimation, Alert } from 'react-native';
import { authorize, refresh, revoke } from 'react-native-app-auth';

import InstitutionList from './components/InstitutionList';
import Heading from './components/Heading';
import PatientInfo from './components/PatientInfo';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

type State = {
  hasLoggedInOnce: boolean,
  accessToken: ?string,
  accessTokenExpirationDate: ?string,
  refreshToken: ?string
};

const config = {
  clientId: 'any-string-for-smart-smart-sandbox',
  clientSecret: 'any-string-for-smart-sandbox',
  redirectUrl: 'com.smartpilot.app://redirect',
  scopes: ['profile', 'patient/*.*'],
  serviceConfiguration: {
    authorizationEndpoint:
      'https://launch.smarthealthit.org/v/r3/sim/eyJrIjoiMSJ9/auth/authorize',
    tokenEndpoint:
      'https://launch.smarthealthit.org/v/r3/sim/eyJrIjoiMSJ9/auth/token'
  }
};

export default class App extends Component<{}, State> {
  state = {
    hasLoggedInOnce: false,
    accessToken: '',
    accessTokenExpirationDate: '',
    refreshToken: ''
  };

  animateState(nextState: $Shape<State>, delay: number = 0) {
    setTimeout(() => {
      this.setState(() => {
        LayoutAnimation.easeInEaseOut();
        return nextState;
      });
    }, delay);
  }

  authorize = async () => {
    try {
      // Add SMART flow to set serviceConfiguration using metadata endpoint here

      const authState = await authorize(config);

      this.animateState(
        {
          hasLoggedInOnce: true,
          accessToken: authState.accessToken,
          accessTokenExpirationDate: authState.accessTokenExpirationDate,
          refreshToken: authState.refreshToken
        },
        500
      );
    } catch (error) {
      Alert.alert('Failed to log in', error.message);
    }
  };

  refresh = async () => {
    try {
      const authState = await refresh(config, {
        refreshToken: this.state.refreshToken
      });

      this.animateState({
        accessToken: authState.accessToken || this.state.accessToken,
        accessTokenExpirationDate:
          authState.accessTokenExpirationDate ||
          this.state.accessTokenExpirationDate,
        refreshToken: authState.refreshToken || this.state.refreshToken
      });
    } catch (error) {
      Alert.alert('Failed to refresh token', error.message);
    }
  };

  revoke = async () => {
    try {
      await revoke(config, {
        tokenToRevoke: this.state.accessToken,
        sendClientId: true
      });
      this.animateState({
        accessToken: '',
        accessTokenExpirationDate: '',
        refreshToken: ''
      });
    } catch (error) {
      Alert.alert('Failed to revoke token', error.message);
    }
  };

  render() {
    const { state } = this;

    return (
      <Container>
        <Heading />
        <Content>
          {!state.accessToken ? <InstitutionList /> : <PatientInfo />}
        </Content>
        <Footer>
          {!!state.accessToken && (
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
          )}
        </Footer>
      </Container>
    );
  }
}
