import React, { Component } from 'react';

import {
 View,
 StatusBar,
 Text,
 ScrollView,
 FlatList,
 TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import moment from 'moment';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Container } from '../components/Container';
import { HeaderTop } from '../components/HeaderTop';
import { HeaderTitle } from '../components/TextItem';

// REDUX
import { connect } from 'react-redux';

import serverHost from '../config/serverHost.js'

// Navigation Helper
const resetAction = NavigationActions.reset({
 index: 0,
 actions: [NavigationActions.navigate({ routeName: 'Home' })]
});

// Screen styles
const styles = EStyleSheet.create({});

class Balances extends Component {
 constructor(props) {
  super(props);
 }

 componentWillMount() {
   // fetch(`localhost:3006/balances`).then(res =>
   //  res.json())
 }
 componentDidMount() {
  // topNews().then(data => this.props.addArticles(data));
  console.log('STATE', this.state);
  console.log('PROPS', this.props);
 }

 pressMenu = () => {
  this.props.navigation.navigate('MenuList', {
   coin: this.props.navigation.state.params.coin
  });
 };

 pressHome = () => {
  this.props.navigation.dispatch(resetAction);
 };

 postBalances = () => {
   console.log('BUTTON PRESSED');
   fetch(`${serverHost}/balances`, {
     method: 'POST',
     body: JSON.stringify({
       balances: {BTC: 1}
     }),
     headers: {
       'Authorization': 'Bearer ' + this.props.user.accessToken,
       'Content-type': 'application/json'
     }
   })
 }
 // RENDER ========================

 render() {
  return (
   <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <HeaderTop onPressMenu={this.pressMenu} onPressHome={this.postBalances} />
    <View
     style={{ marginTop: 100, justifyContent: 'center', alignItems: 'center' }}
    >
     <HeaderTitle onClick={this.postBalances} style={{ backgroundColor: '#2b2b2b' }} titleName={'Balances'} />
     {/* <FlatList
      data={this.props.balances}
      renderItem={({ item, i }) => (
       <CardNews
        style={{ flex: 1 }}
        imageUrl={item.urlToImage}
        title={item.title}
        date={moment(item.date).format('MMMM D, YYYY')}
        source={item.url}
       />
      )}
      keyExtractor={() => this.guid()}
     /> */}
    </View>
   </Container>
  );
 }
}

const mapStateToProps = state => {
 return {
  balances: state.balancesReducers.balances,
  user: state.user.user,
 };
};

const mapDispatchToProps = dispatch => ({
 addBalances: data =>
  dispatch({
   type: 'SET_BALANCES',
   data
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Balances);
