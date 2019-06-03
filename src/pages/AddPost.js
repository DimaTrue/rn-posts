import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { validate } from '../utils/redux-form/validate';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { RenderField } from '../utils/redux-form/RenderField/RenderField';
import { ADD_POST } from '../action-types/posts';

class AddPost extends React.Component {

  static navigationOptions = {
    header: null,
  };

  submit = () => {
    const { addPost, inputValues, navigation } = this.props;
    addPost([inputValues]);
    navigation.navigate('AuthLoading');
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <>
        <View style={styles.header}>
          <TouchableOpacity style={styles.buttonHeader} onPress={() => this.props.navigation.navigate('Posts')} >
            <Text>Return</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Add Post</Text>
        </View>
        <View style={styles.container}>
          <Field
            name="title_post"
            component={RenderField}
            label="Add title of your post"
          />
          <Field
            name="post"
            component={RenderField}
            label="Add description of your post"
          />
          <View>
            <TouchableOpacity style={styles.sendBtn} onPress={handleSubmit(this.submit)} >
              <Text style={styles.btnText}> Send Post </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
}

const mapStateToProps = state => ({
  inputValues: state.form.add_post ? state.form.add_post.values : null,
});

const mapDispatchToProps = dispatch => ({
  addPost: (inputValues) => dispatch({ type: ADD_POST, payload: inputValues }),
});

WrappedAddPost = connect(mapStateToProps, mapDispatchToProps)(AddPost);
export default reduxForm({
  form: 'add_post',
  validate
})(WrappedAddPost);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#aaa',
    alignItems: 'center',
    height: 75,
    paddingTop: 15,
  },
  buttonHeader: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#bbb',
    padding: 10,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    padding: 10,
    color: '#fff',
    marginLeft: 50,
  },
  sendBtn: {
    marginTop: 55,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  btnText: {
    color: '#fff',
  },
})