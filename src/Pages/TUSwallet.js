import {useEffect, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import Wrapper from './wrapper';
import {useDispatch, useSelector} from 'react-redux';
import {TUSTable} from '../Components/Tables/TUSTable';
import {Button_orange} from '../Components/Buttons/Button_orange';
import {lastData, Next20} from '../store/action/action';
import {Gstyals} from '../../Gstyles';

export default TusWallet = ({navigation}) => {
  const {searchData} = useSelector(st => st);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
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

  useEffect(() => {
    setCount(1);
  }, [searchData.loading]);
  return (
    <ScrollView>
      <Wrapper navigation={navigation} />
      {searchData.loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="rgb(222, 180, 30)" />
        </View>
      ) : (
        <View>
          <View style={styals.table}>
            <Text style={styals.USD}>
              USDTCHAIN ADDRESS TRANSACTIONS: {'\n'}
            </Text>
            <Text style={Gstyals.title_2}>{searchData.input}</Text>
            <Text style={styals.AList}>
              A list of USDTChain transactions will help you explore the
              direction of sending tokens.
            </Text>
            <Text style={styals.text}>Total wallet balance:</Text>
            <Text style={[styals.price, {marginBottom: 20}]}>
              {searchData.bal} USDT{' '}
            </Text>
            <TUSTable data={searchData.data} navigation={navigation} />
            <View style={{marginTop: 20}}>
              <View style={styals.BtnWrapper}>
                {searchData.length >= 21 && (
                  <Button_orange
                    onPress={() => {
                      setCount(1);
                      dispatch(lastData());
                    }}
                    title={'Latest Transactions'}
                  />
                )}
                {searchData.length >= 21 &&
                  (count + 1) * 20 <= searchData.length && (
                    <Button_orange
                      onPress={() => {
                        dispatch(Next20(count));
                        setCount(count + 1);
                      }}
                      colors={['#71B280', '#134E5E']}
                      title={'Next 20 Transactions'}
                    />
                  )}
              </View>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styals = StyleSheet.create({
  price: {
    color: '#71B280',
    fontSize: 16,
    fontWeight: 700,
  },

  table: {
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  USD: {
    marginTop: 15,
    color: '#1c273c',
    fontWeight: 700,
    fontSize: 14,
  },
  AList: {
    color: '#8587a7',
    fontSize: 12,
    marginVertical: 20,
  },
  BtnWrapper: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#000',
    justifyContent: 'center',
  },
});
