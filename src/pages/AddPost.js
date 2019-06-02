import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { validate } from '../utils/redux-form/validate';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { RenderField } from '../utils/redux-form/RenderField/RenderField';
import { ADD_POST } from '../action-types/posts';

class AddPost extends React.Component {

  submit = () => {
    const { addPost, inputValues, navigation } = this.props;
    addPost(inputValues);
    navigation.navigate('Posts');
    console.warn(this.props.inputValues)
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        <Text>
          AddPost
        </Text>
        <Text style={styles.text}>Add title of your post</Text>
        <Field
          name="title_post"
          component={RenderField}
        />
        <Text style={styles.text}>Add your post</Text>
        <Field
          name="post"
          component={RenderField}
        />
        <TouchableOpacity style={{ padding: 50 }} onPress={handleSubmit(this.submit)} >
          <Text>
            Send Post
          </Text>
        </TouchableOpacity>
      </View>
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
  container: {
    flex: 1,
    backgroundColor: '#aaa',
  }
})