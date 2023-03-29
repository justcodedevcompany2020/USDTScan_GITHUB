import 'react-native-gesture-handler';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/store/configStore';
import { Text } from 'react-native-svg';

export default function App(){

  return (
      <Provider store={store}>
        <Navigation />
      </Provider>
  )
}