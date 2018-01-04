import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
 View,
 Text,
 Keyboard,
 Platform,
 StyleSheet,
 Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import styles from './styles';

class Logo extends Component {
 static propTypes = {};

 render() {
  return (
   <View style={styles.container}>
    <View style={styles.containerImage}>
     {/* <Animatable.Image
      animation="bounceInLeft"
      easing="ease"
      duration={2000}
      delay={500}
      iterationCount={1}
      resizeMode="contain"
      style={[StyleSheet.absoluteFill, styles.containerImage]}
      source={require('./img/background.png')}
     /> */}
     <Animatable.Image
      animation="bounceInDown"
      easing="ease"
      duration={2000}
      delay={500}
      iterationCount={1}
      resizeMode="contain"
      style={styles.logo}
      source={require('./img/coin.png')}
     />
    </View>
   </View>
  );
 }
}

export default Logo;
