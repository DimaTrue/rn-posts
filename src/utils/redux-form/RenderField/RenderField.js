import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

export const RenderField = ({ input: { onChange, ...restInput }, meta: { touched, error, warning }, label }) => {
  return (
    <View>
      <TextInput style={styles.input} placeholder={label} placeholderTextColor="#303356" onChangeText={onChange} {...restInput} />
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
  },
  input: {
    borderBottomWidth: 3,
    borderColor: 'grey',
    width: 250,
    marginTop: 20,
  },
})