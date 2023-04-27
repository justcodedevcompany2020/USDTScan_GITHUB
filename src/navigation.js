import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import search2 from './Pages/search2';
import home from './Pages/home';
import {Search3} from './Pages/search3';
import TUSwallet from './Pages/TUSwallet';
import notFound from './Pages/notFound';
import {HomeHeade} from './Components/HomeHeader';
import {Header} from './Components/Header';
import {Login} from './Pages/Login';
import {RecoverPassword} from './Pages/RecoverPassword';
import {Register} from './Pages/Register';
import Drawers from './Drawer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkToken } from './store/action/action';
import { Profile } from './Pages/profili';



export default Navigation = () => {
  const Stack = createNativeStackNavigator();
  const {auth} = useSelector((st)=>st)
  dispatch = useDispatch()
  useEffect(()=>{
    dispatch(checkToken())
  },[auth.token])
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name = 'Drawers'
          component={Drawers}        
        />
        <Stack.Screen
          name="Home"
          component={home}
          options={{
            header: ({navigation}) => (
              <HomeHeade navigation = {navigation}   onPress1={() => navigation.navigate('login')}  />
            ),
          }}
        />
        <Stack.Screen
          name="search2"
          component={search2}
          options={{
            gestureEnabled: false,
            header: ({navigation}) => (
              <Header navigation = {navigation} onPress1={() => navigation.navigate('login')} onPress={() => navigation.navigate('Home')} />
            ),
          }}
        />
        <Stack.Screen
          name="search"
          component={TUSwallet}
          options={{
            header: ({navigation}) => (
              <Header onPress1={() => navigation.navigate('login')} onPress={() => navigation.navigate('Home')} />
            ),
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="search3"
          component={Search3}
          options={{
            header: ({navigation}) => (
              <Header onPress1={() => navigation.navigate('login')} onPress={() => navigation.navigate('Home')} />
            ),
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="notFound"
          component={notFound}
          options={{
            header: ({navigation}) => (
              <Header onPress1={() => navigation.navigate('login')} onPress={() => navigation.navigate('Home')} />
            ),
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="recovery"
          component={RecoverPassword}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};
