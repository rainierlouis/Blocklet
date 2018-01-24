import {
 View,
 StatusBar,
 Text,
 ScrollView,
 FlatList,
 TouchableHighlight,
 Modal,
 Button,
 TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import { Divider, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import React, { Component } from 'react';

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
// const styles = EStyleSheet.create({});
const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  innerContainer: {
    alignItems: 'center',
  },
});

class Balances extends Component {
 constructor(props) {
  super(props);
 }

 componentDidMount() {
   fetch(`${serverHost}/data`)
    .then(res => res.json())
    .then(data => this.props.addBalances(data));
 }
 state = {
   modalVisible: false,
 };

   static navigationOptions = {
    tabBarLabel: 'Balances',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='account-balance'
        size={26}
        color={tintColor} />
    ),
  }
  
 openModal(token) {
   console.log(token);
  this.setState({modalVisible:true});
}

closeModal() {
  this.setState({modalVisible:false});
}


 postBalances = () => {
   console.log('BUTTON PRESSED');
   fetch(`${serverHost}/balances`, {
     method: 'POST',
     body: JSON.stringify({
       balances: this.props.balances,
       user: this.props.user._id,
     }),
     headers: {
       'Authorization': 'Bearer ' + this.props.user.accessToken,
       'Content-type': 'application/json'
     }
   })
 }
 logger = (input) => {
   console.log(input);
 }
 // RENDER ========================

 render() {
  return (
    <Container>
      <Modal
          visible={this.state.modalVisible}
          animationType={'slide'}
          onRequestClose={() => this.closeModal()}
      >
        <View style={styles.modalContainer}>
          <View style={styles.innerContainer}>
            <Text>Add quantity here:</Text>
            <TextInput
              style={{width: 100, height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.logger({text})}
              value={this.state.text}
            />
            <Button
                onPress={() => this.closeModal()}
                title="SAVE"
            >
            </Button>
          </View>
        </View>
      </Modal>
     <StatusBar translucent={false} barStyle="light-content" />
     <HeaderTop onPressMenu={this.pressMenu} onPressHome={this.pressHome} />
     <View style={{ marginTop: 100 }}>
      <HeaderTitle
       style={{ backgroundColor: '#2b2b2b' }}
       titleName={'BALANCES'}
      />
      <FlatList
       data={this.props.balances}
       renderItem={({ item }) => (
        <TouchableHighlight
         style={{ justifyContent: 'center', alignItems: 'center' }}
         onPress={() => this.openModal(item)}
        >
         <View
          style={{
           width: 355,
           justifyContent: 'center',
           backgroundColor: '#303030',
           marginTop: 5,
           padding: 10
          }}
         >
          <View
           style={{
            paddingVertical: 5,
            justifyContent: 'space-between',
            flexDirection: 'row'
           }}
          >
           <Text style={{ color: '#cccccc' }}>
            {item.symbol} | {item.id}
           </Text>
           {/* <Button
               onPress={(item.id) => this.openModal(item.id)}
               title="Open modal"
           /> */}
           {/* <Text style={{ color: '#5ec16a' }}>
            ${Number(item.price_usd).toFixed(2)}
           </Text> */}
          </View>
          <Divider style={{ backgroundColor: '#3f3f3f', marginVertical: 5 }} />
         </View>
        </TouchableHighlight>
       )}
       keyExtractor={item => item.id}
      />
     </View>
    </Container>
  );
 }
}

const mapStateToProps = state => ({
  balances: state.balancesReducers.balances,
  user: state.user.user,
});

const mapDispatchToProps = dispatch => ({
 setBalances: data =>
  dispatch({
   type: 'SET_BALANCES',
   data
 }),
 addBalances: data =>
  dispatch({
   type: 'ADD_BALANCES',
   data
 }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Balances);
