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
          <Text style={styles.text}>Profile</Text>
          <TouchableOpacity style={styles.buttonHeader} onPress={this.logOut} >
            <Text>Log Out</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
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
            <Text style={styles.titles}>Login: <Text style={styles.boldText}>{userData.username}</Text></Text>
          </View>
          {isEditing ?
            <View>
              <View>
                <Field
                  name="profileName"
                  component={RenderField}
                  label="Change your name"
                />
              </View>
              <View>
                <Field
                  name="profileLastName"
                  component={RenderField}
                  label="Change your last name"
                />
              </View>
              <TouchableOpacity style={styles.btn} onPress={handleSubmit(this.submit)}>
                <Text style={styles.saveBtn}>Save Changes</Text>
              </TouchableOpacity>
            </View> :
            loading ?
              <Loading /> :
              <View>
                <View>
                  <Text style={styles.titles}>First Name: <Text style={styles.boldText}>{profileData && profileData.profileName ? profileData.profileName : 'unknown'}</Text></Text>
                </View>
                <View>
                  <Text style={styles.titles}>Last Name: <Text style={styles.boldText}>{profileData && profileData.profileLastName ? profileData.profileLastName : 'unknown'}</Text></Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => this.setState({ isEditing: true })}>
                  <Text style={styles.editBtn}>Edit Profile</Text>
                </TouchableOpacity>
              </View>}
        </View>
      </View>
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
    flexDirection: 'row',
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 75,
    paddingTop: 15,
    width: '100%',
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
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    padding: 10,
    color: '#fff'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#bbb',
    width: '100%',
  },
  image: {
    borderRadius: 90,
    width: 180,
    height: 180,
    marginTop: 5,
    marginBottom: 5,
  },
  titles: {
    fontSize: 15,
  },
  boldText: {
    fontWeight: 'bold',
  },
  btn: {
    marginTop: 30,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  editBtn: {
    color: '#f4b342',
    textAlign: 'center',
  },
  saveBtn: {
    color: '#4da85e',
    textAlign: 'center',
  },
})