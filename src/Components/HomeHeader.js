import {Dimensions, Image, SafeAreaView, StyleSheet} from 'react-native';
import img from '../images/logo.png';

export const HomeHeade = () => {
  const windowHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView
      style={[
        stayles.header,
        {backgroundColor: '#e3eee9', height:Platform.OS ==='ios'? windowHeight /8.5:windowHeight /11},
      ]}>
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
    left: 0,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
