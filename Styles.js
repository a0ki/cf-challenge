import { StyleSheet, Dimensions } from 'react-native';

const primaryColor = "#3629B7";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Poppins-Bold',
    backgroundColor: primaryColor,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  button_login: {
    width: Dimensions.get('window').width,
    height: 44,
    marginTop: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primaryColor,
  },
  rectangle: {
    width: Dimensions.get('window').width,
    height: 704,
    marginTop: 44,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
  },
  welcomeContainer: {
    marginTop: 32,
    marginLeft: 24,
  },
  text_login: {
    lineHeight: 28,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    fontSize: 14,
  },
  welcomeText: {
    color: primaryColor,
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 28,
  },
});

export default styles;