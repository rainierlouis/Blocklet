import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

class OptionsButton extends Component {

	onPress = () => {
		console.log('navigate to options screen!');
	}

	render() {
		return (
			<View style={styles.containerMenu}>
				<Button
					onPress={this.onPress}
					icon={{name: 'settings', type: 'octicon'}}
					buttonStyle={styles.optionsButton}
				/>
			</View>
		)
	}
}

OptionsButton.propTypes = {

}

export default OptionsButton;
