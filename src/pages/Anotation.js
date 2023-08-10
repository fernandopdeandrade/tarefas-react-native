import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { Alert, Button, Pressable, Text, TextInput, View } from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/AnotacaoCss';
import FormatData from '../utils/FormatData';
import getAsyncStorage from '../utils/GetAsyncStorage';

const Anotation = ({navigation}) => {
  
  const [anotation, setAnotation] = useState([]);
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [messageHourCorrect, setMessageHourCorrect] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    handleChangeText();
  }, [time]);

  useEffect(() => {
    getStorageSave();
  }, []);

  const togglePicker = () => {
    setShowPicker(!showPicker);
  }

  const onChange = (_event, selectedDate) => {
    const currentDate = selectedDate || date;
    togglePicker();
    setDate(currentDate);
  };

  const setItem = async (title, value) => {
    try {
      await AsyncStorage.setItem(title, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const getStorageSave = async () => {
    try {
      const value = await getAsyncStorage("anotation");
      const valueName = await getAsyncStorage("userName");
      setUserName(valueName);
      if (value !== null) {
        setAnotation(value);
        value.map((item, index) => {
          if (index === indexData && edit) {
            setBody(item.body);
            setTitle(item.title);
            setDate(new Date());
            setTime(item.hour);
          }
        });
      } else {
        setAnotation([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeText = () => {
    const regexHourMinutes = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    
    if (regexHourMinutes.test(time)) {
      setTime(time);
      setMessageHourCorrect(true);
    } else {
      setMessageHourCorrect(false);
    }
  };

  const verifyAnotation = () => {
    if (title === '' || body === '' || date === '' || time === '') {
      Alert.alert(
        'Atenção!',
        'Você precisa preencher todos os campos para salvar sua anotação!',
        [
          {
            text: 'Ok',
            onPress: () => console.log('Ok Pressed'),
            style: 'cancel'
          }
        ]
      )
    } else {
      saveAnotation();
    }
  }

  const updateAnotation = async () => {
    if (edit) {
      const anotationEdit = {
        title: title,
        body: body,
        date: FormatData(date),
        hour: time,
      }
      const anotationUpdate = anotation;
      anotationUpdate.splice(indexData, 1, anotationEdit);
      setAnotation(anotationUpdate);
      setItem("anotation", anotationUpdate);
      setEdit(false);
      setAnotacao(true);
      setBody('');
      setTitle('');
      setDate(new Date());
      setTime('');
    }
  };

  const saveAnotation = async () => {
    if (!messageHourCorrect) {
      Alert.alert(
        'Atenção!',
        'Você precisa preencher o horário corretamente!',
        [
          {
            text: 'Ok',
            onPress: () => console.log('Ok Pressed'),
            style: 'cancel'
          }
        ]
      )
      return;
    }

    if (edit) {
      updateAnotation();
      return;
    }

    setAnotation([
      ...anotation,
      {
        title: title,
        body: body,
        date: FormatData(date),
        hour: time,
        check: false,
      }
    ]);

    setItem("anotation", [
      ...anotation,
      {
        title: title,
        body: body,
        date: FormatData(date),
        hour: time,
        check: false,
      }
    ]);

    setTimeout(() => {
      setBody('');
      setTitle('');
      setDate(new Date());
      setTime('');
    }, 1000)
  }

  const toGoBack = () => {
    setLeitura(true);
    setLoading(true);
    setAnotacao(false);
    setEdit(false);
  }

  return (
    <>
      <Header userName={userName} />
      <View style={styles.container}>
        <Text style={{color: '#069', fontSize: 15}}>Insira suas anotações!</Text>
        <TextInput
          style={styles.inputTitle}
          value={title}
          onChangeText={(title) => setTitle(title)}
          placeholder='Digite o título da sua anotação aqui...'
        />
        <TextInput
          style={styles.input}
          value={body}
          onChangeText={(body) => setBody(body)}
          placeholder='Digite sua anotação aqui...'
          multiline={true}
        />
        <View style={styles.containerData}>
          <LinearGradient
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={{top: 0, left: 0, right: 0, position: 'absolute', height: '100%'}}/> 
          <Pressable onPress={togglePicker}>
            <View style={styles.viewDataInputText}>
            <Text style={{color: 'white'}}>Clique e selecione uma data: </Text>
              <TextInput 
              style={{color: 'white', fontWeight: 'bold', marginLeft: 10}}
              value={date.toLocaleDateString()}
              placeholder='Selecione a data'
              placeholderTextColor='red'
              editable={false}
              onChangeText={(date) => setDate(date)}
            />            
            </View>
          </Pressable>
          {showPicker && (<DateTimePicker
            value={date}
            display='spinner'
            mode="date"
            placeholder="Selecione a data"
            format="DD-MM-YYYY"
            minimunDate={new Date(2020, 1, 1)}
            maximumDate={new Date(2025, 12, 31)}
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            is24Hour={true}
            onPress={togglePicker}
            onChange={onChange}
          />)}
        </View>
        <View style={styles.viewHours}>
          <TextInput
          style={styles.inputHours}
          placeholder="Horário"
          value={time}
          onChangeText={(time) => setTime(time)}
          />
          <View>
            {messageHourCorrect
              ? (<Text style={styles.correctHour}>Horário correto</Text>)
              : (<Text style={styles.incorrectHour}>Horário incorreto</Text>)}
          </View>
        </View>      
        <View style={styles.viewButtons}>
          <Button
            title='Ver anotações'
            onPress={() => toGoBack()} />

          <Button
            color= 'green'
            title='Salvar'
            onPress={verifyAnotation} />      
        </View>
      </View>      
      <Footer />
    </>
      
  )
}

export default Anotation;