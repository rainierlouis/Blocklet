import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

const HeaderTitle = ({ titleName }) => (
 <View style={{ backgroundColor: '#303030', width: 355 }}>
  <Text
   style={{
    fontFamily: 'latos',
    color: '#cccccc',
    alignSelf: 'center',
    paddingVertical: 20,
    fontSize: 25
   }}
  >
   {titleName}
  </Text>
 </View>
);

HeaderTitle.propTypes = {
 onPress: PropTypes.func,
 titleName: PropTypes.string
};

export default HeaderTitle;
