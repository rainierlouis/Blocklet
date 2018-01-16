import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

class fbgButton extends Component {
 constructor(props) {
  super(props);
 }

 render() {
  return (
   <View style={styles.fbgContainer}>
    <Button
     onPress={this.props.onPress}
     icon={{
      name: 'facebook',
      type: 'font-awesome'
     }}
     buttonStyle={styles.fbButton}
    />
    <Button
     onPress={this.props.onPress}
     icon={{
      name: 'google-plus',
      type: 'font-awesome'
     }}
     buttonStyle={styles.gButton}
    />
   </View>
  );
 }
}

fbgButton.propTypes = {
 onPress: PropTypes.func
};

export default fbgButton;
