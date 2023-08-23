import StyleSheet from "react-native-media-query";

const { ids, styles }= StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 800px)': {
    minHeight: 850,
    },
    '@media (max-width: 500px)': {
    minHeight: 400,
    },
  },
  iconContainer: {
    marginTop: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  linear: {
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    height: '100%'
  }
});

export default styles;
export { ids };

