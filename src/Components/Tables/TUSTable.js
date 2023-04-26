import axios from "axios"
import { Linking, ScrollView, StyleSheet, Text, View } from "react-native"
import { useDispatch } from "react-redux"
import { ErrorGetData } from "../../store/action/errorAction"
import { StartAction } from "../../store/action/startAction"
import { successGetData } from "../../store/action/successAction"
import { Svgs } from "../../Svg/svg"
import StatusButton from "../Buttons/StatusButton"

export const TUSTable = ({data,navigation}) => {
    const Header = [
        {width:350,title:'HASH'},
        {width:80,title:'TOKEN'},
        {width:180,title:'AMOUNT'},
        {width:250,title:'FROM'},
        {width:250,title:'TO'},
        {width:200,title:'STATUS'},
    ]
    

  const dispatch = useDispatch()
  const search = (data,input) => {
    if(data.length>20){
      dispatch(StartAction())
      axios.post(`https://usdtscan.com/search_api?scan_wallet=11&scan_addr=${data}`).then((data)=>{
        if(data.data.success){
          dispatch(successGetData(data.data.wallet_data,input,data.data.wallet_bal))
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
    }
};


    return <ScrollView horizontal ={true}>
    <View style = {{flexDirection:'column',borderLeftWidth:1,borderRightWidth: 1,borderColor: '#d9d9d9'}}>
    <View style = {{flexDirection:'row',  borderTopWidth:1,borderBottomWidth:1,borderColor: '#d9d9d9',height:30}}>
        {Header.map((elm,i)=>(
            <Text key={i} style={[styals.Title,{width:elm.width}]}>{elm.title}</Text>
        ))
        }
    </View>
    <View>
      {data.map((elm,i)=>{
        const dateString = elm?.oCTS?.replaceAll('/','-').slice(0,10)
        const dateObj = new Date(dateString)
        const formattedDate = `${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()}`
        return <View  style = {{flexDirection:'row', borderRightWidth: 1,borderBottomWidth: 1, borderColor: '#d9d9d9'}} key={i} >
          <View style={{width:350,padding:10,color:'#000', borderRightWidth: 1, borderColor: '#d9d9d9'}}>
            <Text  onPress={()=> Linking.openURL(`https://usdtscan.com/hash_info?id=${elm.oHash}`)}  style = {{color:"#000"}}>{elm.oHash}</Text>
            <Text style = {{color:'rgb(232, 180, 24)'}}>{elm.oBlokchain}</Text>
          </View>
          <View style={{width:80,padding:10, borderRightWidth: 1, borderColor: '#d9d9d9'}}>
            <View style = {{flexDirection:'row',justifyContent:'center',alignItems:"center"}}>
              <Svgs title={elm.oType}></Svgs>
              <Text  style = {{color:'#000'}}>{elm.oType}</Text>
            </View>
          </View>
          <View style={{width:180,padding:10, borderRightWidth: 1, borderColor: '#d9d9d9'}}>
            <Text style={styals.text}>{elm.oType}: {elm?.oSum?.slice(0,7)}
            {elm['Profit from LiqPool']} </Text>
            <Text style={styals.text}>Energy Fee: {elm.oTRX_comis} TRX</Text>
          </View>
          <View style={{width:250,padding:10, borderRightWidth: 1, borderColor: '#d9d9d9'}}>
            <Text onPress={()=>search(elm.oWallet_from,elm.oWallet_from)} style={styals.text}>{(elm.oWallet_from)} </Text>
          </View>
          <View style={{width:250,padding:10, borderRightWidth: 1, borderColor: '#d9d9d9'}}>
            <Text onPress={()=>search(elm.oWallet_to,elm.oWallet_to)} style ={{color:"#000"}}>{elm.oWallet_to}</Text>
            <Text>addres</Text>
          </View>
          <View style = {{justifyContent:'center',alignItems:'center',width:200}}>
            <StatusButton title={elm.oState==='3'? 'Completed':"Pending"} />
            <Text style={styals.text}>{formattedDate } {elm?.oCTS?.slice(10,20)}</Text>
          </View>
        </View>
      })
      }
    </View>
    </View>
  </ScrollView>
}

const styals = StyleSheet.create({
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