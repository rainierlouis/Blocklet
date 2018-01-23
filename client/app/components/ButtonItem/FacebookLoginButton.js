import React, { Component } from 'react';
import { View } from 'react-native';
import { SocialIcon } from 'react-native-elements';

import styles from './styles';

class FacebookLoginButton extends Component {
  state = {}
  constructor(props) {
    super(props);
  }

  loginFacebook = async () => {
    console.log('loginFacebook');
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('1537395802982279', {
      permissions: ['public_profile'],
    });
    // console.log('type', type);
    // console.log('token', token);
    if (type === 'success') {
      // console.log('success');
      return fetch(`https://graph.facebook.com/me?access_token=${token}&fields=name,picture,email`)
      .then(res => res.json())
      .then(data => {
        data.accessToken = token;
        data.network = 'facebook'; 
        // console.log('accessToken', data.accessToken);
        this.props.serverAuth(data);
      })
      .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <View style={styles.fbgContainer}>
        <SocialIcon
          title='Sign In With Facebook'
          button
          type='facebook'
          onPress={this.loginFacebook}
          style={{
            width: 220,
          }}
        />
      </View>
    );
  }
}

export default FacebookLoginButton;