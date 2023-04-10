import { TouchableOpacity, View } from 'react-native';
import {Dimensions, Image, SafeAreaView, StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import img from '../images/logo.png';
import { deleteToken } from '../store/action/action';
import { Svgs } from '../Svg/svg';

export const HomeHeade = ({onPress1}) => {
  const windowHeight = Dimensions.get('window').height;
  const {auth} = useSelector((st)=>st)
  const dispathc = useDispatch()
  return (
    <SafeAreaView
      style={[
        stayles.header,
        {backgroundColor: '#e3eee9', height:Platform.OS ==='ios'? windowHeight /8.5:windowHeight /11},
      ]}>
      <Image style={stayles.logo} source={img} />
      {!auth.token ?
      <View style={Platform.OS ==='ios'? stayles.icon1:stayles.androidicone1}>
        <TouchableOpacity  onPress={onPress1} > 
          <Svgs title='user' />
        </TouchableOpacity>
      </View>:
      <View style={Platform.OS ==='ios'? stayles.icon1:stayles.androidicone1}>
      <TouchableOpacity  onPress={()=>dispathc(deleteToken())} > 
        <Svgs title='logout' />
      </TouchableOpacity>
    </View>
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
  },
  icon: {
    position: 'absolute',
    left: 0,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  androidicone1:{
    position: 'absolute',
    right: 22,
    height:'100%',
    justifyContent:'center',
  },
  icon1:{
    position: 'absolute',
    right:22,
    justifyContent:'center',
    height:'100%',
    bottom:0,
  },
});
