import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

const HeaderSubTitle = ({ titleName }) => (
 <View
  style={{
   backgroundColor: '#303030',
   width: 355,
   height: 50,
   alignItems: 'center',
   justifyContent: 'center'
  }}
 >
  <Text
   style={{
    fontFamily: 'latos',
    color: '#cccccc',
    alignSelf: 'center',

    fontSize: 20
   }}
  >
   {titleName}
  </Text>
 </View>
);

HeaderSubTitle.propTypes = {
 onPress: PropTypes.func,
 titleName: PropTypes.string
};

export default HeaderSubTitle;
