import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from '../components/Container';
import { HeaderTop } from '../components/HeaderTop';

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
  this.props.navigation.navigate('MenuList');
 };

 // RENDER ========================

 render() {
  console.log(this.props.exchange);
  return (
   <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <HeaderTop onPress={this.pressMenu} />
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
