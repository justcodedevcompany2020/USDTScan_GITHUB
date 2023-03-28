import {useEffect, useState } from 'react';
import {StyleSheet,ScrollView, Text, View } from 'react-native';
import {AviableEnergy} from '../Components/AviableEnergy';
import ULComponent from '../Components/Ul';
import Wrapper from './wrapper';
import {useDispatch, useSelector} from 'react-redux';
import { TUSTable } from '../Components/Tables/TUSTable';
import { Button_orange } from '../Components/Buttons/Button_orange';
import { lastData, Next20 } from '../store/action/action';
import { Gstyals } from '../../Gstyles';

export default TusWallet = ({navigation}) => {
  const {searchData} = useSelector(st => st);
  const dispatch = useDispatch()
  const [count,setCount] = useState(1)
  const [data, setData] = useState([
    {
      text1: 'Affiliate Accruals ',
      text2: '0.00 USDT ',
      text4: '(0.000000 TRX)',
    },
    {
      text1: 'Personal Staking ',
      text2: 'Yes',
    },
    {
      text1: 'Fixed Staking Amount	',
      text2: '4000.00 USDT',
    },
    {
      text1: 'Flexible Staking Amount ',
      text3: '0.00 USDT ',
    },
  ]);
  const [data1, setData1] = useState([
    {
      text1: 'Transferred to Staking',
      text2: '4000.00 USDT ',
    },
    {
      text1: 'TRX Transfer Equivalent 	',
      text2: '60231.892787 TRX ',
    },
    {
      text1: 'Received from Staking',
      text3: '260.40 USDT ',
      bold: true,
    },
    {
      text1: 'TRX Income Equivalent ',
      text3: '3921.096220 TRX ',
      bold: true,
    },
  ]);



  useEffect(()=>{
    setCount(1)
  },[searchData.loading])
    return (
      <ScrollView>
        <Wrapper navigation={navigation}>
          {/* <View style={styals.Tus}>
            <View>
              <Text style={styals.title1}>USDTSCAN</Text>
              <Text style={styals.title}>
                {searchData.input}
              </Text>
              <Text style={styals.accaunt}>Account </Text>
              <Text style={styals.cratedon}>
                Created on (Local): 02/28/23 17:23:01
              </Text>
              <Text style={styals.Upline}>Upline address: </Text>
              <Text style={styals.addres}>
                TUSDChce7ac5ca38f48fe18282c5df7c1e97f8
              </Text>
              <Text style={styals.Staking}>Staking Statistics</Text>
            </View>
            <View>
              {data.map((elm, i) => (
                <ULComponent
                  key={i}
                  text1={elm.text1}
                  text2={elm.text2}
                  text3={elm.text3}
                  text4={elm.text4}
                />
              ))}
            </View>
            <View>
              <Text style={styals.total}>Total account balance: </Text>
              <Text style={styals.Price}>687.66 USDT</Text>
              <Text style={styals.trc}>Tron TRX: ~ 10354.705617 TRX</Text>
              <Text style = {{ color: '#8587a7',marginTop:10}}>Transfer Statistics</Text>
              <View>
                {data1.map((elm, i) => (
                  <ULComponent
                    key={i}
                    text1={elm.text1}
                    text2={elm.text2}
                    text3={elm.text3}
                    text4={elm.text4}
                    bold={elm.bold}
                  />
                ))}
              </View>
            </View>
            <View style={styals.AviableEnergy}>
              <AviableEnergy />
            </View>
          </View> */}
      
          <View style={styals.table}>
            <Text style={styals.USD}>USDTCHAIN ADDRESS TRANSACTIONS: {"\n"}</Text>

            <Text style={Gstyals.title_2}>
               {searchData.input}
              </Text>
            <Text style={styals.AList}>
              A list of USDTChain transactions will help you explore the
              direction of sending tokens. 
            </Text>
            <Text style={styals.text}>Total wallet balance:</Text>
              <Text style={[styals.price,{marginBottom:20}]}>{searchData.bal} USDT </Text>
              {/* <Text style={[styals.price,{fontSize: 12,marginBottom:20}]}>(66250.765862 ETH)</Text> */}
            <TUSTable data ={searchData.data} navigation= {navigation} />
            <View style = {{marginTop:20}}>
             
         
          <View style={styals.BtnWrapper}>
              {
                searchData.length >=21 && 
                <Button_orange onPress={()=>{
                  setCount(1)
                  dispatch(lastData())
                }} title={'Latest Transactions'} />
              }
               {(searchData.length >=21 &&  (count+1)*20 <=searchData.length) &&
            <Button_orange 
            onPress = {()=>{
              dispatch(Next20(count))
              setCount(count+1)
            }}
              colors={['#71B280', '#134E5E']}
              title={'Next 20 Transactions'}
            />
          }
          </View>
          </View>
          </View>
        </Wrapper>
      </ScrollView>
    );
  }

const styals = StyleSheet.create({
  title: {
    fontWeight: 500,
    fontSize: 18,
    color: '#000',
  },
  price: {
    color: '#71B280',
    fontSize: 16,
    fontWeight: 700,
  },
  title1: {
    color: '#e2e8f5',
    fontWeight: 700,
    fontSize: 30,
  },
  accaunt: {
    color: '#8587a7',
    fontSize: 16,
  },
  cratedon: {
    marginTop: 10,
    backgroundColor: '#eee',
    paddingHorizontal: 4,
    paddingVertical: 7,
    color: '#000',
  },
  Upline: {
    marginTop: 20,
    color: '#8587a7',
  },
  addres: {
    color: '#1c273c',
    fontSize: 14,
    marginVertical: 5,
  },
  Staking: {
    color: '#8587a7',
    fontSize: 17,
  },
  total: {
    marginTop: 30,
    color: '#8587a7',
  },
  Price: {
    color: '#71B280',
    fontSize: 23,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  trc: {
    color: '#8587a7',
    fontWeight: 'bold',
  },
  AviableEnergy: {
    marginTop: 20,
  },
  Tus: {
    backgroundColor: 'white',
    marginTop: 20,
    padding: 15,
    borderRadius: 5,
  },
  table: {
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  USD: {
    marginTop: 15,
    color: '#1c273c',
    fontSize: 14,
  },
  AList: {
    color: '#8587a7',
    fontSize: 12,
    marginVertical: 20,
  },
  BtnWrapper: {
    marginVertical:15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#000',
    justifyContent: 'center',
  },
});
