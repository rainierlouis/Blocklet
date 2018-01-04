import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';

import styles from './styles';

const LastConverted = ({
 baseCurrency,
 quoteCurrency,
 conversionRate,
 currentDate
}) => (
 <Text style={styles.text}>
  1 {baseCurrency} - {conversionRate.toFixed(2)} {quoteCurrency} as of{' '}
  {moment(currentDate).format('MMMM D, YYYY')}
 </Text>
);

LastConverted.propTypes = {
 currentDate: PropTypes.object,
 baseCurrency: PropTypes.string,
 quoteCurrency: PropTypes.string,
 conversionRate: PropTypes.number
};

export default LastConverted;
