import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Text, Divider } from 'react-native-elements';

import styles from './styles';
import { images } from './icons/CoinIcons';

const TEMP_TWENTYFOUR = '-2.27';
const TEMP_SEVEN = '+1.44';

const CardItem = () => (
<View style={styles.container}>
	<View style={styles.upperRow}>
		<Image
			style={styles.image}
			source={{ uri: images.BTC }}
			resizeMode='contain'
		/>

		<Text style={styles.symbol}>BTC | </Text>
		<Text style={styles.currency}>Bitcoin</Text>
		<Text style={styles.amountRate}>$3320.11</Text>
	</View>
	<Divider style={styles.divider}/>
	<View style={styles.lowerRow}>
		<Text style={styles.twentyFour}>24h:</Text><Text style={styles.twentyFourPerc}>{TEMP_TWENTYFOUR}%</Text>
		<Text style={styles.seven}>7d:</Text><Text style={styles.sevenPerc}>{TEMP_SEVEN}%</Text>
	</View>
</View>
)

CardItem.propTypes = {

}

export default CardItem;
