import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Picker
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { PieChart } from 'react-native-svg-charts'

import { Container } from '../components/Container';

import { connect } from 'react-redux';
import { fetchMarket } from '../data/fetchData';

class Portfolio extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    language: '',
  }

  render() {

      const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

      const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)

      const pieData = data
          .filter(value => value > 0)
          .map((value, index) => ({
              value,
              color: randomColor(),
              key: `pie-${index}`,
              onPress: () => console.log(`${index} slice pressed`),
          }))
      const test = 'Hello world';

      return (
        <View style= {{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{
            backgroundColor: 'blue',
            color: 'red',
            flex: 2,
          }}>{test}</Text>
          <View style={{
            backgroundColor: "red",
            flex: 2,
          }}>
            <Picker style={{
              backgroundColor: 'red',
              width: 300,
            }}>
              <Picker.Item label="Bitcoin" value="BTC" />
              <Picker.Item label="Ethereum" value="ETH" />
              <Picker.Item label="Lisk" value="LISK" />

            </Picker>
          </View>
          <View style={{
            flex: 4
          }}>
            <PieChart
                style={ {
                  height: 300,
                  width: 300,
                  marginTop: 20,
                 } }
                data={ pieData }
                animate= { true }
                animationDuration={ 300 }
                innerRadius={ "65%" }
                outerRadius={ "80%" }
            />
          </View>
        </View>
        )
        // <Container>
          // <View style={{
          //   // flex: 1,
          //   flexDirection: 'row',
          //   justifyContent: 'center',
          //   backgroundColor: 'red'
          //
          // }}>
            // <PieChart
            //     style={ {
            //       height: 200,
            //       marginTop: 300,
            //      } }
            //     data={ pieData }
            //     outerRadius={ "100%" }
            // />
            {/* <Text>{test}</Text> */}
          // </View>
        // </Container>
      // )
  }

}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default Portfolio;
