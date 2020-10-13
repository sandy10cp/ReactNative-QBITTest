import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign';
import SplashScreen from './src/screen/SplashScreen';
import BottomTabs from './src/screen/BottomTabs'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{
          title: '',
          headerTransparent: true,
          headerLeft: false
        }} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} options={{
          title: '',
          headerTransparent: true,
          headerLeft: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;