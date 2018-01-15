import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, WebView, Linking } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';

import styles from './styles';

handleClick = () => {};

const CardNews = ({ imageUrl, title, date, source }) => (
 <Card
  containerStyle={styles.newsCard}
  imageStyle={{ borderRadius: 15 }}
  image={{ uri: imageUrl }}
 >
  <Text style={styles.newsText}>{title}</Text>
  <Button
   rounded={true}
   raised={true}
   icon={{ name: 'link' }}
   backgroundColor="#ddb500"
   fontFamily="lato"
   buttonStyle={styles.newsButton}
   onPress={() =>
    Linking.openURL(source).catch(err =>
     console.error('An error occurred', err)
    )
   }
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
