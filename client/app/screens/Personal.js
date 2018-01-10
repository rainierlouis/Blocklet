import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import { Container } from '../components/Container';
import { HeaderTop } from '../components/HeaderTop';

// REDUX
import { connect } from 'react-redux';

// Navigation Helper
const resetAction = NavigationActions.reset({
 index: 0,
 actions: [NavigationActions.navigate({ routeName: 'Home' })]
});

class Personal extends Component {
 constructor(props) {
  super(props);
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
  this.props.navigation.dispatch(resetAction);
 };

 // RENDER ========================

 render() {
  return (
   <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <HeaderTop onPressMenu={this.pressMenu} onPressHome={this.pressHome} />
   </Container>
  );
 }
}

const mapStateToProps = state => {
 return {};
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Personal);
