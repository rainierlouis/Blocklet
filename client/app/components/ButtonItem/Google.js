import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

const Google = ({ onPress }) => (
 <View>
  <Button
   onPress={onPress}
   icon={{ name: 'check', type: 'octicon' }}
   // title="Enter"
   buttonStyle={styles.loginButton}
   fontFamily="quicksand"
   color="white"
   fontSize={22}
  />
 </View>
);

Google.propTypes = {
 onPress: PropTypes.func
};

export default Google;
