import React, { Component } from 'react';
import { FlatList, View, StatusBar, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { Text } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Container } from '../components/Container';
import { HeaderTop } from '../components/HeaderTop';
import { ExchangeBox } from '../components/ExchangeBox';
import { HeaderTitle } from '../components/TextItem';

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
  state = {
    data: []
  }

  constructor(props) {
    super(props);

    fetch('http://wijuwiju.local:3006/markets/hour')
    .then(response => response.json())
    .then(data => this.setState({
        data: Object.keys(data).map(coin => {
          return {
            coin,
            time: '1h',
            timeText: '1 Hour',
            // ticker: ,
            data: data[coin].values,
          }
        })
      })
    );
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

  renderExchangeBox ({item}) {
    return (
      <ExchangeBox
        coin={item.coin}
        time={item.time}
        timeText={item.timeText}
        ticker={item.ticker}
        data={item.data}
      />
    )
  }

  render() {

    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <HeaderTop onPressMenu={this.pressMenu} onPressHome={this.pressHome} />
        <View
          style={{
            marginTop: 100,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          >
          <HeaderTitle
            style={{ backgroundColor: '#2b2b2b' }}
            titleName={"little FUCKER"}
          />

          <FlatList
            data={this.state.data}
            renderItem={this.renderExchangeBox}
            keyExtractor={(item) => item.coin}
          />
        </View>
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
