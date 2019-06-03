import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert, AsyncStorage } from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import noAvatar from '../../assets/add_photo.png';
import { connect } from 'react-redux';
import { removeToken } from '../actions/user';

class Profile extends React.Component {

  state = {
    image: null,
  };

  logOut = () => {
    const { removeToken, navigation } = this.props;
    removeToken();
    navigation.navigate('AuthLoading')
  }

  takeFromCamera = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.CAMERA);
    if (status === 'granted') {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
    }
  }

  takeFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  }

  render() {
    const { navigation } = this.props;
    const { image } = this.state;
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
        <TouchableOpacity onPress={() => Alert.alert('Hello, User', 'Choose your destiny',
          [
            { text: 'Camera', onPress: () => this.takeFromCamera() },
            { text: 'Gallery', onPress: () => this.takeFromGallery() },
          ])
        }>
          <Image
            style={styles.image}
            source={image ? { uri: image } : noAvatar}
          />
        </TouchableOpacity>
      </View >
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeToken: () => dispatch(removeToken()),
});

export default connect(null, mapDispatchToProps)(Profile);

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