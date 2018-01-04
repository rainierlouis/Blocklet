import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Spinner from 'react-native-loading-spinner-overlay';
import { Container } from '../components/Container';

class Loading extends Component {
 constructor(props) {
  super(props);
  this.state = {
   visible: true
  };
 }

 static propTypes = {
  navigation: PropTypes.object
 };

 componentDidMount() {
  setTimeout(() => {
   this.setState({ visible: false });
  }, 4000);
 }

 render() {
  return (
   <Container style={{ height: 500, width: 250, backgroundColor: '#FFF' }}>
    <Spinner visible={this.state.visible} textStyle={{ color: '#FFF' }} />
   </Container>
  );
 }
}

export default Loading;
