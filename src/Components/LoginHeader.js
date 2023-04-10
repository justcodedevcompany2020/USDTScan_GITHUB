import { Image, StyleSheet, TouchableOpacity } from "react-native"

export const LoginHeader = ({navigation}) => {
    return( 
        <TouchableOpacity onPress={()=>navigation.navigate('Home')} style = {styles.continer}>
            <Image  style = {styles.img} source={require('../images/logo.png')} />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    continer:{
        alignItems:'center',
        marginVertical:30,
    },
    img:{
        width: 220,
        height: 50,
    }
})