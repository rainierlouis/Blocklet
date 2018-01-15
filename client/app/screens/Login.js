import React, { Component } from 'react';
import { View, StatusBar, Image, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import { Font } from 'expo';

import { Container } from '../components/Container';
import { LoginButton, SignupButton, FbgButton } from '../components/ButtonItem';
import { LoginField, InputField } from '../components/FormField';
import { Logo } from '../components/Logo';
import { LoginTitle, CreateAccount } from '../components/TextItem';

const remote = 'https://i.imgur.com/ydfBdSL.jpg';
const remote1 = 'https://i.imgur.com/Tz9MYX4.jpg';
const remote2 = 'https://i.imgur.com/1ijuV5G.jpg';
const remote3 = 'https://i.imgur.com/55F7qQ8.jpg';
const remote4 = 'https://i.imgur.com/InMpJf0.jpg';
const remote5 = 'https://i.imgur.com/FF2LQOP.jpg';
const remote6 = 'https://image.ibb.co/eJ887G/bg2.png';

class Login extends Component {
 static propTypes = {
  navigation: PropTypes.object
 };

 loginUser = () => {
  this.props.navigation.navigate('Home');
 };

 signUp = () => {
  console.log('navigate to sign up page!');
 };

 render() {
  return (
   <KeyboardAvoidingView
    behaviour="height"
    style={{
     flex: 1
    }}
   >
    <Image
     style={{
      flex: 1,
      resizeMode: 'cover',
      width: undefined,
      height: undefined,
      backgroundColor: '#889DAD'
     }}
     source={{ uri: remote4 }}
    />
    <View
     style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center'
     }}
    >
     <Logo />
     <InputField onPress={this.loginUser} />
     <LoginButton onPress={this.loginUser} />
     <FbgButton />
     <CreateAccount onPress={this.signUp} />
    </View>
   </KeyboardAvoidingView>
  );
 }
}

export default Login;
