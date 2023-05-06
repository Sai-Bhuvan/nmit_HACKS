import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  screen: {
    flex: 1,
    justifyContent: "center"
  },

  container: {
    paddingTop: 15,
    marginTop: 20,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    borderColor: '#238',
    borderWidth: 2,    
  },


  inputLabel: {
    fontSize: 20,
    fontWeight: 300,
  },

  input: {
    margin: 10,  
    borderWidth: 2,
    
  },

  touchableComp: {
    paddingTop: 15,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: "300",
    paddingStart: 15,
    textAlign: 'center',
  },

  subHeaderText: {
    flex: 1,
    textAlign: "center",    
  },

  headerText: {    
    textAlign: "center",
    fontSize: 60,
    paddingTop: 40,    
    marginTop: 20,
  }


});