import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';

import styles from './styles';

const LoginTitle = () => (
 <View style={styles.container}>
  <Text h1 style={styles.loginTitle}>
   Bitlet
  </Text>
 </View>
);

LoginTitle.propTypes = {};

export default LoginTitle;

//  <View style={styles.container}>
//   <Animatable.Text
//    animation="bounceInLeft"
//    easing="ease"
//    duration={2000}
//    delay={500}
//    iterationCount={1}
//    style={styles.loginTitle}
//   >
//    Bitlet
//   </Animatable.Text>
//  </View>
// );
