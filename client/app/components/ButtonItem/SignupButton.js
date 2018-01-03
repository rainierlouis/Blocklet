import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';

import styles from './styles';

const SignupButton = ({ onPress }) => (
	<Animatable.View
		animation='fadeInUpBig'
		delay={500}
	>
		<Button
			onPress={onPress}
			icon={{name: 'shield', type: 'octicon'}}
			title='Sign Up'
			buttonStyle={styles.signupButton}
		/>
	</Animatable.View>
)

SignupButton.propTypes = {
	onPress: PropTypes.func,
}

export default SignupButton;
