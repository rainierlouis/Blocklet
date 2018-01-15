import React from 'react';
import { View } from 'react-native';
import { List, ListItem, Icon, Text } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

const TransactionBox = ({ list }) => (
 <View style={styles.container}>
  <List containerStyle={styles.list}>
   {list.sort((a, b) => b.time - a.time).map((item, i) => {
    if (item.amounts_sent && i < 5) {
     return (
      <ListItem
       containerStyle={styles.listItem}
       key={i}
       title={`-${item.amounts_sent[0].amount}`}
       // subtitle={`confirmations: ${item.confirmations}`}
       leftIcon={{ name: 'keyboard-arrow-left', style: { color: '#bf3b3b' } }}
       hideChevron={true}
       titleStyle={styles.listTitle}
       subtitleStyle={styles.listSubtitle}
      />
     );
    } else if (item.amounts_received && i < 5) {
     return (
      <ListItem
       containerStyle={styles.listItem}
       key={i}
       title={`+${item.amounts_received[0].amount}`}
       // subtitle={`confirmations: ${item.confirmations}`}
       leftIcon={{ name: 'keyboard-arrow-right', style: { color: '#5ec16a' } }}
       hideChevron={true}
       titleStyle={styles.listTitle}
       subtitleStyle={styles.listSubtitle}
      />
     );
    }
   })}
  </List>
 </View>
);

TransactionBox.propTypes = {};

export default TransactionBox;
