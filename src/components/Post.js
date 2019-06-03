import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const Post = (props) => {
  return (
    <View style={styles.wrap}>
      <View style={styles.block}>
      <Image
        style={styles.img}
        source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
      />
      <Text style={styles.text} >{props.title}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.textBody} >{props.body}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#333',
    padding: 10,
    margin: 5,
  },
  block: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
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
  body: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '100%',
  },
  textBody: {
    fontSize: 15,
    textAlign: 'center',
    padding: 10,
  },
});

export default Post;