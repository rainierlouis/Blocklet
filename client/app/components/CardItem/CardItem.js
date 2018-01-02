import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Text, Divider } from 'react-native-elements';

import styles from './styles';
import { images } from './icons/CoinIcons';

// TODO: Change styling color depending on pos/neg percentage

const CardItem = ({ twentyFourPerc, sevenPerc }) => (
<View style={styles.container}>
	<View style={styles.twentyFourContainer}>
		<Text style={styles.twentyFour}>24h:</Text>
		<Text style={styles.twentyFourPerc}>{twentyFourPerc}%</Text>
	</View>
	<View style={styles.sevenContainer}>
		<Text style={styles.seven}>7d:</Text>
		<Text style={styles.sevenPerc}>{sevenPerc}%</Text>
	</View>
		</View>
)

CardItem.propTypes = {
	twentyFourPerc: PropTypes.number,
	sevenPerc: PropTypes.number,
}

export default CardItem;
