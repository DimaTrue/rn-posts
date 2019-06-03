import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { validate } from '../utils/redux-form/validate';
import { RenderField } from '../utils/redux-form/RenderField/RenderField';
import { SAVE_USERDATA } from '../action-types/user';


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
