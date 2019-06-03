import React from 'react';
import {
	ActivityIndicator,
	StatusBar,
	StyleSheet,
	View
} from 'react-native';
import { connect } from 'react-redux';
import { getUserData } from '../actions/user';


class AuthLoading extends React.Component {

	static navigationOptions = {
		header: null,
	};

	async componentDidMount() {
		await this.props.getUserData();
	}

	componentWillUpdate(nextProps) {
		if (nextProps.userData !== null) {
			this.props.navigation.navigate('App')
		} else {
			this.props.navigation.navigate('Auth')
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<ActivityIndicator />
				<StatusBar barStyle="default" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'green',
	},
});

const mapStateToProps = state => ({
	userData: state.user.userData,
});

const mapDispatchToProps = dispatch => ({
	getUserData: () => dispatch(getUserData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);
