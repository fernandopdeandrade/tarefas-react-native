import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputTitle: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  input: {
    minHeight: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    textAlignVertical: 'top',
    lineHeight: 20,
  },
  containerData: {
    flexDirection: 'row',
    backgroundColor: 'rgb(37,84,160)',
  },
  viewDataInputText: {
    flex: 1,
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  viewHours: {
    marginTop: 25,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputHours: {
    width: 100,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 20
  },
  correctHour: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5
  },
  incorrectHour: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5
  },
  viewButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 10,
  },
})

export default styles;