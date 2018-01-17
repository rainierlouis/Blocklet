import React, { Component } from 'react';

import { FlatList, View, StatusBar, Text } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import QRCode from 'react-native-qrcode-svg';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Octicons';

import { Container } from '../components/Container';
import { HeaderTop } from '../components/HeaderTop';
import { HeaderTitle } from '../components/TextItem';

// REDUX
import { connect } from 'react-redux';

// Navigation Helper
const resetAction = NavigationActions.reset({
 index: 0,
 actions: [NavigationActions.navigate({ routeName: 'Home' })]
});

// Screen styles
const styles = EStyleSheet.create({
 subTextQR: {
  marginTop: 20,
  marginBottom: 15,
  color: '$yellow',
  fontFamily: 'lato'
 },
 subTextName: {
  marginTop: 50,
  color: '$yellow',
  marginBottom: 5,
  fontFamily: 'lato'
 },
 subText: {
  color: '$yellow',
  marginBottom: 5,
  fontFamily: 'lato'
 },
 text: {
  color: '$white',
  fontSize: 15,
  fontFamily: 'lato'
 },
 boxContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  width: 310,
  height: 30,
  marginBottom: 10,
  backgroundColor: 'rgba(5,0.5,0.5,0.5)',
  borderRadius: 30,
  paddingLeft: 15
 }
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

 headerT = () =>
  `Personal - ${this.props.navigation.state.params.coin.currency_name}`;
 // RENDER ========================

 render() {
  return (
   <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <HeaderTop onPressMenu={this.pressMenu} onPressHome={this.pressHome} />
    <View
     style={{ marginTop: 35, justifyContent: 'center', alignItems: 'center' }}
    >
     <HeaderTitle
      style={{ backgroundColor: '#2b2b2b' }}
      titleName={this.headerT()}
     />
     <View>
      <Text style={styles.subTextQR}>QR Wallet Code</Text>

      <QRCode
       value="2N8jnDQH9KqidrqQ4veTfAiSgh5dNNSgWr1"
       logoSize={100}
       size={310}
       logoMargin={5}
      />

      <Text style={styles.subTextName}>Username</Text>
      <View style={styles.boxContainer}>
       <Text style={styles.text}>Selyuu</Text>
      </View>
      <Text style={styles.subText}>Email</Text>
      <View style={styles.boxContainer}>
       <Text style={styles.text}>
        <Icon name="primitive-dot" />
        <Icon name="primitive-dot" />
        <Icon name="primitive-dot" />
        <Icon name="primitive-dot" />
        <Icon name="primitive-dot" />
        <Icon name="primitive-dot" />
        <Icon name="primitive-dot" />
        <Icon name="primitive-dot" />
        <Icon name="primitive-dot" />
        <Icon name="primitive-dot" />
        <Icon name="primitive-dot" />
        <Icon name="primitive-dot" />
        <Icon name="primitive-dot" style={{ marginRight: 0 }} />@gmail.com
       </Text>
      </View>
      <Text style={styles.subText}>Password</Text>
      <View style={styles.boxContainer}>
       <Text style={styles.text}>
        <Icon name="primitive-dot" />
        <Icon name="primitive-dot" />
        <Icon name="primitive-dot" />
        <Icon name="primitive-dot" />
        <Icon name="primitive-dot" />
        <Icon name="primitive-dot" />
        <Icon name="primitive-dot" />
        <Icon name="primitive-dot" />
       </Text>
      </View>
     </View>
    </View>
   </Container>
  );
 }
}

const mapStateToProps = state => {
 return {};
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Personal);
