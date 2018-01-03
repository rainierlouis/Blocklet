import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

class Loading extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  /* eslint react/no-did-mount-set-state: 0 */
  componentDidMount() {
    setInterval(() => {
      this.setState({
        visible: !this.state.visible
      });
    }, 3000);
  }

  render() {
				
    return (
      <View style={{ flex: 1 }}>
        <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
      </View>
    );
  }
}

export default Loading;
