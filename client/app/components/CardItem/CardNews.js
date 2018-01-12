import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';

import styles from './styles';

// TODO: Change styling color depending on pos/neg percentage

const CardNews = ({ imageUrl, title, date, source }) => (
 <Card
  containerStyle={{ borderColor: '#181337', borderRadius: 15 }}
  imageStyle={{ borderRadius: 15 }}
  imageWrapperStyle={{ borderRadius: 15 }}
  image={{
   uri:
    'https://norbertbiedrzycki.pl/wp-content/uploads/2017/02/Norbert-Biedrzycki-computers-existence.jpg'
  }}
 >
  <Text style={{ marginBottom: 10 }}>
   The idea with React Native Elements is more about component structure than
   actual design.
  </Text>
  <Button
   rounded={true}
   raised={true}
   icon={{ name: 'link' }}
   backgroundColor="#ddb500"
   fontFamily="lato"
   buttonStyle={{
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    borderRadius: 30,
    height: 15
   }}
  />
 </Card>
);

CardNews.propTypes = {
 imageUrl: PropTypes.string,
 title: PropTypes.string,
 date: PropTypes.string,
 source: PropTypes.string
};

export default CardNews;
