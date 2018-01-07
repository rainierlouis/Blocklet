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
 currency
}) => (
 <View style={styles.balanceBelowContainer}>
  <Text h3 style={styles.balanceTextAmount}>
   {currency === 'DOGE' ? balanceAmount.toFixed(2) : balanceAmount.toFixed(7)}
   {/* {iconUrl ? (
    <Animatable.Image
     animation="rotate"
     iterationCount="infinite"
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
     easing="linear"
     style={styles.image}
     source={ltcIcon}
     resizeMode="contain"
    />
				) : (
    <Animatable.Image
     animation="rotate"
     iterationCount="infinite"
     easing="linear"
     style={styles.image}
     source={dogeIcon}
     resizeMode="contain"
    />
   )} */}
  </Text>
  <Divider style={styles.divider} />
 </View>
);

BalanceBelow.propTypes = {
 balanceAmount: PropTypes.number,
 iconUrl: PropTypes.object,
 ltcIcon: PropTypes.string,
 dogeIcon: PropTypes.string,
 currency: PropTypes.string
};

export default BalanceBelow;
