import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View, Pressable, Text} from 'react-native';
import { Login } from '../api.js';

const LoginScreen = () => {

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [showError, setShowError] = React.useState(false);
  const [error, setError] = React.useState('');
  const [showSuccess, setShowSuccess] = React.useState(false);

  //validate fields
  const validateFields = () => {
    setShowSuccess(false);
    if (email.length === 0) {
      setShowError(true);
      setError('Email is required');
      return false;
    } else if (password.length < 8) {
      setShowError(true);
      setError('Password is required and must be at least 8 characters');
      return false;
    } else {
      setShowError(false);
      setError('');
      return true;
    }
  }

  //login api request
  const login = async () => {
    const response = await Login({email: email, password: password});
    if (response) {
      return true;
    } else {
      return false;
    }
  }

  //submit event handlers
  const submit = async () => {
    if (validateFields()) {
      if(login()) {
        setShowSuccess(true);
      }else{
        setShowError(true);
        setError('Error in login');
      }
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="email"
          keyboardType="email-address"
          inputMode="email"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="password"
          secureTextEntry={true}
        />
      </SafeAreaView>
      {showError &&
        <Text style={styles.textError}>{error}</Text>
      }
      <Pressable 
        onPress={submit}
        style={styles.button}
      >
        <Text style={styles.btn_text}>Login</Text>
      </Pressable>
      {showSuccess &&
        <Text style={styles.textSuccess}>Login successFully!!</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#05aa9f',
    margin: 10,
    width: 200,
    height: 50,
  },
  btn_text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  input: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textError: {
    color: 'red',
    fontSize: 15,
  },
  textSuccess: {  
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
  }
});

export default LoginScreen