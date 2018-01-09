import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from '../components/Container';
import { HeaderTop } from '../components/HeaderTop';
import { ExchangeItem } from '../components/ListItem';

import { fetchExchange } from '../data/fetchData';

// REDUX
import { connect } from 'react-redux';

const TEMP_ADDRESS = '2N5wGeBMZZeAVozrK8aPRFNCzFBMxjsfc5p';

class Transactions extends Component {
 constructor(props) {
  super(props);
  fetchExchange().then(data => this.props.addExchange(data));
 }

 static propTypes = {
  onPress: PropTypes.func
 };

 pressMenu = () => {
  this.props.navigation.navigate('MenuList', {
   coin: this.props.navigation.state.params.coin
  });
 };

 pressHome = () => {
  this.props.navigation.navigate('Home');
 };

 // RENDER ========================

 render() {
  console.log('EXCHANGE=======', this.props.exchange);
  return (
   <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <HeaderTop onPressMenu={this.pressMenu} onPressHome={this.pressHome} />
    <FlatList
     style={{ marginTop: 80 }}
     data={this.props.exchange}
     keyExtractor={(item, i) => i}
     renderItem={({ item }) => (
      <ExchangeItem price={item.price} priceBase={item.price_base} />
     )}
    />
   </Container>
  );
 }
}

const mapStateToProps = state => {
 return {
  exchange: state.exchangeReducers.exchange
 };
};

const mapDispatchToProps = dispatch => ({
 addExchange: data =>
  dispatch({
   type: 'ADD_EXCH',
   data
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
