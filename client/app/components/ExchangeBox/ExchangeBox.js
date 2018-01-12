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
  coin: PropTypes.object,
  // 1h
  time1h: PropTypes.string,
  timeText1h: PropTypes.string,
  ticker1h: PropTypes.any,
  data1h: PropTypes.array,
  // 24h
  time24h: PropTypes.string,
  timeText24h: PropTypes.string,
  ticker24h: PropTypes.any,
  data24h: PropTypes.array,
  // 7d
  time7d: PropTypes.string,
  timeText7d: PropTypes.string,
  ticker7d: PropTypes.any,
  data7d: PropTypes.array,
  // 1m
  time1m: PropTypes.string,
  timeText1m: PropTypes.string,
  ticker1m: PropTypes.any,
  data1m: PropTypes.array
 };

 render() {
  return (
   <View style={styles.exchangeContainer}>
    <Text style={styles.titlePrimary}>{this.props.timeText1h}</Text>
    <Text style={styles.ticker}>+{this.props.ticker1h}</Text>
    <Text style={styles.amount}>
     ${this.props.data1h[this.props.data1h.length - 1].toFixed(2)}
    </Text>
    <AreaChart
     showGrid={false}
     gridMin={this.props.data1h.slice().sort((a, b) => a - b)[0]}
     gridMax={
      this.props.data1h.slice().sort((a, b) => a - b)[
       this.props.data1h.length - 1
      ]
     }
     style={styles.graph}
     dataPoints={this.props.data1h}
     curve={shape.curveLinear}
     svg={{
      fill: 'rgba(134, 65, 244, 0.2)',
      stroke: 'rgb(134, 65, 244)'
     }}
    />
    <Text style={styles.title}>{this.props.timeText24h}</Text>
    <Text style={styles.ticker}>+{this.props.ticker24h}</Text>
    <Text style={styles.amount}>
     ${this.props.data24h[this.props.data24h.length - 1].toFixed(2)}
    </Text>
    <AreaChart
     showGrid={false}
     gridMin={this.props.data24h.slice().sort((a, b) => a - b)[0]}
     gridMax={
      this.props.data24h.slice().sort((a, b) => a - b)[
       this.props.data24h.length - 1
      ]
     }
     style={styles.graph}
     dataPoints={this.props.data24h}
     curve={shape.curveLinear}
     svg={{
      fill: 'rgba(168, 30, 30, 0.2)',
      stroke: 'rgb(168, 30, 30)'
     }}
    />
    <Text style={styles.title}>{this.props.timeText7d}</Text>
    <Text style={styles.ticker}>+{this.props.ticker7d}</Text>
    <Text style={styles.amount}>
     ${this.props.data7d[this.props.data7d.length - 1].toFixed(2)}
    </Text>
    <AreaChart
     showGrid={false}
     gridMin={this.props.data7d.slice().sort((a, b) => a - b)[0]}
     gridMax={
      this.props.data7d.slice().sort((a, b) => a - b)[
       this.props.data7d.length - 1
      ]
     }
     style={styles.graph}
     dataPoints={this.props.data7d}
     curve={shape.curveLinear}
     svg={{
      fill: 'rgba(255, 242, 0, 0.2)',
      stroke: 'rgb(255, 242, 0)'
     }}
    />
    <Text style={styles.title}>{this.props.timeText1m}</Text>
    <Text style={styles.ticker}>+{this.props.ticker1m}</Text>
    <Text style={styles.amount}>
     ${this.props.data1m[this.props.data1m.length - 1].toFixed(2)}
    </Text>
    <AreaChart
     showGrid={false}
     gridMin={this.props.data1m.slice().sort((a, b) => a - b)[0]}
     gridMax={
      this.props.data1m.slice().sort((a, b) => a - b)[
       this.props.data1m.length - 1
      ]
     }
     style={styles.graph}
     dataPoints={this.props.data1m}
     curve={shape.curveLinear}
     svg={{
      fill: 'rgba(0, 85, 255, 0.2)',
      stroke: 'rgb(0, 85, 255)'
     }}
    />
   </View>
  );
 }
}
