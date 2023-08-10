import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerLeitura: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  textH2: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: -15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    color: 'gray',
  },
  infoAnotation: {
    flex: 1,
    Width: '98%',
    margin: 10,
    padding: 10,
  },
  viewCheched: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'right',
    maxWidth: 360,
    marginTop: -5,
    marginBottom: 20,
  },
  titleDescription: {
    flex: 1,
    flexDirection: 'column',
    minWidth: '98%',    
    margin: 10,
    padding: 10,
  },
    imagePapel: {
    position: 'absolute',
    width: '106.3%',
    height: '109%',
    borderRadius: 5,
    margin: '0 auto',
  },
  viewTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 360,
  },
  titleP: {
    fontSize: 18,
    color: 'rgba(18,2,45, 0.7)',
    padding: 5,
    fontWeight: '700',
  },
  viewDescription: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
    maxWidth: 360,
    padding: 10,
  },
  descDescription: {
    fontSize: 18,
    textAlign: 'center',
    color: 'rgba(18,2,45, 0.7)',
    fontWeight: '700',
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    width: 90,

  },
  eleDescription: {
    width: 300,
    fontSize: 16,
    textAlign: 'left',
    padding: 10,
    color: 'rgba(18,2,45, 0.7)',
    lineHeight: 30,
  },
  dateDescription: {
    fontSize: 16,
    padding: 5,
    textAlign: 'center',
    color: 'rgba(18,2,45, 0.7)',
    fontWeight: '700',
  },
  viewButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: 360,
  },
  buttonEditar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  buttonExcluir: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  editar: {
   color: "white"
  },
  excluir: {
    color: 'white'
  },
  btnLeitura: {
    width: 70,
    height: 70,
    backgroundColor: '#069',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginTop: 10,
  },
  viewOrder: {
    flex: 1,
    flexDirection: 'row',
    maxWidth: 360,
    margin: '13%',
  },
  btnOrder: {
    padding: 10,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    margin: 5,
  },
  btnNoOrder: {
    padding: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    margin: 5,
  },
  btnClear: {
    padding: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    margin: 5,
  },
  textMessageWarning: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    color: 'red',
  },
  mais: {
    color: '#fff',
    fontSize: 30,
  },
  orderText: {
    color: '#fff',
    fontSize: 16,
  }
})

export default styles;