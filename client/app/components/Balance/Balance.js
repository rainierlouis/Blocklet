import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Divider, Text } from 'react-native-elements';

import { images } from '../CardItem/icons/CoinIcons';

import styles from './styles';

const Balance = ({ balanceAmount }) => (
	<View style={styles.container}>
		<Text style={styles.balanceTextTitle}>Your Balance</Text>
		<Text h2 style={styles.balanceTextAmount}>{balanceAmount}
			<Image
				style={styles.image}
				source={{ uri: images.BTC }}
				resizeMode='contain'
			/>
		</Text>
		<Divider style={styles.divider} />
	</View>
)

Balance.propTypes = {
	balanceAmount: PropTypes.number,
}

export default Balance;
