import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  DotIndicator,
} from 'react-native-indicators';

const Loading = () => {
	return (
		<View style={styles.container}>
			<DotIndicator color='#354e6d' />
		</View>
	);
}

export default Loading;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#aaa',
		alignItems: 'center',
		height: '100%',
	},
});
