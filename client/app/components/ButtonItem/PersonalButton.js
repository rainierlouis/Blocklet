import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

class PersonalButton extends Component {
 constructor(props) {
  super(props);
 }

 render() {
  return (
   <View style={styles.containerPersonal}>
    <Button
     onPress={this.props.onPress}
     icon={{ name: 'person', type: 'octicon' }}
     buttonStyle={styles.personalButton}
     title="Personal"
    />
   </View>
  );
 }
}

PersonalButton.propTypes = {
 onPress: PropTypes.func
};

export default PersonalButton;
