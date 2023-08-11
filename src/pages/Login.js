import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/HomeCss';

const Login = ({ navigation, setLoading }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const checkValueName = async (valueName) => {
    if (valueName.lenght === 0 || valueName === '') {
      Alert.alert(
        'Atenção',
        'Digite seu nome para continuar, você também pode adicionar uma imagem de avatar!',
        [
          {
            text: 'Ok',
            onPress: () => console.log('Ok Pressed'),
            style: 'cancel'
          }
        ]
      )
    } else {
      await saveNameInStorage(valueName);
      setLoading(true);
      (() => navigation.navigate('Visualizar'))();
    }
  }

  const saveNameInStorage = async (valueName) => {
    try {
      await AsyncStorage.setItem('userName', JSON.stringify(valueName));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView>
    <Header userName={userName} />
    <View style={styles.viewHome}>
      <Image style={styles.imageHome} source={require('../images/img-home.jpg')} />
      <View style={styles.viewCadaster}>
      <Text style={styles.textLogin}>Login</Text>
        <TextInput
        style={styles.input}
        value={userName}
        placeholder="Digite seu nome"
        onChangeText={(userName) => setUserName(userName)}
      />
        <TouchableOpacity
          onPress={() => { checkValueName(userName) }}
          style={{ alignItems: 'center', justifyContent: 'center', width: '90%', borderRadius: 3 }}
        > 
          <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={{ top: 0, left: 0, right: 0, position: 'absolute', height: '100%' }} />
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>  
      </View>
    </View>      
    <Footer />  
    </ScrollView>
  );
};

export default Login;