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

export default class InputField extends Component {
 constructor(props) {
  super(props);
 }

 render() {
  return (
   <KeyboardAvoidingView style={styles.container} behavior="padding">
    <Item style={styles.textInputTwo}>
     <Icon active name="mail" style={styles.icon} />
     <Input
      style={styles.input}
      keyboardType="email-address"
      keyboardAppearance="dark"
      returnKeyType="next"
      onSubmitEditing={event => {
       this.passwordRef.focus();
      }}
     />
    </Item>
    <Item style={styles.textInputTwo}>
     <Icon active name="lock" style={styles.icon} />
     <Input
      style={styles.input}
      ref={passwordRef => (this.passwordRef = passwordRef)}
      secureTextEntry={true}
      onSubmitEditing={this.props.onPress}
      keyboardAppearance="dark"
      returnKeyType="go"
     />
    </Item>
   </KeyboardAvoidingView>
  );
 }
}
