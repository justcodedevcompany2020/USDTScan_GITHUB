import axios from 'axios';
import {View, Text, StyleSheet,ScrollView, Linking } from 'react-native';
import { useDispatch } from 'react-redux';
import { ErrorGetData } from '../../store/action/errorAction';
import { StartAction } from '../../store/action/startAction';
import { successGetData } from '../../store/action/successAction';
import { Svgs } from '../../Svg/svg';

export const SearchTable2 = ({data,value}) =>{
    const Header = [
        {width:250,title:'HASH'},
        {width:120,title:'TOKEN'},
        {width:80,title:'AMOUNT'},
        {width:250,title:'FROM'},
        {width:250,title:'TO'},
        {width:200,title:'AGE'},
    ]
    const dispatch = useDispatch()
    const search = (data,input) => {
      console.log(data)
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
    return <View style={styles.table}>
    <ScrollView horizontal ={true}>
    <View style = {{flexDirection:'column',borderLeftWidth:1,borderRightWidth: 1,borderColor: '#d9d9d9'}}>
    <View style = {{flexDirection:'row',  borderTopWidth:1,borderBottomWidth:1,borderColor: '#d9d9d9',height:40}}>
        {Header.map((elm,i)=>(
            <Text key={i} style={[styles.Title,{width:elm.width}]}>{elm.title}</Text>
        ))}
    </View>
    <View>
      {data.map((elm,i)=>{
        let date = new Date(elm.block_timestamp * 1000);
        return <View style = {{flexDirection:'row', borderRightWidth: 1,borderBottomWidth: 1, borderColor: '#d9d9d9'}} key={i} >
          <View style={[styles.block,{width:250}]}>
            <Text onPress={()=> Linking.openURL(`https://tronscan.org/#/transaction/${elm.transaction_id}`)}  style ={{color:'#000'}}>{elm.transaction_id}</Text>
          </View>
          <View style={[styles.block,{width:120}]}>
            <View style = {{flexDirection:'row',justifyContent:'center',alignItems:"center"}}>
              <Svgs title={elm.token_info?.symbol}></Svgs>
              <Text  style = {{color:'#000',marginHorizontal:10}}>{elm.token_info?.symbol}</Text>
            </View>
          </View>
          <View style={[styles.block,{width:80}]}>
              {value == elm.from ?
                <Text style={[styles.Text,{color:"red"}]}>-{elm.value}</Text>:
                <Text style={[styles.Text,{color:"#71b280"}]}>+{elm.value}</Text>
              }
          </View>
          <View style={[styles.block,{width:250}]}>
              <Text  onPress={()=>search(elm.from,elm.from)} style={styles.Text}>{(elm.from)} </Text>
          </View>
          <View style={[styles.block,{width:250}]}>
              <Text onPress={()=>search(elm.to,elm.to)} style={styles.Text}>{elm.to}</Text>
          </View>
          <View style={[styles.block,{width:200}]}>
              <Text style={styles.Text}> {date?.toLocaleString().replace('T', ' ').replace('A', ' ').replace('P', ' ').slice(0, 20)}</Text>
          </View>
        </View>
      })
      }
    </View>
    </View>
  </ScrollView>

  </View>
}

const styles = StyleSheet.create({
    block:{
      padding:10, borderRightWidth: 1, borderColor: '#d9d9d9'
    },
    text: {
        color: '#8587a7',
    },
    table: {
        marginTop: 30,
    },
    Title:{
        flex:1,
        borderRightWidth: 1,
        borderColor: '#d9d9d9',
        paddingLeft:5,
        paddingTop:10,
        color:'#8587a7',
        fontWeight:'bold'
    },
    Text:{
        color:'#000'
    },
})