import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const Post = (props) => {
  return (
    <View style={styles.box}>
      <Image
        style={styles.img}
        source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
      />
      <Text style={styles.text} >{props.title}</Text>
      <View>
        <Text style={
          styles.textBody
        } >{props.body}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#333',
    padding: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 30,
    marginTop: 10,
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
    fontSize: 25,
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});

export default Post;