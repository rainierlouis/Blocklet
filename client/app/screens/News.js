import React, { Component } from 'react';

import { View, StatusBar, Text, ScrollView, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import moment from 'moment';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Container } from '../components/Container';
import { HeaderTop } from '../components/HeaderTop';
import { CardNews } from '../components/CardItem';
import { HeaderTitle } from '../components/TextItem';

// REDUX
import { connect } from 'react-redux';

import { topNews } from '../data/newsData';

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

 componentDidMount() {
  topNews().then(data => this.props.addArticles(data));
 }

 pressMenu = () => {
  this.props.navigation.navigate('MenuList', {
   coin: this.props.navigation.state.params.coin
  });
 };

 pressHome = () => {
  this.props.navigation.dispatch(resetAction);
 };

 guid = () => {
  const s4 = () => {
   return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  };
  return (
   s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
  );
 };

 // RENDER ========================

 render() {
  return (
   <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <HeaderTop onPressMenu={this.pressMenu} onPressHome={this.pressHome} />
    <View
     style={{ marginTop: 100, justifyContent: 'center', alignItems: 'center' }}
    >
     <HeaderTitle style={{ backgroundColor: '#2b2b2b' }} titleName={'News'} />
     <FlatList
      data={this.props.articles}
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
     />
    </View>
   </Container>
  );
 }
}

const mapStateToProps = state => {
 return {
  articles: state.newsReducers.articles
 };
};

const mapDispatchToProps = dispatch => ({
 addArticles: data =>
  dispatch({
   type: 'ADD_ARTS',
   data
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
