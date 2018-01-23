import React, { Component } from 'react';
import {
 View,
 StatusBar,
 Text,
 ScrollView,
 FlatList,
 Image,
 TouchableHighlight
} from 'react-native';
import { Divider } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

import { images } from '../data/iconData';

import { Container } from '../components/Container';
import { HeaderTop } from '../components/HeaderTop';

// REDUX
import { connect } from 'react-redux';

import { fetchMarket } from '../data/fetchData';

const resetAction = NavigationActions.reset({
 index: 0,
 actions: [NavigationActions.navigate({ routeName: 'Home' })]
});

class Testing extends Component {

 constructor(props) {
  super(props);
  console.log(props);
 }

 static propTypes = {};

 componentWillMount() {
  fetchMarket(2).then(data => this.props.addMarket(data));
 }

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
     <HeaderTop onPressMenu={this.pressMenu} onPressHome={this.pressHome} />
     <View style={{ marginTop: 100 }}>

      <FlatList
       data={this.props.marketData}
       renderItem={({ item }) => (
        <TouchableHighlight
         style={{ justifyContent: 'center', alignItems: 'center' }}
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
           <Image
            source={{ uri: images[item.symbol] }}
            style={{ height: 25, width: 25 }}
           />
           <Text style={{ color: '#cccccc' }}>
            {item.symbol} | {item.name}
           </Text>
           <Text style={{ color: '#5ec16a' }}>
            ${Number(item.price_usd).toFixed(2)}
          </Text>
          </View>
          <Divider style={{ backgroundColor: '#3f3f3f', marginVertical: 5 }} />
          <View
           style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 5
           }}
          >
            <Text style={{ color: '#cccccc' }}>
             Hour:{' '}
             {+item.percent_change_1h > 0 ? (
              <Text style={{ color: '#5ec16a' }}>
               +{+item.percent_change_1h}%
              </Text>
             ) : (
              <Text style={{ color: '#bf3b3b' }}>
               {+item.percent_change_1h}%
              </Text>
             )}
            </Text>
           <Text style={{ color: '#cccccc' }}>
            Day:{' '}
            {+item.percent_change_24h > 0 ? (
             <Text style={{ color: '#5ec16a' }}>
              +{+item.percent_change_24h}%
             </Text>
            ) : (
             <Text style={{ color: '#bf3b3b' }}>
              {+item.percent_change_24h}%
             </Text>
            )}
           </Text>
           <Text style={{ color: '#cccccc' }}>
            Week:{' '}
            {+item.percent_change_7d > 0 ? (
             <Text style={{ color: '#5ec16a' }}>
              +{+item.percent_change_7d}%
             </Text>
            ) : (
             <Text style={{ color: '#bf3b3b' }}>{+item.percent_change_7d}%</Text>
            )}
           </Text>
           <Divider style={{ backgroundColor: '#3f3f3f', marginVertical: 5 }} />
           {/* <Text style{{color: '#fff' }}>{}</Text> */}
          </View>
         </View>
        </TouchableHighlight>
       )}
       keyExtractor={item => item.rank}
      />
     </View>
   </Container>
  );
 }
}

const mapStateToProps = state => {
  return {
   marketData: state.marketReducers.marketData
  };
};

const mapDispatchToProps = dispatch => ({
  addMarket: data =>
   dispatch({
    type: 'ADD_MARKET',
    data
   })
});

export default connect(mapStateToProps, mapDispatchToProps)(Testing);
