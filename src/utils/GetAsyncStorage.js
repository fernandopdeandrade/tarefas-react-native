import AsyncStorage from "@react-native-async-storage/async-storage";

const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getAsyncStorage = async (key) => {
    try {
      const value = await getItem(key)
      return value;
    } catch (error) {
      console.log(error);
    }
  };

export default getAsyncStorage;