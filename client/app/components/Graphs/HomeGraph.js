import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

// vx d3 =================================================
import { AreaChart, LineChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

// vx d3 =================================================

export default class HomeGraph extends Component {
 constructor(props) {
  super(props);
 }

 static propTypes = {
  svgStyle: PropTypes.object
 };

 render() {
  return (
   <AreaChart
    showGrid={false}
    gridMin={this.props.data.slice().sort((a, b) => a - b)[0]}
    gridMax={
     this.props.data.slice().sort((a, b) => a - b)[this.props.data.length - 1]
    }
    style={{ height: 50, width: 210, alignSelf: 'center', marginTop: 10 }}
    dataPoints={this.props.data}
    curve={shape.curveLinear}
    svg={this.props.svgStyle}
   />
  );
 }
}
