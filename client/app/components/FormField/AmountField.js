import React, { Component } from 'react';
import {
 Container,
 Header,
 Content,
 Item,
 Input,
 Icon,
 Label
} from 'native-base';
import { KeyboardAvoidingView } from 'react-native';

import styles from './styles';

export default class AmountField extends Component {
 constructor(props) {
  super(props);
 }

 render() {
  return (
   <KeyboardAvoidingView style={styles.amountContainer} behavior="padding">
    <Item style={styles.textInputTwo}>
     <Icon active name={this.props.iconName} style={styles.icon} />
     <Input
      style={styles.input}
      keyboardType="numeric"
      keyboardAppearance="dark"
      returnKeyType="go"
      onChangeText={
       this.props.feeEstimate ? e => this.props.feeEstimate(e) : null
      }
      editable={this.props.editableContent || true}
     />
    </Item>
   </KeyboardAvoidingView>
  );
 }
}
