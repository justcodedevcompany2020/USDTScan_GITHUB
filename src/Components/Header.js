import { Image, SafeAreaView, StyleSheet, TouchableOpacity,View } from "react-native"
import { Svgs } from "../Svg/svg"
import img from '../images/logo.png';

export const Header =({onPress}) => {
    return <SafeAreaView style={[stayles.header, {backgroundColor: '#e3eee9', height: 120}]}>
              <TouchableOpacity  onPress={onPress} style = {stayles.icon} >
                <Svgs />
              </TouchableOpacity>
            <Image style={stayles.logo} source={img} />
    </SafeAreaView>
}
const stayles = StyleSheet.create({
    logo: {
      width: 120,
      height: 30,
    },
    header: {
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon:{
      position:'absolute',
      left:0,
      width:50,
      height:50,
      top:55,
      justifyContent:'center',
      alignItems:'center',
    }
  });
  