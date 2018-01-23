import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { ListItem, Separator } from '../components/ListItem';
import { Container } from '../components/Container';
import menuData from '../data/menuData';
import { BTC, LTC, DOGE } from '../data/userData';

class MenuList extends Component {
 static propTypes = {
  onPress: PropTypes.func,
  navigation: PropTypes.object
 };

 adjustSelected = (arr, sel) =>
  menuData.slice().map(item => {
   if (item[1] === true) return (item[1] = false);
   if (item[0] === sel) return (item[1] = true);
  });

 handlePress = async item => {
  if (item[1] === false) await this.adjustSelected(menuData, item[0]);
    this.props.navigation.navigate(`${item[0]}`, {
      coin: this.props.navigation.state.params.coin,
      selected: item[1]
     });
 };

 // RENDER ========================

 render() {
  return (
   <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <FlatList
     style={{ marginTop: 0 }}
     data={menuData}
     renderItem={({ item }) => (
      <ListItem
       text={item[0]}
       onPress={() => this.handlePress(item)}
       selected={item[1]}
      />
     )}
     keyExtractor={item => item}
     ItemSeparatorComponent={Separator}
    />
   </Container>
  );
 }
}

export default MenuList;

// const mapStateToProps = state => {
// 	return {
// 		baseCurrency: state.currencies.baseCurrency,
// 		quoteCurrency: state.currencies.quoteCurrency,
// 		primaryColor: state.theme.primaryColor,
// 	}
// }
//
// export default connect(mapStateToProps)(CurrencyList);
