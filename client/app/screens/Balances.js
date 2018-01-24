import React, { Component } from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux';
import { Container } from '../components/Container';
import { HeaderTop } from '../components/HeaderTop';

const styles = EStyleSheet.create({});

class Balances extends Component {
  state = {}
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    tabBarLabel: 'Balances',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='account-balance'
        size={26}
        color={tintColor} />
    ),
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Text>Balances</Text>
        </View>
      </Container>
    )
  }
}


const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Balances);