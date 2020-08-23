import React from 'react';
import {LoginScreen} from './src/screens/LoginScreen';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  Alert,
  Keyboard,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={style.mainView}>
      <LoginScreen />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  mainView: {
    margin: 40,
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
