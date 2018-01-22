import React, { Component } from 'react';
import { View } from 'react-native';
import { SocialIcon } from 'react-native-elements';

import styles from './styles';

class GoogleLoginButton extends Component {
  state = {}
  constructor(props) {
    super(props);
  }

  loginGoogle = async () => {
    console.log('loginGoogle');
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: '113358382259-46u16nh5voqvu0ub3b70is5ibh2sfs50.apps.googleusercontent.com',
        iosClientId: '113358382259-err27v3ujilra06hk3gem9dfur1jb1fk.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
      if (result.type === 'success') {
        let data = {
          id: result.user.id,
          accessToken: result.accessToken,
          idToken: result.idToken,
          network: 'google'
        };
        // console.log('loginGoogle', data);
        this.props.serverAuth(data);
      } else {
        return {cancelled: true};
      }
    } catch(e) {
      return {error: true};
    }
  }

  render() {
    return (
      <View style={styles.fbgContainer}>
        <SocialIcon
          title='Sign In With Google'
          button
          type='google-plus-official'
          onPress={this.loginGoogle}
          style={{
            width: 220,
          }}
        />
      </View>
    );
  }
}

export default GoogleLoginButton;