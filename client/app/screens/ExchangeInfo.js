import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { Text } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Container } from '../components/Container';
import { HeaderTop } from '../components/HeaderTop';
import { ExchangeBox } from '../components/ExchangeBox';

import { fetchTickerRate } from '../data/fetchData';
import { fetch1h, fetch24h, fetch7d, fetch1m } from '../data/graphData';

import WS from 'react-native-websocket';

// REDUX
import { connect } from 'react-redux';

// Navigation Helper
const resetAction = NavigationActions.reset({
 index: 0,
 actions: [NavigationActions.navigate({ routeName: 'Home' })]
});

const styles = EStyleSheet.create({
 exchContainer: {
  flexDirection: 'row'
 }
});

class ExchangeInfo extends Component {
 constructor(props) {
  super(props);
 }

 static propTypes = {
  onPressMenu: PropTypes.func,
  onPress: PropTypes.func
 };

 componentDidMount() {
  // Tickers
  // fetchTickerRate('Bitcoin').then(data => this.props.addTickers(data));
  // 1h
  // fetch1h().then(data => this.props.add1h(data['BTC']));
  // 24h
  // fetch24h().then(data => this.props.add24h(data['BTC']));
  // // 7d
  // fetch7d().then(data => this.props.add7d(data['BTC']));
  // // 1m
  // fetch1m().then(data => this.props.add1m(data['BTC']));
 }

 pressMenu = () => {
  this.props.navigation.navigate('MenuList', {
   coin: this.props.navigation.state.params.coin
  });
 };

 pressHome = () => {
  this.props.navigation.dispatch(resetAction);
 };

 // RENDER ========================

 render() {
  // console.log('24h ticker================', this.props.ticker24h);
  return (
   <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <HeaderTop onPressMenu={this.pressMenu} onPressHome={this.pressHome} />
    <View style={styles.exchContainer} />
    <ExchangeBox
     coin={null}
     // 1h
     time1h={'1h'}
     timeText1h={'1 Hour'}
     ticker1h={this.props.ticker1h}
     data1h={this.props.data1h}
     // 24h
     time24h={'24h'}
     timeText24h={'24 Hours'}
     ticker24h={this.props.ticker24h}
     data24h={this.props.data24h}
     // 7d
     time7d={'7d'}
     timeText7d={'7 Days'}
     ticker7d={this.props.ticker7d}
     data7d={this.props.data7d}
     // 1m
     time1m={'1m'}
     timeText1m={'1 Month'}
     ticker1m={this.props.ticker1m}
     data1m={this.props.data1m}
    />
   </Container>
  );
 }
}

const mapStateToProps = state => {
 return {
  data1h: state.exchangeReducers.data1h,
  ticker1h: state.exchangeReducers.ticker1h,
  data24h: state.exchangeReducers.data24h,
  ticker24h: state.exchangeReducers.ticker24h,
  data7d: state.exchangeReducers.data7d,
  ticker7d: state.exchangeReducers.ticker7d,
  data1m: state.exchangeReducers.data1m,
  ticker1m: state.exchangeReducers.ticker1m
 };
};

const mapDispatchToProps = dispatch => ({
 addTickers: data =>
  dispatch({
   type: 'TICKER',
   data
  }),
 add1h: data =>
  dispatch({
   type: 'DATA_1H',
   data
  }),
 add24h: data =>
  dispatch({
   type: 'DATA_24H',
   data
  }),
 add7d: data =>
  dispatch({
   type: 'DATA_7D',
   data
  }),
 add1m: data =>
  dispatch({
   type: 'DATA_1M',
   data
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeInfo);
