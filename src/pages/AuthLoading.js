import React from 'react';
import {
	StatusBar,
	View
} from 'react-native';
import { connect } from 'react-redux';
import { getUserData } from '../actions/user';
import Loading from '../components/Loading';


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
			<View>
				<Loading />
				<StatusBar barStyle="default" />
			</View>
		);
	}
}

const mapStateToProps = state => ({
	userData: state.user.userData,
});

const mapDispatchToProps = dispatch => ({
	getUserData: () => dispatch(getUserData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);
