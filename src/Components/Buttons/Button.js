import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export const Button = ({title,onPress}) => {
  return (
    <LinearGradient
        start={{x: 0, y: 0.75}}
        end={{x: 1, y: 0.25}}
        style={styals.LinearGradient}
        colors={['#f6da53', '#e0a61f']}>
        
    <TouchableOpacity style={styals.button} onPress = {onPress}>
        <Text style={styals.text}>{title}</Text>
    </TouchableOpacity>
      </LinearGradient>
  );
};
const styals = StyleSheet.create({
  button: {
    height: 40,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ffc107',
  },
  svg:{
    width:20,
    height:20,
  },    
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
  LinearGradient: {
    marginVertical: 15,
    height: 40,
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:5,
  },
});
