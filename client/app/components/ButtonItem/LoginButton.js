import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

const LoginButton = ({ onPress }) => (
 <View>
  <Button
   onPress={onPress}
   icon={{ name: 'sign-in', type: 'octicon' }}
   title="Login"
   buttonStyle={styles.loginButton}
  />
 </View>
);

LoginButton.propTypes = {
 onPress: PropTypes.func
};

export default LoginButton;
