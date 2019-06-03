import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import noAvatar from '../../assets/add_photo.png';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { validate } from '../utils/redux-form/validate';
import { RenderField } from '../utils/redux-form/RenderField/RenderField';
import { removeUserData } from '../actions/user';
import { getProfileData, removeProfileData, getAvatar, removeAvatar } from '../actions/profile';
import { SAVE_PROFILEDATA, SAVE_AVATAR } from '../action-types/profile';
import Loading from '../components/Loading';


class Profile extends React.Component {

  static navigationOptions = {
    header: null,
  };

  state = {
    isEditing: false,
  };

  componentDidMount() {
    const { getProfileData, getAvatar } = this.props;
    getProfileData();
    getAvatar();
  }

  submit = () => {
    const { saveProfileData, inputValues } = this.props;
    saveProfileData(inputValues);
    this.setState({ isEditing: false });
  };

  logOut = () => {
    const { removeUserData, removeProfileData, removeAvatar, navigation } = this.props;
    removeUserData();
    removeProfileData();
    removeAvatar();
    navigation.navigate('AuthLoading');
  }

  takeFromCamera = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.CAMERA);
    if (status === 'granted') {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
      if (!result.cancelled) {
        this.props.saveAvatar(result.uri);
      }
    }
  }

  takeFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      this.props.saveAvatar(result.uri);
    }
  }

  render() {
    const { userData, navigation, handleSubmit, profileData, avatar, loading } = this.props;
    const { isEditing } = this.state;
    return (
      <View style={styles.wrap}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.buttonHeader} onPress={() => navigation.navigate('Posts')} >
            <Text>Go Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonHeader} onPress={this.logOut} >
            <Text>Log Out</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Profile</Text>
        <TouchableOpacity onPress={() => Alert.alert(
          `Hello, ${profileData && profileData.profileName ? profileData.profileName : ''}`, `Upload photo from:`,
          [
            { text: 'Camera', onPress: () => this.takeFromCamera() },
            { text: 'Gallery', onPress: () => this.takeFromGallery() },
          ])
        }>
          <Image
            style={styles.image}
            source={avatar ? { uri: avatar } : noAvatar}
          />
        </TouchableOpacity>
        <View>
          <Text>Login: {userData.username}</Text>
        </View>
        {isEditing ?
          <View>
            <View>
              <Field
                name="profileName"
                component={RenderField}
              />
            </View>
            <View>
              <Field
                name="profileLastName"
                component={RenderField}
              />
            </View>
            <TouchableOpacity onPress={handleSubmit(this.submit)}>
              <Text>Save Changes</Text>
            </TouchableOpacity>
          </View> :
          loading ?
            <Loading /> :
            <View>
              <View>
                <Text>First Name: {profileData && profileData.profileName ? profileData.profileName : 'unknown'}</Text>
              </View>
              <View>
                <Text>Last Name: {profileData && profileData.profileLastName ? profileData.profileLastName : 'unknown'}</Text>
              </View>
              <TouchableOpacity onPress={() => this.setState({ isEditing: true })}>
                <Text>Edit Profile</Text>
              </TouchableOpacity>
            </View>}
      </View >
    );
  }
}

const mapStateToProps = state => ({
  userData: state.user.userData,
  inputValues: state.form.profile ? state.form.profile.values : null,
  profileData: state.profile && state.profile.profileData,
  loading: state.profile && state.profile.loading,
  avatar: state.profile && state.profile.avatar,
  loadingAvatar: state.profile && state.profile.loadingAvatar,
});

const mapDispatchToProps = dispatch => ({
  getProfileData: () => dispatch(getProfileData()),
  saveProfileData: (inputValues) => dispatch({ type: SAVE_PROFILEDATA, payload: inputValues }),
  removeUserData: () => dispatch(removeUserData()),
  removeProfileData: () => dispatch(removeProfileData()),
  getAvatar: () => dispatch(getAvatar()),
  saveAvatar: (value) => dispatch({ type: SAVE_AVATAR, payload: value }),
  removeAvatar: () => dispatch(removeAvatar()),
});

WrappedProfile = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default reduxForm({
  form: 'profile',
  validate
})(WrappedProfile);

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'grey',
  },
  buttonHeader: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  wrap: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    marginBottom: 50,
  },
  image: {
    borderRadius: 90,
    width: 180,
    height: 180,
  }
})