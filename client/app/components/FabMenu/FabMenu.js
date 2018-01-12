import React, { Component } from 'react';
import { Container, View, Button, Icon, Fab } from 'native-base';

import styles from './styles';

export default class FabMenu extends Component {
 constructor() {
  super();
  this.state = {
   active: false
  };
 }
 render() {
  return (
   <View style={styles.container}>
    <Fab
     active={this.state.active}
     direction="up"
     containerStyle={{}}
     style={{ backgroundColor: '#ddb500' }}
     onPress={() => this.setState({ active: !this.state.active })}
    >
     <Icon name="menu" />
					
     <Button style={{ backgroundColor: '#34A34F' }}>
      <Icon name="albums" />
     </Button>
     <Button style={{ backgroundColor: '#3B5998' }}>
      <Icon name="card" />
     </Button>
     <Button style={{ backgroundColor: '#3B5998' }}>
      <Icon name="book" />
     </Button>
     <Button style={{ backgroundColor: '#DD5144' }}>
      <Icon name="stats" />
     </Button>
     <Button style={{ backgroundColor: '#DD5144' }}>
      <Icon name="paper" />
     </Button>
     <Button style={{ backgroundColor: '#ddb500' }}>
      <Icon name="person" />
     </Button>
    </Fab>
   </View>
  );
 }
}
