import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Label } from 'native-base';
import { KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class AmountField extends Component {
 constructor(props) {
  super(props);
 }

 render() {
  return (
   <KeyboardAvoidingView
    style={
     this.props.bottomField ? styles.amountContainerB : styles.amountContainer
    }
    behavior="padding"
   >
    <Item style={styles.textInputTwo}>
     <Icon active name={this.props.iconName} style={styles.icon} />
     <Input
      style={styles.input}
      keyboardType="numeric"
      keyboardAppearance="dark"
      returnKeyType="go"
      onChangeText={e => this.props.onPress(e)}
      editable={this.props.editableContent || true}
      placeholder={this.props.updateRate}
     />
    </Item>
   </KeyboardAvoidingView>
  );
 }
}
