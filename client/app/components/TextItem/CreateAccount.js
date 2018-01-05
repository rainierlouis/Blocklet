import React from 'react';
import { View, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

const CreateAccount = ({ onPress }) => (
 <View style={styles.createContainer}>
  <Text style={styles.accountText}>New Member?</Text>
  <TouchableOpacity onPress={onPress}>
   <Text style={styles.createText}>Sign Up!</Text>
  </TouchableOpacity>
 </View>
);

CreateAccount.propTypes = {
 onPress: PropTypes.func
};

export default CreateAccount;
