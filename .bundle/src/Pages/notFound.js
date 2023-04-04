import { Text,View,StyleSheet } from 'react-native';
import { Gstyals } from '../../Gstyles';
import Wrapper from './wrapper';
export default NotFound = ({navigation}) =>{
    return <Wrapper navigation = {navigation}>
        <View stayle = {[Gstyals.wrapper,{height:100}]}>
            <Text style ={styles.text}>Not found</Text>
        </View>
    </Wrapper>
}

const styles = StyleSheet.create({
    text:{
        fontSize:25,
        textAlign:'center',
        color:'#000'
    }
}) 