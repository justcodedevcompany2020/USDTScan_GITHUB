import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import search2 from './Pages/search2';
import home from './Pages/home';
import { Search3 } from './Pages/search3';
import TUSwallet from './Pages/TUSwallet';
import notFound from './Pages/notFound';


export default Navigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="search2"
          component={search2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="search"
          component={TUSwallet}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="search3"
          component={Search3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="notFound"
          component={notFound}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};