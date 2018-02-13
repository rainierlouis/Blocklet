import React, { Component } from 'react';
import { Text } from 'react-native-elements';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

import { Container } from '../Container';

// Graph
import { AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

export default class ExchangeBox extends Component {
 constructor(props) {
  super(props);
 }

 static propTypes = {
  coin: PropTypes.string,
  time: PropTypes.string,
  timeText: PropTypes.string,
  ticker: PropTypes.any,
  data: PropTypes.array,
 };

 render() {
  return (
   <View>
    <View style={styles.exchBox}>
     <Text style={styles.titlePrimary}>{this.props.coin} – {this.props.timeText}</Text>
     {/* <Text style={styles.ticker}>{this.props.ticker}</Text> */}
     <Text style={styles.amount}>
      ${this.props.data[this.props.data.length - 1].toFixed(2)}
     </Text>
     <AreaChart
      showGrid={false}
      gridMin={this.props.data.slice().sort((a, b) => a - b)[0]}
      gridMax={
       this.props.data.slice().sort((a, b) => a - b)[
        this.props.data.length - 1
       ]
      }
      style={styles.graph}
      dataPoints={this.props.data}
      curve={shape.curveLinear}
      svg={{
       fill: 'rgba(221, 181, 0, 0.2)',
       stroke: 'rgb(221, 181, 0)'
      }}
     />
    </View>
   </View>
  );
 }
}
