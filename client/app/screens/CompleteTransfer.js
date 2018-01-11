import React, { Component } from 'react';

import { FlatList, View, StatusBar, Text } from 'react-native';
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

// Navigation Helper
const resetAction = NavigationActions.reset({
 index: 0,
 actions: [NavigationActions.navigate({ routeName: 'Home' })]
});

// Screen styles
const styles = EStyleSheet.create({
 title: {
  color: '$yellow',
  alignSelf: 'flex-start',
  marginBottom: 10
 },
 subHeader: {
  color: '$yellow',
  marginTop: 30
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

 pressMenu = () => {
  this.props.navigation.navigate('MenuList', {
   // coin: this.props.navigation.state.params.coin
  });
 };

 pressHome = () => {
  this.props.navigation.dispatch(resetAction);
 };

 // RENDER ========================

 render() {
  // const qrData = this.props.navigation.state.params.data;
  return (
   <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <HeaderTop onPressMenu={this.pressMenu} onPressHome={this.pressHome} />
    <View>
     <Text style={styles.title}>Sending to:</Text>
     <QRCode
      value="2N8jnDQH9KqidrqQ4veTfAiSgh5dNNSgWr1"
      logoSize={100}
      size={310}
      logoMargin={5}
     />
     <Text style={styles.subHeader}>Amount</Text>
     <AmountField />
    </View>
   </Container>
  );
 }
}

const mapStateToProps = state => {
 return {};
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CompleteTransfer);
