import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

class PersonalButton extends Component {

	onPress = () => {
		console.log('navigate to personal screen!');
	}

	render() {
		return (
			<View style={styles.containerPersonal}>
				<Button
					onPress={this.onPress}
					icon={{name: 'person', type: 'octicon'}}
					buttonStyle={styles.personalButton}
				title='Personal' />
			</View>
		)
	}
}

PersonalButton.propTypes = {

}

export default PersonalButton;
