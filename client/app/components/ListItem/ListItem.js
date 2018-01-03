import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ListItem = ({ text, onPress }) => (
	<TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
		<View style={styles.row}>
			<Text style={styles.text}>{text}</Text>
		</View>
	</TouchableHighlight>
)

ListItem.propTypes = {
	text: PropTypes.string,
	onPress: PropTypes.func,
}

export default ListItem;
