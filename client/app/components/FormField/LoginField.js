import React, { Component } from 'react';
import { View, StatusBar, TextInput, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import { FormLabel, FormInput } from 'react-native-elements';

import styles from './styles';

const LoginField = ({ onPress }) => (
 <KeyboardAvoidingView style={styles.container} behavior="padding">
  {/* <FormLabel containerStyle={styles.formLabel} labelStyle={{ color: 'white' }}>
   Username
  </FormLabel> */}
  <TextInput
   placeholder="Email"
   placeholderTextColor="white"
   style={styles.textInput}
   keyboardType="email-address"
   keyboardAppearance="dark"
   returnKeyType="next"
   onSubmitEditing={event => {
    this.passwordRef.focus();
   }}
  />
  {/* <FormInput
   keyboardType="email-address"
   keyboardAppearance="dark"
   returnKeyType="next"
   onSubmitEditing={event => {
    this.passwordRef.focus();
   }}
  /> */}
  {/* <FormLabel containerStyle={styles.formLabel} labelStyle={{ color: 'white' }}>
   Password
  </FormLabel> */}
  <TextInput
   placeholder="Password"
   placeholderTextColor="white"
   style={styles.textInput}
   ref={passwordRef => (this.passwordRef = passwordRef)}
   secureTextEntry={true}
   onSubmitEditing={onPress}
   keyboardAppearance="dark"
   returnKeyType="go"
  />
 </KeyboardAvoidingView>
);

export default LoginField;
