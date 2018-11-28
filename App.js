// @flow

import React, { Component } from 'react';

// import { StyleSheet, Text, View } from 'react-native';
import { UIManager, LayoutAnimation, Alert } from 'react-native';
import { authorize, refresh, revoke } from 'react-native-app-auth';

import InstitutionList from './components/InstitutionList';
import Heading from './components/Heading';
import PatientInfo from './components/PatientInfo';
import { fetchMetadata } from './utils/endpoints';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

type State = {
  hasLoggedInOnce: boolean,
  accessToken: ?string,
  accessTokenExpirationDate: ?string,
  refreshToken: ?string
};

const config = {
  clientId: '8XYxp_-joPqWQlKD5pt5zkkXm1WnjE3p',
  clientSecret: 'PrVhT13MgyTCarD3f3krLIv_cVjYdZoMqWbsaOCA',
  redirectUrl: '  ', //note: path is required
  scopes: ['profile', 'patient/*.read', 'user/*.*'],
  serviceConfiguration: {
    authorizationEndpoint: '',
    tokenEndpoint: ''
    //revocationEndpoint: 'https://login.uber.com/oauth/v2/revoke'
  }
};

// const config = {
//   issuer: 'https://demo.identityserver.io',
//   clientId: 'native.code',
//   redirectUrl: 'com.smartpilot.app://redirect',
//   additionalParameters: {},
//   scopes: ['openid', 'profile', 'email', 'offline_access']

//   // serviceConfiguration: {
//   //   authorizationEndpoint: 'https://demo.identityserver.io/connect/authorize',
//   //   tokenEndpoint: 'https://demo.identityserver.io/connect/token',
//   //   revocationEndpoint: 'https://demo.identityserver.io/connect/revoke'
//   // }
// };


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

  // const authState = await authorize(config);

  authorize = async d => {
    try {
      // Add SMART flow to set serviceConfiguration using metadata endpoint here

      const md = await fetchMetadata(d.FHIRPatientFacingURI);

      console.warn(config);

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

    return !state.accessToken ? (
      <InstitutionList authorize={this.authorize} />
    ) : (
      <PatientInfo />
    );

  }
}
