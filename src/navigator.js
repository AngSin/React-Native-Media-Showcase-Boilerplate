import { StackNavigator } from 'react-navigation';
import routes from './routes';

export default Navigator = StackNavigator(
  routes, 
  { 
    headerMode: 'float', 
    initialRouteName: 'home', 
    navigationOptions: {
      headerStyle: { 
        backgroundColor: 'rgb(37,37,37)',
        height: 40,
      } 
    }
  }
);
