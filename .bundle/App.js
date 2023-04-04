import 'react-native-gesture-handler';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/store/configStore';

export default function App(){
  
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}