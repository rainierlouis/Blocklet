import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';

import { Container } from '../components/Container';
import { LoginButton, SignupButton } from '../components/ButtonItem';
import { LoginField } from '../components/FormField';
import { Logo } from '../components/Logo';


class Login extends Component {

	static propTypes = {
		navigation: PropTypes.object,
		// dispatch: PropTypes.func,
	}

	loginUser = () => {
		this.props.navigation.navigate('Hub');
	}

	signUp = () => {
		console.log('navigate to sign up page!');
	}

	render() {
		return (
			<Container>
				<Logo />
				<LoginField />
				<LoginButton
					onPress={this.loginUser}
					/>
					<SignupButton
					onPress={this.signUp}
					/>
			</Container>
		)
	}
}

export default Login;
