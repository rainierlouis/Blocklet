import React, { Component } from 'react';

import { FlatList, View, StatusBar } from 'react-native';
import { Button, Text } from 'react-native-elements';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as Animatable from 'react-native-animatable';

import { Container } from '../components/Container';

// REDUX
import { connect } from 'react-redux';

// Screen styles
const styles = EStyleSheet.create({
 sentText: { color: '#cccccc', fontSize: 25, fontFamily: 'lato' }
});

class Complete extends Component {
 constructor(props) {
  super(props);
 }

 static propTypes = {};

 componentDidMount() {
  setTimeout(() => {
   this.props.navigation.navigate('Hub', {
    coin: this.props.navigation.state.params.coin
   });
  }, 3000);
 }

 // RENDER ========================

 render() {
  return (
   <Container>
    <StatusBar translucent={false} barStyle="light-content" />

    <Animatable.Text
     animation="bounceInLeft"
     delay={800}
     duration={2000}
     style={styles.sentText}
    >
     Sent!
    </Animatable.Text>
   </Container>
  );
 }
}

const mapStateToProps = state => {
 return {};
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Complete);
