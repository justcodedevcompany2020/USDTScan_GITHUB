import { StyleSheet,Text,TouchableOpacity } from "react-native"

export default StatusButton = ({title}) =>{
    return <TouchableOpacity  style = {[styals.Btn,{backgroundColor:title === 'Completed' ?'#08c18d':'#ffc107'}]}>
        <Text style = {styals.title}>{title}</Text>
    </TouchableOpacity>
}


const styals = StyleSheet.create({
    Btn:{
        marginVertical:8,
        borderRadius:6,
        width:80,
        height:30,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        height:20,
        color:'white',
        textAlign:'center',
        fontSize:13,
    }
})