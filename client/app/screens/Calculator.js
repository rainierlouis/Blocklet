import React, { Component } from 'react';
import { FlatList, View, StatusBar, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { Text, Icon } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Container } from '../components/Container';
import { HeaderTop } from '../components/HeaderTop';
import { HeaderTitle } from '../components/TextItem';
import { AmountField, CalcField } from '../components/FormField';

import { fetchRate } from '../data/fetchData';

// REDUX
import { connect } from 'react-redux';

// Navigation Helper
const resetAction = NavigationActions.reset({
 index: 0,
 actions: [NavigationActions.navigate({ routeName: 'Home' })]
});

const styles = EStyleSheet.create({});

class Calculator extends Component {
 constructor(props) {
  super(props);
 }

 static propTypes = {};

 componentWillMount() {
  // fetchRate(this.props.navigation.state.params.coin.API_KEY).then(data =>
  //  this.props.addConv(data.prices[0].price)
  // );
  this.props.addConv(0.045678)
  // setInterval(
  //  () =>
  //   this.props.calcConv(
  //    Number(this.props.amount) * Number(this.props.convRate)
  //   ),
  //  1000
  // );
 }

 pressMenu = () => {
  this.props.navigation.navigate('MenuList', {
   coin: this.props.navigation.state.params.coin
  });
 };

 pressHome = () => {
  this.props.navigation.dispatch(resetAction);
 };

 headerT = () => {
  `Calculator - ${this.props.navigation.state.params.coin.currency_name}`;
  }

  static navigationOptions = {
    tabBarLabel: 'Calculator',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='calculator'
        type='entypo'
        size={26}
        color={tintColor} />
    ),
  }

 // RENDER ========================

 render() {
  return (
   <Container>
    <CalcField iconName="usd" onPress={e => this.props.addAmount(e)} />
    <CalcField
     iconName="calculator"
     bottomField={true}
     editableContent={false}
     updateRate={this.props.conversion.toString()}
    />
    <View style={{ marginBottom: 340 }} />
   </Container>
  );
 }
}

const mapStateToProps = state => {
 return {
  convRate: state.calcReducers.convRate,
  amount: state.calcReducers.amount,
  conversion: state.calcReducers.conversion
 };
};

const mapDispatchToProps = dispatch => ({
 addConv: data =>
  dispatch({
   type: 'CONV_RATE',
   data
  }),
 addAmount: data =>
  dispatch({
   type: 'AMOUNT',
   data
  }),
 calcConv: data =>
  dispatch({
   type: 'CONVERTED',
   data
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
