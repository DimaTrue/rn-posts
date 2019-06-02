import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class Post extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
      //  onPress={this.props.handle}
      >
        <View>
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
          />
          <Text style={styles.text} >{this.props.title}</Text>
          <View >
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
    flexDirection: 'row',
    backgroundColor: '#333',
    padding: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  text: {
    fontSize: 25,
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
  },
});

export default Post;