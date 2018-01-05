import React, { Component } from 'react';
import { View, StatusBar, Dimensions, Image } from 'react-native';
import PropTypes from 'prop-types';
import Spinner from 'react-native-loading-spinner-overlay';

import { Container } from '../components/Container';
import { Balance } from '../components/Balance';
import { HeaderTop } from '../components/HeaderTop';
import { CardItem } from '../components/CardItem';
import { LastConverted } from '../components/TextItem';
import { TransactionBox } from '../components/TransactionBox';
import { TransferButton, PersonalButton } from '../components/ButtonItem';

// API fetch
import {
 fetchBalance,
 fetchBtcRate,
 fetchTickerRate,
 fetchSent,
 fetchReceived
} from '../data/fetchData';

// REDUX
import { connect } from 'react-redux';

const remote = 'https://i.imgur.com/6q7wytm.jpg';

const TEMP_ADDRESS = '2N5wGeBMZZeAVozrK8aPRFNCzFBMxjsfc5p';

class Hub extends Component {
 constructor(props) {
  super(props);
  this.state = {
   loaded: false
  };
  // get balance
  fetchBalance(TEMP_ADDRESS).then(data => this.props.addBalance(data));
  // get btc rate
  fetchBtcRate().then(data => this.props.addBtcRate(data));
  // get sent trans
  fetchSent(TEMP_ADDRESS).then(data => this.props.addSentTransactions(data));
  // get received trans
  fetchReceived(TEMP_ADDRESS).then(data => this.props.addRecTransactions(data));
 }

 componentDidMount() {
  // get ticker rate %
  fetchTickerRate(this.props.baseCurrency).then(data =>
   this.props.addTickers(data)
  );
  // get last 5 trans
  setTimeout(() => {
   this.setState({ loaded: true });
  }, 3000);
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
    {this.state.loaded === true ? <HeaderTop onPress={this.pressMenu} /> : null}
    {this.state.loaded === true ? (
     <Container>
      <StatusBar translucent={false} barStyle="light-content" />
      <Balance balanceAmount={+this.props.balance} />
      <LastConverted
       baseCurrency={this.props.baseCurrency}
       quoteCurrency={this.props.quoteCurrency}
       conversionRate={this.props.conversionRate}
       currentDate={this.props.date}
      />
      <CardItem
       twentyFourPerc={this.props.rate24}
       sevenPerc={this.props.rate7}
      />
      <TransferButton />
      <PersonalButton />
      <TransactionBox list={this.props.lastTrans} />
     </Container>
    ) : (
     <View
      style={{
       flex: 1
      }}
     >
      <Image
       style={{
        flex: 1,
        resizeMode: 'cover',
        width: undefined,
        height: undefined,
        backgroundColor: '#889DAD'
       }}
       source={{ uri: remote }}
      />

      <Spinner
       visible={true}
       animation="slide"
       size="large"
       textStyle={{ color: 'white' }}
      />
     </View>
    )}
   </Container>
  );
 }
}

const mapStateToProps = state => {
 return {
  loaded: state.hubReducers.loaded,
  baseCurrency: state.hubReducers.baseCurrency,
  quoteCurrency: state.hubReducers.quoteCurrency,
  balance: state.hubReducers.balance,
  conversionRate: state.hubReducers.conversionRate,
  date: state.hubReducers.date,
  rate24: state.hubReducers.rate24,
  rate7: state.hubReducers.rate7,
  lastTrans: state.hubReducers.lastTrans
 };
};

const mapDispatchToProps = dispatch => ({
 addTickers: data =>
  dispatch({
   type: 'ADD_TICKERS',
   data
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
 addSentTransactions: sentData =>
  dispatch({
   type: 'ADD_SENT_TRANS',
   sentData
  }),
 addRecTransactions: recData =>
  dispatch({
   type: 'ADD_REC_TRANS',
   recData
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Hub);
