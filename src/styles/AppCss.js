import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  header: {
    top: 0,
    left: 0,
    width: '100%',
    minHeight: 150,
    backgroundColor: '#069',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  viewLogoName: {
    width: '30%',
    marginLeft: 20,
  },
  imageLogo: {
    width: 50,
    height: 50,
    marginTop: 40,
    borderRadius: 5,
    marginLeft: 6,
  },  
  AppName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  viewImageAvatar: {
    alignItems: 'center',
    width: '70%',
    marginTop: 45,
  },
  nameUserHeader: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '100',
    margin: 5,
  },
});

export default styles;