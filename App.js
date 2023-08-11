import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import Loading from './src/components/Loading';
import Anotation from './src/pages/Anotation';
import Login from './src/pages/Login';
import Read from './src/pages/Read';

const Stack = createNativeStackNavigator();

function App() {
  const [loading, setLoading] = useState(false);
  const [indexData, setIndexData] = useState(0);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [edit]);

  return (
    <>
      <StatusBar style='light' backgroundColor='#3b5998' />
      {loading && <Loading />}
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Entrar">
            {props => <Login {...props} setLoading={setLoading} loading={loading} />}
          </Stack.Screen>
          <Stack.Screen name="Visualizar" >
            {props => <Read {...props} setLoading={setLoading} loading={loading} indexData={indexData} setIndexData={setIndexData} edit={edit} setEdit={setEdit} />}
          </Stack.Screen>
          <Stack.Screen name="Criar" >
            {props => <Anotation {...props} setLoading={setLoading} loading={loading} indexData={indexData} setIndexData={setIndexData} edit={edit} setEdit={setEdit} />}
          </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

export default App;