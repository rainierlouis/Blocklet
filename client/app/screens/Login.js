import React, { Component } from 'react';
import { View, StatusBar, Image, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import { Font } from 'expo';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { FacebookLoginButton, GoogleLoginButton } from '../components/ButtonItem';
import { LoginField, InputField } from '../components/FormField';
import { Logo } from '../components/Logo';
import { LoginTitle, CreateAccount } from '../components/TextItem';
import serverHost from '../config/serverHost.js'


const remote4 = 'https://i.imgur.com/InMpJf0.jpg';

class Login extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  componentDidMount() {
    // Expo.SecureStore.deleteItemAsync('userData')
    Expo.SecureStore.getItemAsync('userData')
    .then(userData => {
      // console.log('userString', userData);
      if (userData) {
        let user = JSON.parse(userData).user;
        if (user) {
          console.log('user', user.user);
          this.props.setUser(user.user);
          this.props.navigation.navigate('Balances');
        }
      }
    })
    .catch(err => console.log(err));
  }

  serverAuth = async (data) => {
    // console.log('serverAuth', data);
    return fetch(`${serverHost}/auth`, {
      method: 'POST',
      mode: 'CORS',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(user => {
      console.log('serverAuth response', user);
      this.props.setUser(user);
      return Expo.SecureStore.setItemAsync('userData', JSON.stringify({user}));
    })
    .then(() => this.props.navigation.navigate('Balances'))
    .catch(err => console.log(err));
  }

  renderLoginButtons() {
    if (!this.props.user._id) {
      return (
        <View>
          <FacebookLoginButton serverAuth={this.serverAuth}/>
          <GoogleLoginButton serverAuth={this.serverAuth}/>
        </View>
      );
    }
  }

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
          {this.renderLoginButtons()}
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch({ type: 'SET_USER', user })
});

 export default connect(mapStateToProps, mapDispatchToProps)(Login);
