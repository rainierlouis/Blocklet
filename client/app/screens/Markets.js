import React, { Component } from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Icon } from 'react-native-elements'
import { HeaderTop } from '../components/HeaderTop';

const styles = EStyleSheet.create({});

class Markets extends Component {
  state = {}
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    tabBarLabel: 'Markets',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='line-graph'
        type='entypo'
        size={26}
        color={tintColor} />
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Markets</Text>
      </View>
    )
  }
}

export default (Markets);