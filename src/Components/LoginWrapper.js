import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView
} from 'react-native';
import {LoginButton} from './Buttons/LoginButton';
import {LoginInput} from './Input/loginInput';
import {LoginHeader} from './LoginHeader';

export const LoginWrapper = ({navigation,error,children, item, title, text, ButtonTitle,onPress,onChange,validate,msg,loading}) => {
  return (
        <ImageBackground
          resizeMode='cover'
          source={require('../images/back.jpg')}
          style={styles.backgroundImage} >
          <SafeAreaView >
          <ScrollView showsVerticalScrollIndicator ={false}>
              <LoginHeader navigation ={navigation}  />
              <View style={styles.continer}>
                <View style={styles.titleContiner}>
                  <Text style={styles.title}>{title}</Text>
                  <Text style={styles.text}>{text}</Text>
                </View>
                <View>
                  {item.map((elm, i) => (
                    <View key={i} style={styles.inputContiner}>
                      <LoginInput
                        Type = {elm.Type}
                        error = {elm.error}
                        onPress = {onPress}
                        onChange = {onChange}
                        id = {i}
                        type = {elm.type}
                        text={elm.placeholder}
                        placeholder={elm.placeholder}
                      />
                    </View>
                  ))}
                </View>
                {msg?.type ?
                  <Text style = {{color:'green',textAlign:'center'}}>{msg?.msg}</Text>:
                  <Text style = {{color:'red',textAlign:'center'}}>{msg?.msg}</Text>
                }

          <View style={{ justifyContent: 'center', alignItems: 'center'}}>
            {loading && <ActivityIndicator size="large" color="rgb(222, 180, 30)" style = {{height:20}}/>}
            {error!=='' && <Text  style={{textAlign:'center',color:'red',}}>{error}</Text>}
            </View>
                <View style={styles.ButtonContiner}>
                  {<LoginButton loading = {loading} onPress ={validate} title={ButtonTitle} />}
                </View>
                {children}
              </View>
          </ScrollView>
            
          </SafeAreaView>
          </ImageBackground>
        
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    height:'100%'
  },
  continer: {
    marginHorizontal: 20,
    marginBottom:20,
    backgroundColor: 'white',
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  inputContiner: {
    marginVertical: 15,
  },
  title: {
    color: 'rgb(113, 178, 128)',
    fontSize: 21,
  },
  text: {
    color: '#928ead',
    fontSize: 16,
  },
  titleContiner: {
    marginBottom: 30,
  },
  ButtonContiner: {
    marginTop: 20,
  },
});
