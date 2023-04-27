import { StyleSheet, View,TextInput,Text, TouchableOpacity } from "react-native"
import { Svgs } from "../../Svg/svg"

export const LoginInput = ({text,placeholder,type,onPress,id,Type,onChange,error}) => {
    return <View style = {[styles.LoginInput,error &&{marginBottom:15}]}>
        <Text style= {styles.text}>{text}</Text>
        {error &&<View style = {styles.error}>
            <Text>{error}</Text>
        </View>}
        <View>
            <TextInput 
                placeholderTextColor = {'#a5a0ba'} 
                onChangeText={(e)=>onChange(id,e)} 
                secureTextEntry = {type==='password' || Type === 'password'}
                style = {[styles.input,type === 'password' &&{paddingRight:50}]} 
                placeholder = {placeholder}
                />
            {type === 'password' &&
                <TouchableOpacity onPress={()=>onPress(id,'text')} style = {styles.eye}>
                    <Svgs title="eye"></Svgs>
                </TouchableOpacity>
            }
            {type === 'text' &&
                <TouchableOpacity onPress={()=>onPress(id,'password')} style = {styles.eye}>
                    <Svgs title="closeEye"></Svgs>
                </TouchableOpacity>
            }
                
        </View>
    </View>
}
const styles = StyleSheet.create({
    LoginInput:{
        height:50,
    },
    input:{
        borderWidth:2,
        height:40,
        borderColor:'#e3e3e3',
        borderRadius:3,
        paddingHorizontal:8,
        // paddingLeft:5,
        position:'relative',
        color:'#000'
    },
    text:{
        marginBottom:5,
        color:'#a5a0b1',
        fontWeight:400,
    },
    eye:{
        position:'absolute',
        right:10,
        top:0,
        bottom:0,
        justifyContent:"center",
    },
    error:{
        backgroundColor:'#ff5959',
        height:20,
    }                                                              
})