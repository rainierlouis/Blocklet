import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import styles from './styles';

const TransactionItem = ({
 amount,
 sender,
 confidence,
 confirmations,
 sentOrRec,
 onPress
}) => (
 <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
  <View style={styles.transactionContainer}>
   {sentOrRec === 'received' ? (
    <Icon name="plus" style={styles.iconPlus} />
   ) : (
    <Icon name="minus" style={styles.iconMinus} />
   )}

   <View style={styles.upper}>
    <Text h4 style={styles.amount}>
     {amount} ฿T
    </Text>
    <Text style={styles.sender}>{sender}</Text>
   </View>
  </View>
 </TouchableHighlight>
);

TransactionItem.propTypes = {
 amount: PropTypes.string,
 sender: PropTypes.string,
 confidence: PropTypes.number,
 confirmations: PropTypes.number,
 time: PropTypes.number,
 sentOrRec: PropTypes.string,
 onPress: PropTypes.func
};

export default TransactionItem;
