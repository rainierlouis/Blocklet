import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import styles from './styles';

const ExchangeItem = ({ price, priceBase, onPress }) => (
 <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
  <View style={styles.transactionContainer}>
   <Icon name="usd" />
   <View style={styles.upper}>
    <Text h4 style={styles.amount}>
     {price} ฿T
    </Text>
    <Text style={styles.sender}>{priceBase}</Text>
   </View>
  </View>
 </TouchableHighlight>
);

ExchangeItem.propTypes = {
 amount: PropTypes.string,
 sender: PropTypes.string,
 confidence: PropTypes.number,
 confirmations: PropTypes.number,
 time: PropTypes.number,
 sentOrRec: PropTypes.string,
 onPress: PropTypes.func
};

export default ExchangeItem;
