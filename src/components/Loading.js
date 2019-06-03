import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Loading = () => {
	return (
		<View style={styles.container}>
			<Text>
				Loading
			</Text>
		</View>
	);
}

export default Loading;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: '#aaa',
		alignItems: 'center',
		justifyContent: 'space-around',
		height: 75,
		fontSize: 70,
	},
});
