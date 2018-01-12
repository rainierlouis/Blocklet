import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

const MenuButton = ({ onPress }) => (
 <View style={styles.containerMenu}>
  <Button
   onPress={onPress}
   icon={{ name: 'three-bars', type: 'octicon' }}
   buttonStyle={styles.menuButton}
  />
 </View>
);

MenuButton.propTypes = {
 onPress: PropTypes.func
};

export default MenuButton;
