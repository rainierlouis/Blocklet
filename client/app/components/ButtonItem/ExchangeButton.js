import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

const ExchangeButton = ({ onPress }) => (
 <Button onPress={onPress} title="24h" buttonStyle={styles.exchangeButton} />
);

ExchangeButton.propTypes = {
 onPress: PropTypes.func
};

export default ExchangeButton;
