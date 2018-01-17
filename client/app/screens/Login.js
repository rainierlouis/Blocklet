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

const remote4 = 'https://i.imgur.com/InMpJf0.jpg';

class Login extends Component {
 static propTypes = {
  navigation: PropTypes.object
 };

 loginFb = async () => {
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
   '1537395802982279',
   {
    permissions: ['public_profile']
   }
  );
  if (type === 'success') {
   // Get the user's name using Facebook's Graph API
   await fetch(
    `https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`
   )
    .then(response => response.json())
    .then(data => this.props.navigation.navigate('Home', {}));
  }
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
     {/* <LoginButton onPress={this.loginUser} /> */}
     <FbgButton onPressFb={this.loginFb} onPressPlus={this.loginUser} />
     <CreateAccount onPress={this.signUp} />
    </View>
   </KeyboardAvoidingView>
  );
 }
}

export default Login;
