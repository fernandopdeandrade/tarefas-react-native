import { StyleSheet, Text, View } from "react-native";

const Loading = () => {
  return (
    <View style={styles.loading}>
      <Text style={styles.textLoading}>Loading...</Text>
    </View>
  );
}

export default Loading;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    minWidth: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'white',
    zIndex: 999,
  },
  textLoading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
  }
});