import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { validate } from '../utils/redux-form/validate';
import { RenderField } from '../utils/redux-form/RenderField/RenderField';
import { SAVE_TOKEN } from '../action-types/user';


class Login extends React.Component {

  static navigationOptions = {
    header: null,
  };

  submit = () => {
    const { saveToken, inputValues, navigation } = this.props;
    saveToken(inputValues);
    navigation.navigate('AuthLoading');
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <View>
        <Text style={styles.text}>Enter your login</Text>
        <Field
          name="username"
          component={RenderField}
        />
        <Text style={styles.text}>Enter your password</Text>
        <Field
          name="password"
          component={RenderField}
        />
        <TouchableOpacity style={{ padding: 50 }} onPress={handleSubmit(this.submit)} >
          <Text>
            Log in
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    padding: 50,
    textAlign: 'center',
  },
  inputFocused: {
    padding: 10,
    marginLeft: '15%',
    borderWidth: 3,
    borderColor: 'blue',
    width: '70%',
  }
})

const mapStateToProps = state => ({
  inputValues: state.form.login ? state.form.login.values : null,
});

const mapDispatchToProps = dispatch => ({
  saveToken: (inputValues) => dispatch({ type: SAVE_TOKEN, payload: inputValues }),
});

WrappedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
export default reduxForm({
  form: 'login',
  validate
})(WrappedLogin);
