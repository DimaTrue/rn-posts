import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class Post extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
      //  onPress={this.props.handle}
      >
        <View style={styles.box}>
          <Image
            style={styles.img}
            source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
          />
          <Text style={styles.text} >{this.props.title}</Text>
          <View>
            <Text style={
              //this.props.active ? 
              styles.textBodyOpen 
            // : styles.textBody
              } >{this.props.body}</Text>
          </View>
        </View>

      </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#333',
    padding: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 30,
    marginTop: 10,
  },
  box: {
    flex: 1,
    alignItems: 'center',
  },
  img: {
    width: 50, 
    height: 50, 
    borderRadius: 50,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: '#fff'
  },
  textBody: {
    display: 'none',
  },
  textBodyOpen: {
    fontSize: 25,
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});

export default Post;