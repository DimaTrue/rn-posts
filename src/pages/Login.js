import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { validate } from '../utils/redux-form/validate';
import { RenderField } from '../utils/redux-form/RenderField/RenderField';
import { SAVE_USERDATA } from '../action-types/user';
import pic from '../../assets/world.png';


class Login extends React.Component {

  static navigationOptions = {
    header: null,
  };

  submit = () => {
    const { saveUserData, inputValues, navigation } = this.props;
    saveUserData(inputValues);
    navigation.navigate('AuthLoading');
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        <Field
          name="username"
          component={RenderField}
          label="Enter your login"
        />
        <Field
          name="password"
          component={RenderField}
          label="Enter your password"
        />
        <TouchableOpacity style={styles.btn} onPress={handleSubmit(this.submit)} >
          <Text> Log in </Text>
        </TouchableOpacity>
        <Image source={pic} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    padding: 50,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#bbb',
    paddingTop: 50,
  },
  btn: {
    marginTop: 50,
    marginBottom: 50,
    padding: 10,
  },
})

const mapStateToProps = state => ({
  inputValues: state.form.login ? state.form.login.values : null,
});

const mapDispatchToProps = dispatch => ({
  saveUserData: (inputValues) => dispatch({ type: SAVE_USERDATA, payload: inputValues }),
});

WrappedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
export default reduxForm({
  form: 'login',
  validate
})(WrappedLogin);
