import { StyleSheet } from "react-native"
import { Text,View } from "react-native"

export default ULComponent = ({text1,text2,text3,text4,bold}) =>{
    
    return <View style = {styles.UL}>
        <Text style = {[styles.text1,bold && {fontWeight:'bold'}]}>{text1}</Text>
        <View style = {styles.textWrapper}>
            <Text style = {styles.text2} >{text2}</Text>
            <Text style = {styles.text4} >{text4}</Text>
            <Text style = {styles.text3}>{text3}</Text>
        </View>
    </View>
}
const styles = StyleSheet.create({
    UL:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        borderBottomWidth:1,
        paddingVertical:10,
        borderStyle:'dotted'
    },
    text1:{
        color:'#596882'
    },
    text4:{
        fontSize:10,
        color:'#71B280',
       
    },
    text3:{
        color:'#71B280'
    },
    textWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
})