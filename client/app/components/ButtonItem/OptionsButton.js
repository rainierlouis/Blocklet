import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

const OptionsButton = ({ onPress }) => (
 <View style={styles.containerMenu}>
  <Button
   onPress={onPress}
   icon={{ name: 'home', type: 'octicon' }}
   buttonStyle={styles.optionsButton}
  />
 </View>
);

OptionsButton.propTypes = {
 onPress: PropTypes.func
};

export default OptionsButton;
