import React from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';

import styles from './styles';

const log = (...args) => {
 console.log(...args);
};

const convertDogeTotal = (bal, btc, usd) => bal * btc * usd;

const TotalCurrent = ({
 baseCurrency,
 balanceAmount,
 quoteCurrency,
 conversionRate,
 dogeToBtc,
 btcToUsd
}) => (
 <View style={styles.currentContainer}>
  <Text style={styles.totalText}>
   Current:{' '}
   <Text style={styles.totalAmount}>
    {baseCurrency === 'DOGE'
     ? convertDogeTotal(balanceAmount, +dogeToBtc, +btcToUsd).toFixed(2)
     : (balanceAmount * conversionRate).toFixed(2)}{' '}
    {quoteCurrency}
   </Text>
  </Text>
 </View>
);

TotalCurrent.propTypes = {
 balanceAmount: PropTypes.number,
 dogeToBtc: PropTypes.any,
 quoteCurrency: PropTypes.string,
 baseCurrency: PropTypes.string,
 conversionRate: PropTypes.number,
 btcToUsd: PropTypes.any
};

export default TotalCurrent;
