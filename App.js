import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home' 
          component={HomeScreen}
          options={{
            headerStyle: { backgroundColor: '#05aa9f'},
          }}   
        />
        <Stack.Screen 
          name='Register' 
          component={RegisterScreen} 
          options={{
            headerStyle: { backgroundColor: '#05aa9f'},
          }}
        />
        <Stack.Screen 
          name='Login' 
          component={LoginScreen} 
          options={{
            headerStyle: { backgroundColor: '#05aa9f'},
          }}  
        />
      </Stack.Navigator>
    </NavigationContainer>    
  );
}

export default App;
