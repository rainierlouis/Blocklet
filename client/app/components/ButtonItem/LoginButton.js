import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';


import styles from './styles';

const LoginButton = ({ onPress }) => (
	<Animatable.View
		animation='fadeInUpBig'
		style={styles.containerLogin}
	>
		<Button
			onPress={onPress}
			icon={{name: 'sign-in', type: 'octicon'}}
			title='Login'
			buttonStyle={styles.loginButton}
		/>
	</Animatable.View>
)

LoginButton.propTypes = {
	onPress: PropTypes.func,
}

export default LoginButton;
