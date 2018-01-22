import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';

import styles from './styles';

class NoLoginButton extends Component {
  state = {}
  constructor(props) {
    super(props);
  }

  noLogin = async () => {
    return;
  }

  render() {
    return (
      <View style={styles.fbgContainer}>
        <Button
          backgroundColor='#7ebc38'
          rounded
          title='Continue without login'
          fontSize='14px'
          fontWeight='bold'
          large
          style={{
            width: 220,
            margin: 7,
          }}
        />
      </View>
    );
  }
}

export default NoLoginButton;
