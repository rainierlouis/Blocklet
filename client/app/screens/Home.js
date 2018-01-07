import React, { Component } from 'react';
import {
 View,
 StatusBar,
 Dimensions,
 Image,
 Text,
 TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import Spinner from 'react-native-loading-spinner-overlay';

import { Container } from '../components/Container';
import { Balance, BalanceBelow } from '../components/Balance';
import { images } from '../components/CardItem/icons/CoinIcons';

// API fetch
import { fetchBalance } from '../data/fetchData';

// REDUX
import { connect } from 'react-redux';

const TEMP_ADDRESS = '2N5wGeBMZZeAVozrK8aPRFNCzFBMxjsfc5p';

const TEMP_BTC_ICON = { uri: images.BTC };
const TEMP_LTC_ICON = { uri: images.LTC };
const TEMP_DOGE_ICON = { uri: images.DOGE };

// btc
const BTC = {
 currency: 'BTC',
 API_KEY_TESTNET: 'f737-19e7-0636-ebbc',
 API_KEY: '98d2-7443-af3f-17e4',
 ADDRESS: '2N5wGeBMZZeAVozrK8aPRFNCzFBMxjsfc5p'
};

// ltc
const LTC = {
 currency: 'LTC',
 API_KEY_TESTNET: '2857-f4a9-d944-c5fa',
 API_KEY: '1e47-79a6-9797-e570',
 ADDRESS: '2MxtpzTF5b5UwdK7qJstD1NnZMMedi5zy2L'
};

// doge
const DOGE = {
 currency: 'DOGE',
 API_KEY_TESTNET: '119e-0781-247d-7297',
 API_KEY: 'b108-0d58-ccff-c468',
 ADDRESS: '2N8jnDQH9KqidrqQ4veTfAiSgh5dNNSgWr1'
};

class Home extends Component {
 constructor(props) {
  super(props);
  // get balance
  fetchBalance(BTC.ADDRESS, BTC.API_KEY_TESTNET).then(data =>
   this.props.getBTCBal(data)
  );
  fetchBalance(LTC.ADDRESS, LTC.API_KEY_TESTNET).then(data =>
   this.props.getLTCBal(data)
  );
  fetchBalance(DOGE.ADDRESS, DOGE.API_KEY_TESTNET).then(data =>
   this.props.getDOGEBal(data)
  );
 }

 componentDidMount() {
  setTimeout(() => {
   // set loaded
   this.props.setLoaded(true);
  }, 1000);
 }

 static propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func
 };

 onPressBtc = () => {
  this.props.navigation.navigate('Hub', { coin: BTC });
 };

 onPressLtc = () => {
  this.props.navigation.navigate('Hub', { coin: LTC });
 };

 onPressDoge = () => {
  this.props.navigation.navigate('Hub', { coin: DOGE });
 };

 // RENDER ===================

 render() {
  return (
   <Container>
    {this.props.loaded === true ? (
     <Container>
      <StatusBar translucent={false} barStyle="light-content" />
      <TouchableOpacity onPress={this.onPressBtc}>
       <Balance balanceAmount={+this.props.btcBal} />
      </TouchableOpacity>
      <TouchableOpacity onPress={this.onPressLtc}>
       <BalanceBelow balanceAmount={0.0374488} iconUrl={TEMP_LTC_ICON} />
      </TouchableOpacity>
      <TouchableOpacity onPress={this.onPressDoge}>
       <BalanceBelow
        balanceAmount={+this.props.dogeBal}
        iconUrl={TEMP_DOGE_ICON}
        currency={'DOGE'}
       />
      </TouchableOpacity>
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
  loaded: state.homeBalReducers.loaded,
  btcBal: state.homeBalReducers.btcBal,
  ltcBal: state.homeBalReducers.ltcBal,
  dogeBal: state.homeBalReducers.dogeBal
 };
};

const mapDispatchToProps = dispatch => ({
 setLoaded: bool =>
  dispatch({
   type: 'LOADED',
   bool
  }),
 getBTCBal: data =>
  dispatch({
   type: 'GET_BTC_BAL',
   data
  }),
 getLTCBal: data =>
  dispatch({
   type: 'GET_LTC_BAL',
   data
  }),
 getDOGEBal: data =>
  dispatch({
   type: 'GET_DOGE_BAL',
   data
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
