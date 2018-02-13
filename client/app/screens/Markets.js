import React, { Component } from 'react';
import { View, TextFlatList, StatusBar, ScrollView, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux';
import { ExchangeBox } from '../components/ExchangeBox';
import { Container } from '../components/Container';
import { HeaderTop } from '../components/HeaderTop';

import { fetchTickerRate } from '../data/fetchData';
import { fetch1h, fetch24h, fetch7d, fetch1m } from '../data/graphData';
import WS from 'react-native-websocket';


const styles = EStyleSheet.create({
  exchContainer: {
    flexDirection: 'row'
  }
});

class Markets extends Component {
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

  static navigationOptions = {
    tabBarLabel: 'Markets',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='line-graph'
        type='entypo'
        size={24}
        color={tintColor} />
    ),
  }

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
        <View style={styles.container}>
          <FlatList
            data={this.state.data}
            renderItem={this.renderExchangeBox}
            keyExtractor={(item) => item.coin}
          />
        </View>
      </Container>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Markets);
