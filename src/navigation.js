import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import search2 from './Pages/search2';
import home from './Pages/home';
import {Search3} from './Pages/search3';
import TUSwallet from './Pages/TUSwallet';
import notFound from './Pages/notFound';
import {HomeHeade} from './Components/HomeHeader';
import {Header} from './Components/Header';

export default Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={home}
          options={{
            header: () => <HomeHeade />,
          }}
        />
        <Stack.Screen
          name="search2"
          component={search2}
          options={{
            gestureEnabled: false,
            header: ({navigation}) => (
              <Header onPress={() => navigation.navigate('Home')} />
            ),
          }}
        />
        <Stack.Screen
          name="search"
          component={TUSwallet}
          options={{
            header: ({navigation}) => (
              <Header onPress={() => navigation.navigate('Home')} />
            ),
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="search3"
          component={Search3}
          options={{
            header: ({navigation}) => (
              <Header onPress={() => navigation.navigate('Home')} />
            ),
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="notFound"
          component={notFound}
          options={{
            header: ({navigation}) => (
              <Header onPress={() => navigation.navigate('Home')} />
            ),
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
