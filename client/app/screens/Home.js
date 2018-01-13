import React, { Component } from 'react';
import {
 View,
 StatusBar,
 Dimensions,
 Image,
 Text,
 TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import Spinner from 'react-native-loading-spinner-overlay';

import { Container } from '../components/Container';
import { Balance, BalanceBelow, BalanceDoge } from '../components/Balance';
import { HomeGraph } from '../components/Graphs';
import { HeaderTitle } from '../components/TextItem';
import { images } from '../components/CardItem/icons/CoinIcons';

// API/data fetch
import { fetchBalance } from '../data/fetchData';
import { fetch24h } from '../data/graphData';
import { BTC, LTC, DOGE } from '../data/userData';

// REDUX
import { connect } from 'react-redux';

const TEMP_BTC_ICON = { uri: images.BTC };
const TEMP_LTC_ICON = { uri: images.LTC };
const TEMP_DOGE_ICON = { uri: images.DOGE };

class Home extends Component {
 constructor(props) {
  super(props);
 }

 componentDidMount() {
  // get balances
  fetchBalance(BTC.ADDRESS, BTC.API_KEY_TESTNET).then(data =>
   this.props.getBTCBal(data)
  );
  fetchBalance(LTC.ADDRESS, LTC.API_KEY_TESTNET).then(data =>
   this.props.getLTCBal(data)
  );
  fetchBalance(DOGE.ADDRESS, DOGE.API_KEY_TESTNET).then(data =>
   this.props.getDOGEBal(data)
  );

  // get chart data - 24h
  fetch24h().then(data => this.props.add24h(data));
  setTimeout(() => {
   // set loaded
   this.props.setLoaded(true);
  }, 3000);
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
  console.log(this.props.price24h);
  return (
   <Container>
    {this.props.loaded === true ? (
     <Container>
      <StatusBar translucent={false} barStyle="light-content" />
      <HeaderTitle
       style={{ backgroundColor: '#2b2b2b' }}
       titleName={'Balances'}
      />

      <TouchableOpacity
       onPress={this.onPressBtc}
       style={{
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: '#2b2b2b',
        paddingVertical: 15,
        paddingHorizontal: 15
       }}
      >
       <View style={{ width: 290, marginRight: 20 }}>
        <Balance balanceAmount={+this.props.btcBal} overview={true} />
        <HomeGraph
         data={this.props.price24h.BTC}
         svgStyle={{
          fill: 'rgba(221, 181, 0, 0.2)',
          stroke: 'rgb(221, 181, 0)'
         }}
        />
       </View>
       <Icon
        name="ios-arrow-forward"
        type="ionicon"
        color="#cccccc"
        size={39}
        style={{ marginTop: 50 }}
       />
      </TouchableOpacity>

      <TouchableOpacity
       onPress={this.onPressLtc}
       style={{
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: '#2b2b2b',
        paddingVertical: 15,
        paddingHorizontal: 15
       }}
      >
       <View style={{ width: 290, marginRight: 20 }}>
        <BalanceBelow
         balanceAmount={+this.props.ltcBal}
         iconUrl={TEMP_LTC_ICON}
         overview={true}
         show={false}
        />
        <HomeGraph
         data={this.props.price24h.LTC}
         svgStyle={{
          fill: 'rgba(221, 181, 0, 0.2)',
          stroke: 'rgb(221, 181, 0)'
         }}
        />
       </View>
       <Icon
        name="ios-arrow-forward"
        type="ionicon"
        color="#cccccc"
        size={39}
        style={{ marginTop: 10 }}
       />
      </TouchableOpacity>

      <TouchableOpacity
       onPress={this.onPressDoge}
       style={{
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: '#2b2b2b',
        paddingVertical: 15,
        paddingHorizontal: 15
       }}
      >
       <View style={{ width: 290, marginRight: 20 }}>
        <BalanceBelow
         balanceAmount={+this.props.dogeBal}
         iconUrl={TEMP_DOGE_ICON}
         overview={true}
         currency={'DOGE'}
         show={false}
        />
        <HomeGraph
         data={this.props.price24h.DOGE}
         svgStyle={{
          fill: 'rgba(221, 181, 0, 0.2)',
          stroke: 'rgb(221, 181, 0)'
         }}
        />
       </View>
       <Icon
        name="ios-arrow-forward"
        type="ionicon"
        color="#cccccc"
        size={39}
        style={{ marginTop: 10 }}
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
  dogeBal: state.homeBalReducers.dogeBal,
  price24h: state.homeBalReducers.price24h
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
  }),
 add24h: data =>
  dispatch({
   type: 'ADD_24H',
   data
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// red
// fill: 'rgba(168, 30, 30, 0.2)',
// stroke: 'rgb(168, 30, 30)'

// green
// fill: 'rgba(68, 206, 53, 0.2)',
// stroke: 'rgb(68, 206, 53)'

// blue
// fill: 'rgba(0, 110, 255, 0.2)',
// stroke: 'rgb(0, 110, 255)'

// orange
// fill: 'rgba(234, 93, 0, 0.2)',
// stroke: 'rgb(234, 93, 0)'
