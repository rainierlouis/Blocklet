import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Divider, Text } from 'react-native-elements';

import styles from './styles';

const TEMP_AMOUNT = '0.001360';

const Balance = () => (
	<View style={styles.container}>
		<Text style={styles.balanceTextTitle}>Your Balance</Text>
		<Text h2 style={styles.balanceTextAmount}>{TEMP_AMOUNT} ฿T</Text>
		<Divider style={styles.divider} />
	</View>
)

Balance.propTypes = {

}

export default Balance;
