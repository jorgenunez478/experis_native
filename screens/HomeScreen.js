import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, View, Alert, Text } from 'react-native';

const HomeScreen = (props) => {

  useEffect(() => {

  }, []);

  return (
    <View style={styles.container}>
        <Pressable 
          onPress={() => props.navigation.navigate("Login")}
          style={styles.button}
        >
          <Text style={styles.btn_text}>Login</Text>
        </Pressable>
        <Pressable 
          title="Registro"
          onPress={() => props.navigation.navigate("Register")}
          style={styles.button}
        >
          <Text style={styles.btn_text}>Register</Text>
        </Pressable>
        <Pressable 
          onPress={() => Alert.alert('Simple Button pressed')}
          style={styles.button}
        >
          <Text style={styles.btn_text}>Edit Profile</Text>
        </Pressable>
        <StatusBar style="auto" />
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
  }
});

export default HomeScreen