import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

export const RenderField = ({ input: { onChange, ...restInput }, meta: { touched, error, warning } }) => {
  return (
    <View>
      <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
      {touched &&
        ((error && <Text style={styles.errorNotice}>{error}</Text>) ||
          (warning && <Text>{warning}</Text>))}
    </View>
  )
}

const styles = StyleSheet.create({
  errorNotice: {
    color: 'red',
    fontSize: 12,
    display: 'flex',
  },
  input: {
    padding: 10,
    marginLeft: '15%',
    borderWidth: 3,
    borderColor: 'grey',
    width: '70%',
  },
})