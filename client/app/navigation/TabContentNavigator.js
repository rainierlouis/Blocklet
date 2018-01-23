import React, { Component } from 'react';
import { TabRouter } from "react-navigation";
import Balances from '../screens/Balances';
import Markets from '../screens/Markets';
import Transactions from '../screens/Transactions';
import News from '../screens/News';

const MainRoute = TabRouter({
  Balances: { screen: Balances },
  Markets: { screen: Markets },
  Transactions: { screen: Transactions },
  News: { screen: News },
  }, {
    initialRouteName: 'Balances',
  }
);

class TabContentNavigator extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: props.value.active,
    };
  }

  //this method will not get called first time
  componentWillReceiveProps(newProps){
    this.setState({
      active: newProps.value.active,
    }); 
  }

  render() {
    const Component = MainRoute.getComponentForRouteName(this.state.active);
    return <Component/>;
  }
}