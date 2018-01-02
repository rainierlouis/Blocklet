import React from 'react';
import { View } from 'react-native';
import { List, ListItem, Icon, Text } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

const iconStyles = [styles.leftIconPlus, styles.leftIconMinus]

const styleCheck = list => {
	return list.map(item => +item.title > 0 ? item.style = iconStyles[0] : item.style = iconStyles[1]);
}

const TransactionBox = ({ list }) => (
	<View style={styles.container}>
		<Text style={styles.titleText}>Recent Transactions</Text>
		<List containerStyle={styles.list}>
			{
    list.map((item, i) => (
					<ListItem
						containerStyle={styles.listItem}
						key={i}
						title={item.title}
						subtitle={item.subtitle}
						leftIcon={{name: item.icon, style: item.style}}
						hideChevron={true}
						titleStyle={styles.listTitle}
						subtitleStyle={styles.listSubtitle}
					/>
    ))
			}
		</List>
	</View>
)

TransactionBox.propTypes = {

}

export default TransactionBox;
