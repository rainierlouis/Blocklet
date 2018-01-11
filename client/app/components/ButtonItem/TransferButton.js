import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

class TransferButton extends Component {
 constructor(props) {
  super(props);
 }

 render() {
  return (
   <View style={styles.containerTransfer}>
    <Button
     onPress={this.props.onPress}
     icon={{ name: 'plus', type: 'octicon' }}
     buttonStyle={styles.transferButton}
     title="Transfer"
    />
   </View>
  );
 }
}

TransferButton.propTypes = {};

export default TransferButton;
