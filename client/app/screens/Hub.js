import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from '../components/Container';
import { Balance } from '../components/Balance';
import { HeaderTop } from '../components/HeaderTop';
import { CardItem } from '../components/CardItem';
import { LastConverted } from '../components/TextItem';
import { TransactionBox } from '../components/TransactionBox';
import { TransferButton, PersonalButton } from '../components/ButtonItem';

// API fetch
import { fetchBalance, fetchBtcRate, fetchTickerRate } from '../data/fetchData';

// REDUX
import { connect } from 'react-redux';

TEMP_ADDRESS = '2N5wGeBMZZeAVozrK8aPRFNCzFBMxjsfc5p';

const TEMP_LIST = [
 {
  title: '+0.002 ฿T',
  subtitle: 'confirmations: 11',
  icon: 'keyboard-arrow-right',
  style: { color: '#5ec16a' }
 },
 {
  title: '-0.00041 ฿T',
  subtitle: 'confirmations: 82',
  icon: 'keyboard-arrow-left',
  style: { color: '#bf3b3b' }
 },
 {
  title: '-0.0031 ฿T',
  subtitle: 'confirmations: 99',
  icon: 'keyboard-arrow-left',
  style: { color: '#bf3b3b' }
 },
 {
  title: '+0.00019 ฿T',
  subtitle: 'confirmations: 194',
  icon: 'keyboard-arrow-right',
  style: { color: '#5ec16a' }
 },
 {
  title: '+0.002 ฿T',
  subtitle: 'confirmations: 194',
  icon: 'keyboard-arrow-right',
  style: { color: '#5ec16a' }
 }
];

class Hub extends Component {
 constructor(props) {
  super(props);
  fetchBalance(TEMP_ADDRESS).then(data => this.props.addBalance(data));
  fetchBtcRate().then(data => this.props.addBtcRate(data));
 }

 componentDidMount() {
  fetchTickerRate(this.props.baseCurrency).then(data =>
   this.props.addTickers(data)
  );
 }

 static propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func
 };

 pressMenu = () => {
  this.props.navigation.navigate('MenuList');
 };

 // RENDER ===================

 render() {
  return (
   <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <HeaderTop onPress={this.pressMenu} />
    <Balance balanceAmount={+this.props.balance} />
    <LastConverted
     baseCurrency={this.props.baseCurrency}
     quoteCurrency={this.props.quoteCurrency}
     conversionRate={this.props.conversionRate}
     currentDate={this.props.date}
    />
    <CardItem twentyFourPerc={this.props.rate24} sevenPerc={this.props.rate7} />
    <TransferButton />
    <PersonalButton />
    <TransactionBox list={TEMP_LIST} />
   </Container>
  );
 }
}

const mapStateToProps = state => {
 return {
  baseCurrency: state.reducer.baseCurrency,
  quoteCurrency: state.reducer.quoteCurrency,
  balance: state.reducer.balance,
  conversionRate: state.reducer.conversionRate,
  date: state.reducer.date,
  rate24: state.reducer.rate24,
  rate7: state.reducer.rate7
 };
};

const mapDispatchToProps = dispatch => ({
 addTickers: tickerData =>
  dispatch({
   type: 'ADD_TICKERS',
   tickerData
  }),
 addBtcRate: conversionRate =>
  dispatch({
   type: 'ADD_BTC_RATE',
   conversionRate
  }),
 addBalance: balance =>
  dispatch({
   type: 'ADD_BALANCE',
   balance
  }),
 getInitial: () =>
  dispatch({
   type: 'GET_INITIAL'
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Hub);
