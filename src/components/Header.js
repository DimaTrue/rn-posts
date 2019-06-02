import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
const { height } = Dimensions.get('window')

export default class Header extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={() => alert('clicked button_1')}  style={styles.button} >
					<Text>
						Press 1
					</Text>
				</TouchableOpacity>
				<Text>It is Header</Text>
				<TouchableOpacity onPress={() => alert('clicked button_2')}  style={styles.button} >
					<Text>
						Press 2
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		flexDirection: 'row',
		backgroundColor: '#aaa',
		alignItems: 'center',
		justifyContent: 'space-around',
		height: 75,
	},
	button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
});
