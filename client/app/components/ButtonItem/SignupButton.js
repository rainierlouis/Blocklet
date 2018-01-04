import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

const SignupButton = ({ onPress }) => (
 <View>
  <Button
   onPress={onPress}
   icon={{ name: 'shield', type: 'octicon' }}
   title="Sign Up"
   buttonStyle={styles.signupButton}
  />
 </View>
);

SignupButton.propTypes = {
 onPress: PropTypes.func
};

export default SignupButton;
