import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Anotation from './src/pages/Anotation';
import Login from './src/pages/Login';
import Read from './src/pages/Read';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Read" component={Read} />
        <Stack.Screen name="Anotation" component={Anotation} />          
      </Stack.Navigator>
    </NavigationContainer>   
    </>
  );
}

export default App;