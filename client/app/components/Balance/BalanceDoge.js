import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Divider, Text } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import { images } from '../CardItem/icons/CoinIcons';

import styles from './styles';

const Balance = ({ balanceAmount, overview }) => (
 <View style={styles.container}>
  <View style={styles.balanceBelowContainer}>
   {overview ? (
    <Text h3 style={styles.balanceTextAmount}>
     {balanceAmount.toFixed(2) + ' ÐT'}
    </Text>
   ) : (
    <Text h3 style={styles.balanceTextAmount}>
     {balanceAmount.toFixed(2)}
     <Animatable.Image
      animation="rotate"
      iterationCount="infinite"
      easing="linear"
      duration={2000}
      style={styles.image}
      source={{ uri: images.DOGE }}
      resizeMode="contain"
     />
    </Text>
   )}
  </View>
  <Divider style={styles.divider} />
 </View>
);

Balance.propTypes = {
 balanceAmount: PropTypes.number,
 show: PropTypes.bool,
 overview: PropTypes.bool
};

export default Balance;
