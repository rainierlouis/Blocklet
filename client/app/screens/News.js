import React, { Component } from 'react';

import { View, StatusBar, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Container } from '../components/Container';
import { HeaderTop } from '../components/HeaderTop';
import { CardNews } from '../components/CardItem';

// REDUX
import { connect } from 'react-redux';

// Navigation Helper
const resetAction = NavigationActions.reset({
 index: 0,
 actions: [NavigationActions.navigate({ routeName: 'Home' })]
});

// Screen styles
const styles = EStyleSheet.create({});

class News extends Component {
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

    <ScrollView style={{ marginTop: 90 }}>
     <CardNews />
     <CardNews />
     <CardNews />
    </ScrollView>
   </Container>
  );
 }
}

const mapStateToProps = state => {
 return {};
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(News);
