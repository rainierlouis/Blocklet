import React from 'react';
import { View } from 'react-native';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory-native';

const TEMP_HISTORY = [
	
]
const Graph = () => (
	<View>
		<VictoryChart theme={VictoryTheme.material}>
			<VictoryLine
    data={[
					{ date: 1, rate: 2 },
					{ date: 2, rate: 3 },
					{ date: 3, rate: 5 },
					{ date: 4, rate: 4 },
					{ date: 5, rate: 7 }
    ]}
				x='date'
				y='rate'
			/>
		</VictoryChart>
	</View>
)

export default Graph;
