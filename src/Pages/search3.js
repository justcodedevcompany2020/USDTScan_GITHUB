import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Gstyals} from '../../Gstyles';
import {Button_orange} from '../Components/Buttons/Button_orange';
import {useDispatch, useSelector} from 'react-redux';
import {SearchTable3} from '../Components/Tables/SearchTable3';
import {lastData, Next20} from '../store/action/action';
import {useEffect, useState} from 'react';

export const Search3 = ({navigation}) => {
  const {searchData} = useSelector(st => st);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
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
        <View style={Gstyals.search}>
          <View>
            <Text style={styles.title}>USDT ERC20 ADDRESS TRANSACTIONS: </Text>
            <Text style={Gstyals.title_2}>{searchData.input}</Text>
            <Text style={Gstyals.text}>
              A list of USDT ERC20 transactions will help you explore the
              direction of sending tokens.
            </Text>
            <Text style={styles.text}>Total wallet balance:</Text>
            <Text style={styles.price}>{searchData.bal} USDT </Text>
          </View>
          <SearchTable3 data={searchData.data} value={searchData.input} />
          <View style={styles.BtnWrapper}>
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
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#1c273c',
    fontWeight: 700,
    fontSize: 14,
    marginBottom: 10,
  },

  price: {
    color: '#71B280',
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 10,
  },
  text1: {
    textAlign: 'center',
    height: 20,
    marginVertical: 10,
    color: '#8587a7',
  },
  BtnWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#000',
    justifyContent: 'center',
  },
});
