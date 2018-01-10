import React, { Component } from 'react';
import { View, StatusBar, Dimensions, Image } from 'react-native';
import PropTypes from 'prop-types';
import Spinner from 'react-native-loading-spinner-overlay';
import { NavigationActions } from 'react-navigation';

import { Container } from '../components/Container';
import { Balance, BalanceBelow } from '../components/Balance';
import { HeaderTop } from '../components/HeaderTop';
import { CardItem } from '../components/CardItem';
import { LastConverted, TotalCurrent } from '../components/TextItem';
import { TransactionBox } from '../components/TransactionBox';
import { TransferButton, PersonalButton } from '../components/ButtonItem';

import { images } from '../components/CardItem/icons/CoinIcons';
const TEMP_LTC_ICON = { uri: images.LTC };
const TEMP_DOGE_ICON = { uri: images.DOGE };

// API fetch
import {
 fetchBalance,
 fetchRate,
 fetchTickerRate,
 fetchSent,
 fetchReceived,
 fetchDogeToBtc,
 fetchBtcToUsd
} from '../data/fetchData';

// REDUX
import { connect } from 'react-redux';

// Navigation Helper
const resetAction = NavigationActions.reset({
 index: 0,
 actions: [NavigationActions.navigate({ routeName: 'Home' })]
});

class Hub extends Component {
 constructor(props) {
  super(props);
 }

 componentWillMount() {
  this.props.resetTrans();
  this.props.resetTicker();
 }

 componentWillUnmount() {
  this.props.resetLoaded();
 }

 componentDidMount() {
  // get ticker rate %
  fetchTickerRate(this.props.navigation.state.params.coin.currency_name).then(
   data => this.props.addTickers(data)
  );
  // set base baseCurrency
  this.props.setBaseCurrency(this.props.navigation.state.params.coin.currency);
  // get balance
  fetchBalance(
   this.props.navigation.state.params.coin.ADDRESS,
   this.props.navigation.state.params.coin.API_KEY_TESTNET
  ).then(data => this.props.addBalance(data));
  // get btc rate
  fetchRate(this.props.navigation.state.params.coin.API_KEY).then(data =>
   this.props.addRate(data)
  );
  // get sent trans
  fetchSent(
   this.props.navigation.state.params.coin.ADDRESS,
   this.props.navigation.state.params.coin.API_KEY_TESTNET
  ).then(data => this.props.addSentTransactions(data));
  // get received trans
  fetchReceived(
   this.props.navigation.state.params.coin.ADDRESS,
   this.props.navigation.state.params.coin.API_KEY_TESTNET
  ).then(data => this.props.addRecTransactions(data));
  // get Doge to Btc
  fetchDogeToBtc().then(data => this.props.addDogeToBtc(data));
  // get Btc to USD
  fetchBtcToUsd().then(data => this.props.addBtcToUsd(data));
  setTimeout(() => {
   // set hub loaded
   this.props.setHubLoaded(true);
  }, 1000);
 }

 static propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func
 };

 pressMenu = () => {
  this.props.navigation.navigate('MenuList', {
   coin: this.props.navigation.state.params.coin
  });
 };

 pressHome = () => {
  this.props.navigation.dispatch(resetAction);
 };

 pressPersonal = () => {
  this.props.navigation.navigate('Personal', {
   coin: this.props.navigation.state.params.coin,
   wallet: this.props.navigation.state.params.coin.ADDRESS
  });
 };

 // RENDER ===================

 render() {
  return (
   <Container>
    {this.props.hubLoaded === true ? (
     <HeaderTop onPressMenu={this.pressMenu} onPressHome={this.pressHome} />
    ) : null}
    {this.props.hubLoaded === true ? (
     <Container>
      <StatusBar translucent={false} barStyle="light-content" />
      {this.props.navigation.state.params.coin.currency === 'BTC' ? (
       <Balance balanceAmount={+this.props.balance} />
      ) : (
       <BalanceBelow
        balanceAmount={+this.props.balance}
        ltcIcon={TEMP_LTC_ICON}
        dogeIcon={TEMP_DOGE_ICON}
        currency={this.props.navigation.state.params.coin.currency}
       />
      )}
      <LastConverted
       baseCurrency={this.props.baseCurrency}
       quoteCurrency={this.props.quoteCurrency}
       conversionRate={this.props.conversionRate}
       currentDate={this.props.date}
      />
      <TotalCurrent
       baseCurrency={this.props.baseCurrency}
       balanceAmount={+this.props.balance}
       quoteCurrency={this.props.quoteCurrency}
       conversionRate={this.props.conversionRate}
       dogeToBtc={this.props.dogeToBtc}
       btcToUsd={this.props.btcToUsd}
      />
      <CardItem
       twentyFourPerc={this.props.rate24}
       sevenPerc={this.props.rate7}
      />
      <TransferButton />
      <PersonalButton onPress={this.pressPersonal} />
      <TransactionBox list={this.props.lastTrans} />
     </Container>
    ) : (
     <View
      style={{
       flex: 1
      }}
     >
      <Spinner visible={true} animation="slide" size="large" />
     </View>
    )}
   </Container>
  );
 }
}

const mapStateToProps = state => {
 return {
  hubLoaded: state.hubReducers.hubLoaded,
  baseCurrency: state.hubReducers.baseCurrency,
  quoteCurrency: state.hubReducers.quoteCurrency,
  balance: state.hubReducers.balance,
  conversionRate: state.hubReducers.conversionRate,
  date: state.hubReducers.date,
  rate24: state.hubReducers.rate24,
  rate7: state.hubReducers.rate7,
  lastTrans: state.hubReducers.lastTrans,
  dogeToBtc: state.hubReducers.dogeToBtc,
  btcToUsd: state.hubReducers.btcToUsd
 };
};

const mapDispatchToProps = dispatch => ({
 resetLoaded: () =>
  dispatch({
   type: 'RESET_HUB_LOAD'
  }),
 setHubLoaded: bool =>
  dispatch({
   type: 'HUB_LOADED',
   bool
  }),
 resetTicker: () =>
  dispatch({
   type: 'RESET_TICK'
  }),
 resetTrans: () =>
  dispatch({
   type: 'RESET_TRANS'
  }),
 setLoaded: bool =>
  dispatch({
   type: 'LOADED',
   bool
  }),
 setBaseCurrency: currency =>
  dispatch({
   type: 'SET_BASE',
   currency
  }),
 addTickers: data =>
  dispatch({
   type: 'ADD_TICKERS',
   data
  }),
 addRate: conversionRate =>
  dispatch({
   type: 'ADD_RATE',
   conversionRate
  }),
 addBalance: balance =>
  dispatch({
   type: 'ADD_BALANCE',
   balance
  }),
 addSentTransactions: sentData =>
  dispatch({
   type: 'ADD_SENT_TRANS',
   sentData
  }),
 addRecTransactions: recData =>
  dispatch({
   type: 'ADD_REC_TRANS',
   recData
  }),
 addDogeToBtc: data =>
  dispatch({
   type: 'DOGE_TO_BTC',
   data
  }),
 addBtcToUsd: data =>
  dispatch({
   type: 'BTC_TO_USD',
   data
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Hub);
