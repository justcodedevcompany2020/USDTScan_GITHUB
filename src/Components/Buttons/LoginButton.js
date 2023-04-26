import { StyleSheet, TouchableOpacity,Text} from "react-native"

export const LoginButton = ({title,onPress,loading}) => {
    return <TouchableOpacity activeOpacity={loading} onPress={()=>onPress()} style  = {styles.button}>
        <Text style = {styles.text}>{title}</Text>
    </TouchableOpacity>
}

const styles= StyleSheet.create({
    button:{
        backgroundColor:'#4f9079',
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
    text:{
        color:'white',
        fontWeight:400,
        fontSize:16,
    }
})