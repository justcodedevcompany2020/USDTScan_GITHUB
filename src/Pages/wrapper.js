import {ActivityIndicator, SafeAreaView, View } from 'react-native';
import WrapperHeader from './WrapperHeader'
import {Gstyals} from '../../Gstyles';
import { useSelector } from 'react-redux';


export default Wrapper = ({children, navigation }) => {
  const routes = navigation.getState()?.routes;
  const name = routes[routes.length - 1].name;
  const {searchData} = useSelector((st)=>st)
  return (
    <SafeAreaView>
        <WrapperHeader name = {name} navigation ={navigation}  />   
        {/* {searchData.loading && name !== "Home" ?
            <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
              <ActivityIndicator size="large" color="rgb(222, 180, 30)" />
            </View>
        :        
        <View style = {Gstyals.Wrapper}>
          {children}
        </View>
    } */}
      </SafeAreaView>
  );
};

