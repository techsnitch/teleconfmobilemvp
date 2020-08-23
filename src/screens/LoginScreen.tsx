import React, {Component, Props} from 'react';
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
  AsyncStorage,
} from 'react-native';

const STORAGE_KEY = 'id_token';

export class LoginScreen extends Component {
  async _onValueChange(item: string, selectedValue: string) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }
  constructor(props: any) {
    super(props);
    this.state = {
      UserEmail: '',
      UserPassword: '',
    };
  }

  /// ERROR MESSAGE TypeError: Network request failed

  UserLoginFunction = () => {
    const UserEmail = this.state;
    const UserPassword = this.state;
    Keyboard.dismiss();

    // Replace the fetch url to the correct database url.

    fetch('http://localhost:27.0.0.1/user_login.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        // pass input server to server
        email: UserEmail,
        Password: UserPassword,
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        Alert.alert('Success');
        this._onValueChange(STORAGE_KEY, responseData.id_token);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  render() {
    return (
      <View>
        <Text style={style.loginText}>User Login Form</Text>

        <TextInput
          style={style.inputStyle}
          // Adding hint in Text Input using Place holder.
          placeholder="Enter User Email"
          onChangeText={(UserEmail) => this.setState({UserEmail})}
        />

        <TextInput
          style={style.inputStylePassword}
          // Adding hint in Text Input using Place holder.
          placeholder="Enter User Password"
          onChangeText={(UserPassword) => this.setState({UserPassword})}
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
          secureTextEntry={true}
        />

        <Button
          title="Click Here To Login"
          onPress={this.UserLoginFunction}
          color="#2196F3"
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  loginText: {
    fontSize: 20,
    textAlign: 'center',
  },
  inputStylePassword: {
    marginTop: 50,
    backgroundColor: '#2196F3',
    marginBottom: 40,
  },
  inputStyle: {
    marginTop: 30,
    backgroundColor: '#2196F3',
  },
});
