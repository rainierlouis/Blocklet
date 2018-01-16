import React, { Component } from 'react';

import { FlatList, View, StatusBar, Text } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Octicons';
import QRCode from 'react-native-qrcode-svg';

import { Container } from '../components/Container';
import { HeaderTop } from '../components/HeaderTop';
import { AmountField } from '../components/FormField';

// REDUX
import { connect } from 'react-redux';

import { fetchFee, sendAmount } from '../data/fetchData';

// Navigation Helper
const resetAction = NavigationActions.reset({
 index: 0,
 actions: [NavigationActions.navigate({ routeName: 'Home' })]
});

// Screen styles
const styles = EStyleSheet.create({
 title: {
  color: '$yellow',
  marginBottom: 10
 },
 subHeader: {
  color: '$yellow',
  marginTop: 40
 },
 subtitle: {
  color: '$yellow',
  marginTop: 20,
  marginBottom: 20
 }
});

class CompleteTransfer extends Component {
 constructor(props) {
  super(props);
 }

 static propTypes = {
  onPress: PropTypes.func,
  data: PropTypes.any
 };

 // component prior amount
 // TODO: attach address to state

 // component after dismount
 // TODO: reset amount/fee/address from state

 componentWillUnmount() {
  this.props.resetData();
 }

 pressMenu = () => {
  this.props.navigation.navigate('MenuList', {
   // coin: this.props.navigation.state.params.coin
  });
 };

 pressHome = () => {
  this.props.navigation.dispatch(resetAction);
 };

 feeEstimate = amount => {
  this.props.addAmount(amount);
  fetchFee(
   this.props.navigation.state.params.user.API_KEY_TESTNET,
   amount,
   this.props.navigation.state.params.data
  ).then(data => this.props.addFee(+data.data.estimated_network_fee));
 };

 sendCoin = (apiKey, amount, toAddress, fromAddress) => {
  sendAmount(apiKey, amount, toAddress, fromAddress);
  this.props.navigation.navigate('Complete', {
   coin: this.props.navigation.state.params.user
  });
 };

 // RENDER ========================

 render() {
  return (
   <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <HeaderTop onPressMenu={this.pressMenu} onPressHome={this.pressHome} />
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
     <Text style={styles.title}>Sending to:</Text>
     <QRCode
      value="2N8jnDQH9KqidrqQ4veTfAiSgh5dNNSgWr1"
      logoSize={100}
      size={310}
      logoMargin={5}
     />
     <Text style={styles.subHeader}>Amount</Text>
     <AmountField feeEstimate={e => this.feeEstimate(e)} />
     <Text style={styles.subtitle}>Fee: {+this.props.fee}</Text>
     <Button
      icon={{ name: 'check', type: 'font-awesome' }}
      style={{
       width: 250,
       height: 40
      }}
      borderRadius={30}
      backgroundColor="#ddb500"
      onPress={() =>
       this.sendCoin(
        this.props.navigation.state.params.user.API_KEY_TESTNET,
        this.props.amount,
        this.props.navigation.state.params.data,
        this.props.navigation.state.params.user.ADDRESS
       )
      }
     />
    </View>
   </Container>
  );
 }
}

const mapStateToProps = state => {
 return {
  amount: state.completeTransReducers.amount,
  fee: state.completeTransReducers.fee
 };
};

const mapDispatchToProps = dispatch => ({
 addFee: fee =>
  dispatch({
   type: 'ADD_FEE',
   fee
  }),
 addAmount: amount =>
  dispatch({
   type: 'ADD_AMOUNT',
   amount
  }),
 resetData: () =>
  dispatch({
   type: 'RESET_DATA'
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(CompleteTransfer);
