import React, { Component } from 'react';
import { View, StatusBar, TextInput, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import { FormLabel, FormInput } from 'react-native-elements';

import styles from './styles';

const LoginField = () => (

		<KeyboardAvoidingView
			style={styles.container}
			behavior='padding'
		>
			<FormLabel>Username</FormLabel>
			<FormInput />
			<FormLabel>Password</FormLabel>
			<FormInput secureTextEntry={true}/>
		</KeyboardAvoidingView>

)

export default LoginField;
