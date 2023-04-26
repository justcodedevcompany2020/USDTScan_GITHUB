import { Text } from "react-native"
import { TouchableOpacity,StyleSheet } from "react-native"

export const Button2 = ({title}) =>{
    return <TouchableOpacity style = {styals.Btn}>
        <Text style = {styals.title}>{title}</Text>
    </TouchableOpacity>
}

const styals = StyleSheet.create({
    Btn:{
        backgroundColor:'#71B280',
        borderRadius:6,
        width:190,
        height:30,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        height:23,
        color:'white',
        textAlign:'center',
    }
})