import { useState } from "react";
import { View ,Text, StyleSheet, TouchableOpacity} from "react-native"
import Clipboard from '@react-native-clipboard/clipboard';
import { ScrollView } from "react-native-gesture-handler";
import { Svgs } from "../../Svg/svg";

export const Modals = ({token,recovery_word,recovery_word2,onPress,navigation}) => {
    
  const [copiedText, setCopiedText] = useState('');
    return (
        <View style = {styles.modal}>   
        <ScrollView style = {styles.modal_View}>
            <View style = {styles.header}>
                <View>
                  {/* <Image style = {styles.logo} source={img} /> */}
                </View>
                <Text onPress={
                    onPress
                    
                    } style = {styles.text} >X</Text>
            </View>
            <View>
                <View style = {{paddingVertical:10,borderBottomWidth:1,borderColor:'rgba(0, 0, 0, 0.3)',paddingTop:30 }}>
                    <Text style = {{color:'red',fontSize:15,fontWeight:500}}>IMPORTANT! <Text style = {{color:"#000"}}> Keep access keys in a safe place and do not share them with third parties. </Text></Text>
                    <Text style = {{color:'#000',marginVertical:20}}>For data encryption purposes, account access and data recovery is only possible using encrypted keys.</Text>
                </View>
                <View style = {{paddingVertical:10,borderBottomWidth:1,borderColor:'rgba(0, 0, 0, 0.3)'}}>
                    <Text style = {{fontSize:18,color:'#000',fontWeight:500}}>Personal Wallet Address:</Text>
                    <Text style = {{fontSize:18,color:'rgb(96, 193, 141)',fontWeight:500}}>{token}</Text>
                    <TouchableOpacity style = {{width:80,justifyContent:'center',alignItems:'center',backgroundColor:'#4f9079',}} onPress={()=>Clipboard.setString(token)} >
                        <Text style = {{color:'#fff'}}>copy</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{borderBottomWidth:1,borderBottomColor:'rgba(0, 0, 0, 0.3)',paddingVertical:10}}>
                    <View>
                        <Text style = {styles.secret_phrase1}>Secret Phrase #1: </Text>
                        <Text style = {[styles.secret_phrase1,{color:"rgb(226, 172, 55)"}]}>{recovery_word}</Text>
                        <TouchableOpacity style = {{backgroundColor:'#4f9079',width:80,justifyContent:'center',alignItems:'center'}} onPress={()=>Clipboard.setString(recovery_word)} >
                            <Text style = {{color:'#fff'}}>copy</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style = {styles.secret_phrase1}>Secret Phrase #2:</Text>
                        <Text style = {[styles.secret_phrase1,{color:"rgb(226, 172, 55)"}]}>{recovery_word2}</Text>
                        <TouchableOpacity style = {{backgroundColor:'#4f9079',width:80,justifyContent:'center',alignItems:'center'}} onPress={()=>Clipboard.setString(recovery_word2)} >
                            <Text style = {{color:'#fff'}}>copy</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View >
                <Text style = {styles.text}>NB: Access to your account or data recovery is impossible without these keys! </Text>
                <Text style = {{color:'#000',fontWeight:500}}>
                After closing the pop-up window, you will be prompted to save the access keys file. If you want to save a text file, follow the instructions on your device. Keep the file in a safe place and do not share it with third parties. 
                </Text>
            </View>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    modal:{
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    secret_phrase1:{
        fontWeight:500,
        color:'#000',
        fontSize:18,
    } ,
    header:{
        paddingVertical:20,
        borderBottomWidth:1,
        borderColor:'rgba(0, 0, 0, 0.3)'
    },
    modal_View:{
        flex:1,
        width:'90%',
        margin:50,
        backgroundColor:'white',
        paddingHorizontal:20,
        borderRadius:10,
    },
    text:{
        color:'#000'
    }
})