import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  headerOuter: {
    paddingTop: 20,
    height: 80,
    borderBottomWidth: 0,
  },
  headerInner: {
  },
  leftComponent: {
   display: 'flex',
   flexDirection: 'row',
  },
  avatar: {
    backgroundColor: 'grey'
  },
  logo: {
    marginRight: 10,
  },
  text: {
    color: '#ddb500',
    fontWeight:
    'bold', fontSize: 18,
    paddingTop: 3,
    paddingBottom: 3,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#333',
  },
  modalInnerContainer: {
    alignItems: 'flex-start',
  },
  modalHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#111',
    width: '100%',
    height: 70,
    padding: 15,
    paddingTop: 20,
    paddingBottom: 10,
  },
  modalCross: {
    marginRight: 20,
  },
  modalCloseText: {
    color: '#ddb500',
    fontSize: 18,
    marginTop: 8,
    marginLeft: 10,
  },
  modalMeContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
  },
  modalMeText: {
    color: 'white',
    fontSize: 22,
    marginTop: 10,
    marginLeft: 20,
  },
  modalLogout: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
  },
  modalLogoutText: {
    color: '#ddb500',
    marginLeft: 10,
    fontSize: 20,
  },
  modalLogoutIcon: {
    marginRight: 20,
  },
});