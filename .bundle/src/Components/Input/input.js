import { StyleSheet, TextInput } from "react-native"

export const Input = ({value,onChangeText,placeholder}) =>{
    return <TextInput onChangeText={(e)=>onChangeText(e)} value = {value} style = {styals.input} placeholder ={placeholder} placeholderTextColor="#b1c4bd"  />
}

const styals =  StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:'#b1c4bd',
        height:40,
        paddingHorizontal:15,
        backgroundColor:"white",
        color:'#000',
        borderRadius:5,
        fontSize:12,
    }
})