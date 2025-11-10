// css/Login.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    marginTop: 20,
    },

overlayText: {
    position: 'absolute',
    top: '35%',
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 4,
    
    },

getstartcontainer: {
    marginLeft:48,
    borderRadius: 10,
    position: 'absolute',
    marginTop:'184%',
    
    },



funtravelcontainer:{
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 30,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    },

funtravel:{
    fontSize: 35,
    fontWeight: 'bold',
    textAlign:'center',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 4,
    
    },

  gradientButton: {
    borderRadius: 30,
    paddingVertical: 12,
    marginLeft:45,
    width:'75%',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
