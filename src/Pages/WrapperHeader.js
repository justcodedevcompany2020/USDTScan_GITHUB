import {View,Image,StyleSheet,TouchableOpacity, SafeAreaView} from 'react-native';
import {useState,  } from 'react';
import { useDispatch, useSelector, } from 'react-redux'
import {Button} from '../Components/Buttons/Button';
import { Svgs } from '../Svg/svg';
import {Input} from '../Components/Input/input';
import {Gstyals} from '../../Gstyles';
import img from '../images/logo.png';
import axios from 'axios';
import { Swiper } from '../Components/carusels';
import { StartAction } from '../store/action/startAction';
import { successGetData } from '../store/action/successAction';
import { ErrorGetData } from '../store/action/errorAction';

export default WrapperHeader = ({name,navigation}) => {

  const [input, setInpurt] = useState('');
  const dispatch = useDispatch()
  const {sliderData} = useSelector((st)=>st.coin)

  const search = () => {
    if(input !== '' ){
      dispatch(StartAction())
      axios.get(`https://usdtscan.com/search_api?scan_wallet=11&scan_addr=${input}`).then((data)=>{
        if(data.data.success){
          dispatch(successGetData(data.data.wallet_data,input,data.data?.wallet_bal))
          if(data.data.wallet_type ==2 ){
            navigation.navigate('search2');
          }
          else if(data.data.wallet_type ==1){
            console.log(data.data.wallet_type)
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
      setInpurt('')
    }
  };

    return (
      <View>
          {/* <View style={[stayles.header, {backgroundColor: '#e3eee9', height: 60}]}>
            {name !== 'Home' &&
              <TouchableOpacity  onPress={()=>{
                setInpurt('')
                navigation.navigate('Home')
                }} style = {stayles.icon} >
                <Svgs />
              </TouchableOpacity>
            }
            <Image style={stayles.logo} source={img} />
          </View> */}
        <View style={[Gstyals.Home]}>
            <Swiper data={sliderData} />
            <View style={{marginTop: 20}}>
              <Input
                value={input}
                onChangeText={e => setInpurt(e)}
                placeholder="Search by Address / USDTChain / TRC20 / ERC20"
              />
              <Button onPress={() =>{search() }} title={'Search'} />
            </View>
          </View>
        </View>
    )
}

const stayles = StyleSheet.create({
    logo: {
      width: 120,
      height: 30,
    },
    header: {
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon:{
      position:'absolute',
      left:0,
      width:50,
      height:50,
      justifyContent:'center',
      alignItems:'center',
    }
  });
  

