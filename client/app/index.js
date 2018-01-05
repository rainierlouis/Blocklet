import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Font } from 'expo';

import Hub from './screens/Hub';
import Login from './screens/Login';
import MenuList from './screens/MenuList';

import Navigator from './config/routes';

import { Provider } from 'react-redux';
import store from './config/store';

EStyleSheet.build({
 $primaryPurple: '#181337',
 $darkGrey: '#777777',
 $border: '#3d354f',
 $user: '#5394bc',

 $plus: '#5ec16a',
 $minus: '#bf3b3b',

 $yellow: '#ddb500',

 $white: '#FFF',
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
   pacifico: require('./assets/fonts/Pacifico-Regular.ttf'),
   judson: require('./assets/fonts/Judson-Regular.ttf'),
   gilda: require('./assets/fonts/GildaDisplay-Regular.ttf'),
   quicksand: require('./assets/fonts/Quicksand-Regular.ttf')
  });
  this.setState({ isReady: true });
 }

 render() {
  if (!this.state.isReady) {
   return <Expo.AppLoading />;
  }
  return (
   <Provider store={store}>
    <Navigator onNavigationStateChange={null} />
   </Provider>
  );
 }
}
