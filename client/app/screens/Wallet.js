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
import { fetchBalance } from '../data/fetchData';

// REDUX
import { connect } from 'react-redux';

class Hub extends Component {
 constructor(props) {
  super(props);
  // get balance
  fetchBalance(TEMP_ADDRESS).then(data => this.props.addBalance(data));
 }

 componentDidMount() {
  // get ticker rate %
  fetchTickerRate(this.props.baseCurrency).then(data =>
   this.props.addTickers(data)
  );
  setTimeout(() => {
   // set loaded
   this.props.setLoaded(true);
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
    {this.props.loaded === true ? <HeaderTop onPress={this.pressMenu} /> : null}
    {this.props.loaded === true ? (
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
      <Spinner visible={true} animation="slide" size="large" />
     </View>
    )}
   </Container>
  );
 }
}

const mapStateToProps = state => {
 return {
  balance: state.hubReducers.balance,
  conversionRate: state.hubReducers.conversionRate,
  date: state.hubReducers.date,
  rate24: state.hubReducers.rate24,
  rate7: state.hubReducers.rate7,
  lastTrans: state.hubReducers.lastTrans
 };
};

const mapDispatchToProps = dispatch => ({
 setLoaded: bool =>
  dispatch({
   type: 'LOADED',
   bool
  }),
 addBalance: balance =>
  dispatch({
   type: 'ADD_BALANCE',
   balance
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Hub);
