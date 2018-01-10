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
 show = true
}) => (
 <View style={styles.balanceBelowContainer}>
  {show ? <Text style={styles.balanceTextTitle}>Your Balance</Text> : null}
  <Text h3 style={styles.balanceTextAmount}>
   {currency === 'DOGE' ? balanceAmount.toFixed(2) : balanceAmount.toFixed(7)}
   {iconUrl ? (
    <Animatable.Image
     animation="rotate"
     iterationCount="infinite"
     duration={2000}
     easing="linear"
     style={styles.image}
     source={iconUrl}
     resizeMode="contain"
    />
   ) : null}
   {ltcIcon ? (
    <Animatable.Image
     animation="rotate"
     iterationCount="infinite"
     duration={2000}
     easing="linear"
     style={styles.image}
     source={ltcIcon}
     resizeMode="contain"
    />
   ) : (
    <Animatable.Image
     animation="rotate"
     iterationCount="infinite"
     duration={2000}
     easing="linear"
     style={styles.image}
     source={dogeIcon}
     resizeMode="contain"
    />
   )}
  </Text>
  <Divider style={styles.divider} />
 </View>
);

BalanceBelow.propTypes = {
 balanceAmount: PropTypes.number,
 iconUrl: PropTypes.object,
 ltcIcon: PropTypes.any,
 dogeIcon: PropTypes.any,
 currency: PropTypes.string,
 show: PropTypes.bool
};

export default BalanceBelow;

// + ' ÐT'
// + ' ŁT'
