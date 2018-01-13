import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from '../Container';

import styles from './styles';

class ListItem extends Component {
 constructor(props) {
  super(props);
 }

 static propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool
 };

 render() {
  return (
   <Container>
    {this.props.selected ? (
     <TouchableHighlight
      onPress={this.props.onPress}
      underlayColor={styles.$underlayColor}
     >
      <View style={styles.rowLt}>
       <Text style={styles.text}>{this.props.text}</Text>
      </View>
     </TouchableHighlight>
    ) : (
     <TouchableHighlight
      onPress={this.props.onPress}
      underlayColor={styles.$underlayColor}
     >
      <View style={styles.row}>
       <Text style={styles.text}>{this.props.text}</Text>
      </View>
     </TouchableHighlight>
    )}
   </Container>
  );
 }
}

export default ListItem;
