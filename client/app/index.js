import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Font } from 'expo';
import { Provider } from 'react-redux';

import Hub from './screens/Hub';
import Login from './screens/Login';
import MenuList from './screens/MenuList';
// import Navigator from './config/routes';

import store from './config/store';
import MainNavigator from './screens/MainNavigator';

EStyleSheet.build({
  // $primaryPurple: '#181337',
  $primaryPurple: '#212121',
  // $primaryPurpleLt: '#43314f',
  $primaryPurpleLt: '#3a3535',
  $grey: '#2b2b2b',
  $darkGrey: '#777777',
  $border: '#3d354f',
  $user: '#5394bc',
  $plus: '#5ec16a',
  $minus: '#bf3b3b',
  $yellow: '#ddb500',
  // $white: '#FFF',
  $white: '#cccccc',
  $black: '#000'
});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      lato: require('./assets/fonts/Lato-Regular.ttf'),
      latos: require('./assets/fonts/Lato-Light.ttf')
    });
    this.setState({ isReady: true });
  }

  pressUser = () => {}

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    );
  }
}
