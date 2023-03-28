import axios from 'axios';
import {View, Text, StyleSheet,ScrollView, Linking } from 'react-native';
import { useDispatch } from 'react-redux';
import { ErrorGetData } from '../../store/action/errorAction';
import { StartAction } from '../../store/action/startAction';
import { successGetData } from '../../store/action/successAction';
import { Svgs } from '../../Svg/svg';

export const SearchTable3 = ({data,value}) =>{
    const Header = [
        {width:350,title:'HASH'},
        {width:120,title:'TOKEN'},
        {width:100,title:'AMOUNT'},
        {width:250,title:'FROM'},
        {width:250,title:'TO'},
        {width:250,title:'AGE'},
    ]
    const dispatch = useDispatch()
    const search = (data,input) => {
      dispatch(StartAction())
      axios.get(`https://usdtscan.com/search_api?scan_wallet=11&scan_addr=${data}`).then((data)=>{
        if(data.data.success){
          dispatch(successGetData(data.data.wallet_data,input,data.data?.wallet_bal))
          if(data.data.wallet_type ==2 ){
            navigation.navigate('search2');
          }
          else if(data.data.wallet_type ==1){
            navigation.navigate('search');
          }
          else if(data.data.wallet_type ==3){
            navigation.navigate('search3');
          }
        }
        else {
          dispatch(ErrorGetData())
          navigation.navigate('notFound');
        }
      }).catch((error)=>{
        dispatch(ErrorGetData())
      })
  };
  

    return <ScrollView horizontal ={true}>
    <View style = {{flexDirection:'column',borderLeftWidth:1,borderRightWidth: 1,borderColor: '#d9d9d9'}}>
    <View style = {{flexDirection:'row',  borderTopWidth:1,borderBottomWidth:1,borderColor: '#d9d9d9',height:40}}>
        {Header.map((elm,i)=>(
            <Text key={i} style={[styles.Title,{width:elm.width}]}>{elm.title}</Text>
        ))

        }
    </View>
    <View>
   
      {data.map((elm,i)=>{
        let date = new Date(elm.timeStamp * 1000);
        return <View  key = {i} style = {{flexDirection:'row', borderRightWidth: 1,borderBottomWidth: 1, borderColor: '#d9d9d9'}}  >
          <View style={{width:350,padding:10,color:'#000', borderRightWidth: 1, borderColor: '#d9d9d9'}}>
            <Text onPress={()=> Linking.openURL(`https://etherscan.io/tx/${elm.hash}`)} style = {{color:'black'}}>{elm.hash}</Text>
            <Text style = {{color:'rgb(232, 180, 24)'}}>{elm.oBlokchain}</Text>
          </View>
          <View style={{width:120,padding:10, borderRightWidth: 1, borderColor: '#d9d9d9'}}>
            <View  style = {{flexDirection:'row',justifyContent:'center',alignItems:"center"}}>
              <Svgs title={elm.tokenSymbol}></Svgs>
              <Text  style = {{color:'#000'}}>{elm.tokenName}</Text>
            </View>
          </View>
          <View style={{width:100,padding:10, borderRightWidth: 1, borderColor: '#d9d9d9'}}>
            {value == elm.from?
            <Text style={[styles.text,{color:'red'}]}>-{elm.value/1000000}</Text>
                :
            <Text style={[styles.text,{color:'#71b280'}]}>+{elm.value/1000000}</Text>
            }
          </View>
          <View style={{width:250,padding:10, borderRightWidth: 1, borderColor: '#d9d9d9'}}>
              <Text onPress={()=>search(elm.from,elm.from)} style={styles.text}>{elm.from} </Text>
          </View>
          <View style={{width:250,padding:10, borderRightWidth: 1, borderColor: '#d9d9d9'}}>
              <Text onPress={()=>search(elm.to,elm.to)} style={styles.text}>{elm.to} </Text>
          </View>
          <View style={{width:250,padding:10, borderRightWidth: 1, borderColor: '#d9d9d9'}}>
            <Text style={styles.text}> {date?.toLocaleString().replace('T', ' ').replace('A', ' ').replace('P', ' ').slice(0, 20)}</Text>
          </View>
        </View>
      })
      }
    </View>
    </View>
  </ScrollView>
}

const styles = StyleSheet.create({
    Title:{
        borderRightWidth: 1, 
        borderColor: '#d9d9d9',
        color:'#8587a7',
        paddingHorizontal:10,
        paddingVertical:5,
        fontWeight:'bold'
      },
      text: {
        color: '#000',
        justifyContent: 'center',
      },
})