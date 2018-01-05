import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { TransactionItem, Separator } from '../components/ListItem';
import { Container } from '../components/Container';
import recentTransactionsRec from '../data/recentTransactionsRec';
import recentTransactionsSent from '../data/recentTransactionsSent';

import { fetchSent, fetchReceived } from '../data/fetchData';

// REDUX
import { connect } from 'react-redux';

const TEMP_ADDRESS = '2N5wGeBMZZeAVozrK8aPRFNCzFBMxjsfc5p';

class Transactions extends Component {
 constructor(props) {
  super(props);
  fetchSent(TEMP_ADDRESS).then(data => this.props.addSent(data));
  fetchReceived(TEMP_ADDRESS).then(data => this.props.addRec(data));
 }

 static propTypes = {
  onPress: PropTypes.func
 };

 addSent = list => {
  let result = list.map(item => {
   let el = Object.assign({}, item);
   el.sentOrRec = 'sent';
   return el;
  });
  return result;
 };

 addRec = list => {
  let result = list.map(item => {
   let el = Object.assign({}, item);
   el.sentOrRec = 'received';
   return el;
  });
  return result;
 };

 sortData = (sentList, recList) => {
  let sent = this.addSent(sentList);
  let rec = this.addRec(recList);
  return sent.concat(rec).sort((a, b) => b.time - a.time);
 };

 handlePress = item => {
  console.log(`transfer to screen: ${item}`);
 };

 // RENDER ========================

 render() {
  return (
   <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <FlatList
     style={{ marginTop: 10 }}
     data={this.sortData(this.props.recTrans, this.props.sentTrans)}
     renderItem={({ item }) => (
      <TransactionItem
       sentOrRec={item.sentOrRec}
       amount={
        item.amounts_received
         ? item.amounts_received[0].amount
         : item.total_amount_sent
       }
       sender={item.senders[0]}
       confidence={item.confidence}
       confirmations={item.confirmations}
       onPress={() => this.handlePress(item)}
      />
     )}
     keyExtractor={item => item.txid}
     ItemSeparatorComponent={Separator}
    />
   </Container>
  );
 }
}

const mapStateToProps = state => {
 return {
  recTrans: state.transactionReducers.recTrans,
  sentTrans: state.transactionReducers.sentTrans
 };
};

const mapDispatchToProps = dispatch => ({
 addRec: data =>
  dispatch({
   type: 'ADD_SENT',
   data
  }),
 addSent: data =>
  dispatch({
   type: 'ADD_REC',
   data
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
