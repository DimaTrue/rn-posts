import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import RootContainer from './src/root';
import store from './src/store';


export default () => (
  <Provider store={store}>
    <View style={styles.container}>
      <RootContainer />
    </View>
  </Provider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
