import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Svgs} from '../Svg/svg';
import img from '../images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from '../store/action/action';
import { useEffect } from 'react';



const windowHeight = Dimensions.get('window').height;


export const Header = ({onPress,onPress1,navigation}) => {
  const {auth} = useSelector((st)=>st)
  const dispatch = useDispatch()
  useEffect(()=>{
    console.log(auth.token)
    if(auth.token){
      navigation.navigate('Profile')
    }
  },[])
  return (
    <SafeAreaView
      style={[
        stayles.header,
        {backgroundColor: '#e3eee9', height:Platform.OS ==='ios'? windowHeight /8.5:windowHeight /11},
      ]}
      forceInset={{
        bottom: 'always'
      }}
      >
      <View style={Platform.OS ==='ios'? stayles.icon:stayles.androidicone}>
          <TouchableOpacity   onPress={onPress} > 
              <Svgs />
          </TouchableOpacity>
      </View>
      <Image style={stayles.logo} source={img} />

      {auth.token ? 
      <View style={Platform.OS ==='ios'? stayles.icon1:stayles.androidicone1}>
        <TouchableOpacity   onPress={onPress1} > 
            <Svgs title='user' />
          </TouchableOpacity>
      </View>:
      <TouchableOpacity  onPress={()=>dispathc(deleteToken())} > 
      <Svgs title='logout' />
    </TouchableOpacity>

      }
    </SafeAreaView>
  );
};
const stayles = StyleSheet.create({
  logo: {
    width: 120,
    height: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position:'relative',
  },
  icon: {
    position: 'absolute',
    left:20,
    justifyContent:'center',
    height:'100%',
    bottom:0,
  },
  icon1:{
    position: 'absolute',
    right:20,
    justifyContent:'center',
    height:'100%',
    bottom:0,
  },
  IconView:{
    flex:1,    
  },
  androidicone:{
    position: 'absolute',
    left: 20,
    height:'100%',
    justifyContent:'center',
  },
  androidicone1:{
    position: 'absolute',
    right: 20,
    height:'100%',
    justifyContent:'center',
  }
});
