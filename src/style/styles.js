import { Platform } from 'react-native';

export default {
  page: { flex: 1, backgroundColor: 'rgb(10,10,10)' },
  slide: { 
    width: '50%', 
    borderWidth: 1, 
    borderColor: 'green'
  },
  slider: {
    overflow: 'visible', 
    borderWidth: 1, 
    borderColor: 'white',
    flexDirection: 'row', 
    justifyContent: 'center'
  },
  slideContainer: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    width: 300 
  }
}