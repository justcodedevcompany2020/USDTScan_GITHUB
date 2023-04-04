import { Text,View,StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { Gstyals } from '../../Gstyles';
import Wrapper from './wrapper';
export default NotFound = ({navigation}) =>{
  const {searchData} = useSelector((st)=>st)

    return <View>
    <Wrapper navigation = {navigation} />
        {searchData.loading  ?
            <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
              <ActivityIndicator size="large" color="rgb(222, 180, 30)" />
            </View>
        :   
        <View stayle = {[Gstyals.wrapper,{height:100}]}>
            <Text style ={styles.text}>Not found</Text>
        </View>
        }
    </View>
}

const styles = StyleSheet.create({
    text:{
        fontSize:25,
        textAlign:'center',
        color:'#000'
    }
}) 