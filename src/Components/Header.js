import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Svgs} from '../Svg/svg';
import img from '../images/logo.png';

const windowHeight = Dimensions.get('window').height;


export const Header = ({onPress}) => {
  return (
    <SafeAreaView
      style={[
        stayles.header,
        {backgroundColor: '#e3eee9', height: windowHeight /10},
      ]}>
      <TouchableOpacity onPress={onPress} style={Platform.OS ==='ios'? stayles.icon:stayles.androidicone}>
        <Svgs />
      </TouchableOpacity>
      <Image style={stayles.logo} source={img} />
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
    left: 20,
    bottom: -windowHeight / 45,
    width: 50,
    height: 50,
  },
  androidicone:{
    position: 'absolute',
    left: 20,
    bottom: -windowHeight / 100,
    width: 50,
    height: 50,
  }
});
