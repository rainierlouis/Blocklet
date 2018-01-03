import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

class TransferButton extends Component {

	onPress = () => {
		console.log('navigate to transfer screen!');
	}

	render() {
		return (
			<View style={styles.containerTransfer}>
				<Button
					onPress={this.onPress}
					icon={{name: 'plus', type: 'octicon'}}
					buttonStyle={styles.transferButton}
				title='Transfer' />
			</View>
		)
	}
}

TransferButton.propTypes = {

}

export default TransferButton;
