import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Divider, Text } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import { images } from '../CardItem/icons/CoinIcons';

import styles from './styles';

// TODO: Login for icon

const BalanceBelow = ({
 balanceAmount,
 iconUrl,
 ltcIcon,
 dogeIcon,
 currency,
 overview,
 show = true
}) => (
 <View style={styles.balanceBelowContainer}>
  {show ? <Text style={styles.balanceTextTitle}>Your Balance</Text> : null}
  {overview ? (
   <Text h3 style={styles.balanceTextAmount}>
    {currency !== 'DOGE'
     ? balanceAmount.toFixed(7) + ' ŁT'
     : balanceAmount.toFixed(2) + ' ÐT'}
   </Text>
  ) : (
   <Text h3 style={styles.balanceTextAmount}>
    {balanceAmount.toFixed(7)}
    <Animatable.Image
     animation="rotate"
     iterationCount="infinite"
     easing="linear"
     duration={2000}
     style={styles.imageLtc}
     source={{ uri: images.LTC }}
     resizeMode="contain"
    />
   </Text>
  )}

  <Divider style={styles.divider} />
 </View>
);

BalanceBelow.propTypes = {
 balanceAmount: PropTypes.number,
 iconUrl: PropTypes.object,
 ltcIcon: PropTypes.any,
 dogeIcon: PropTypes.any,
 currency: PropTypes.string,
 show: PropTypes.bool,
 overview: PropTypes.bool
};

export default BalanceBelow;

// + ' ÐT'
// + ' ŁT'
