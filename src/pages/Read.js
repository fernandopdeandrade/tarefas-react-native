import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles, { ids } from '../styles/LeituraCss';
import getAsyncStorage from '../utils/GetAsyncStorage';
import SortTarefas from '../utils/SortTarefas';

const Read = ({ navigation, setLoading, loading, setIndexData, setEdit }) => {
  const [anotation, setAnotation] = useState([]);
  const [orderStorage, setOrderStorage] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    (async () => {
      const value = await getAsyncStorage("anotation");
      const valueName = await getAsyncStorage("userName");
      setUserName(valueName);
      if (value !== null) {
        setAnotation(value);
      }
    })();

    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [loading]);

  const order = async () => {
    try {
      const orderData = SortTarefas(anotation);
      if (orderData === null) {
        return;
      } 
      setOrderStorage(!orderStorage);
      setAnotation(orderData);
      await AsyncStorage.setItem("anotation", JSON.stringify(orderData));
    } catch (error) {
      console.log(error);
    }
  };
    
  useEffect(() => {
    if (orderStorage) {
      Alert.alert(
        'Atenção!',
        'Você deseja ordenar as tarefas?',
        [
          {
            text: 'Cancelar',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
          },
          {
            text: 'Ordenar',
            onPress: () => {
              order();
            }
          }
        ]
      )
    }
  }, [orderStorage]);

  const goAnotation = () => {
    setLoading(true);
    navigation.navigate('Criar');
  };

  const editIndex = (index) => {
    console.log('Sou o index do editIndex', index);
    setEdit(true);
    setIndexData(index);
    navigation.navigate('Criar');
  };

  const clearAsyncStorageIndex = (index) => {
    anotation.splice(index, 1);
    setAnotation(anotation);
    AsyncStorage.setItem("anotation", JSON.stringify(anotation));
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  };

  const chekOrNotCheck = (ele, index) => {
    if (ele.check === false) {
      ele.check = true;
      anotation.splice(index, 1, ele);
      setAnotation(anotation);
      AsyncStorage.setItem("anotation", JSON.stringify(anotation));
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000)
    } else {
      ele.check = false;
      anotation.splice(index, 1, ele);
      setAnotation(anotation);
      AsyncStorage.setItem("anotation", JSON.stringify(anotation));
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000)
    }
  };

  const clearAsyncStorage = async () => {
    Alert.alert(
      'Atenção!',
      'Você tem certeza que deseja limpar todas as anotações?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'Limpar',
          onPress: () => {
            AsyncStorage.clear();
            setAnotation([]);
            setEdit(false);
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 1000)
          }
        }
      ]
    )
  }

  return (
    <ScrollView>
      <Header userName={userName} />
     <View style={styles.containerLeitura}>
      <Text style={styles.textH2}>Minhas tarefas</Text>
      {
        anotation !== null && anotation.length > 0
          ?
          (<View style={styles.infoAnotation}>{anotation.map((ele, index) => {
            return (
              <View key={index} style={styles.titleDescription}>
                <Image style={styles.imagePapel} source={require('../images/fundo-papel.jpg')} dataSet={{ media: ids.imagePapel }}/>
                <View style={styles.viewCheched}>
                  {
                    !ele.check
                      ? <Text style={{ color: 'red', marginRight: 10, fontWeight: 900, fontSize: 16, marginTop: 5 }}>Concluír</Text>
                      : <Text style={{ color: 'green', marginRight: 10, fontWeight: 900, fontSize: 16, marginTop: 5 }}>Concluída</Text>
                  }                    
                  <Icon
                    name={ele.check ? 'check' : 'circle-thin'}
                    size={30}
                    color={ele.check ? 'green' : 'red'}
                    onPress={() => chekOrNotCheck(ele, index)} />             
                </View>
                <View style={styles.viewTitle}><Text style={styles.titleP}>Título: {ele.title}</Text>
                </View>
                <View style={styles.viewDescription}>
                  <Text style={styles.descDescription}>Descrição</Text>
                  <Text style={styles.eleDescription}>
                    <Icon name="pencil" size={18} color="#900" /> {ele.body}
                  </Text>
                </View>
                <View style={styles.viewDate}>
                  <Text style={styles.dateDescription}>Hora: {ele.hour}</Text>
                </View>
                <View style={styles.viewDate}>
                  <Text style={styles.dateDescription}>Data: {ele.date}</Text>
                </View>
                <View style={styles.viewButton}>
                <TouchableOpacity style={styles.buttonEditar} onPress={() => editIndex(index)}>
                  <Text style={styles.editar}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonExcluir} onPress={() => clearAsyncStorageIndex(index)}>
                  <Text style={styles.excluir}>Excluir</Text>
                </TouchableOpacity>
                </View>
              </View>
            )
          })}
        </View>)
        : (<Text style={styles.textMessageWarning}>Nenhuma tarefa encontrada!</Text>)
      }
      <TouchableOpacity style={styles.btnLeitura} onPress={goAnotation}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={{ top: 0, left: 0, right: 0, position: 'absolute', height: '100%', borderRadius: 35}} />
       <Text style={styles.mais}>+</Text>
      </TouchableOpacity>
        <View style={styles.viewOrder}>
        <TouchableOpacity style={styles.btnOrder} onPress={() => setOrderStorage(true)}>
        <Text style={styles.orderText}>Ordenar lista</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnClear} onPress={clearAsyncStorage}>
        <Text style={styles.orderText}>Excluir tudo</Text>
        </TouchableOpacity>
        </View>
      </View>     
    <Footer />
    </ScrollView>

  )
}

export default Read;


