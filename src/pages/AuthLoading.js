import React from 'react';
import {
	ActivityIndicator,
	StatusBar,
	StyleSheet,
	View
} from 'react-native';
import { connect } from 'react-redux';
import { getToken } from '../actions/user';


class AuthLoading extends React.Component {

	static navigationOptions = {
		header: null,
	};

	async componentDidMount() {
		await this.props.getToken();
	}

	componentWillUpdate(nextProps) {
		if (nextProps.token !== null) {
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
		backgroundColor: 'red',
	},
});

const mapStateToProps = state => ({
	token: state.user.token,
});

const mapDispatchToProps = dispatch => ({
	getToken: () => dispatch(getToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);
