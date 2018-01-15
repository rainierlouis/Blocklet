import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

const LoginButton = ({ onPress }) => (
 <View>
  <Button
   onPress={onPress}
   icon={{ name: 'check', type: 'octicon' }}
   // title="Enter"
   buttonStyle={styles.loginButton}
   fontFamily="quicksand"
   color="#cccccc"
   fontSize={22}
  />
 </View>
);

LoginButton.propTypes = {
 onPress: PropTypes.func
};

export default LoginButton;
