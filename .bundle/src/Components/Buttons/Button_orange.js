import {StyleSheet,Text ,TouchableOpacity} from "react-native";
import LinearGradient from "react-native-linear-gradient";

export const Button_orange = ({onPress,title,colors =['#f6da53', '#e0a61f']}) => {
  return (
      <LinearGradient
        style={styals.LinearGradient}
        start={{x: 0, y: 0.75}}
        end={{x: 1, y: 0.25}}
        colors={colors}>
    <TouchableOpacity onPress ={onPress} >
          <Text style={styals.LinearGradientText}>{title}</Text>
    </TouchableOpacity>
      </LinearGradient>
  );
};
const styals = StyleSheet.create({
    LinearGradientWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    LinearGradient: {
      borderRadius: 3,
      alignItems: 'center',
      justifyContent: 'center',
    },
    LinearGradientText: {
      padding:4,
      color: 'white',
    },
  });
  