import {useEffect} from 'react';
import CoinAnalitics from '../Components/CoinAnalitics';
import img1 from '../images/ETH.png';
import img2 from '../images/b.png';
import img3 from '../images/trx.png';
import GetSliderData from '../store/action/action';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {GetBitcoin, GetEthereum, GetTron} from '../store/action/action';
import {Gstyals} from '../../Gstyles';
import Wrapper from './wrapper';

export default Home = ({navigation}) => {
  const {coin_eth, coin_trx, coin_btc} = useSelector(st => st.coin);
  const dispatch = useDispatch();
  const interval_time = 4000;
  useEffect(() => {
    let interval = setInterval(() => {
      dispatch(GetEthereum());
      dispatch(GetTron());
      dispatch(GetSliderData());
      dispatch(GetBitcoin());
    }, interval_time);
    return () => clearInterval(interval);
  }, [interval_time]);
  const {searchData} = useSelector(st => st);

  const {ethereum, tron, bitcoin} = useSelector(st => st.coin);
  const data = [
    {
      data: ethereum,
      title: 'Ethereum',
      price: coin_eth?.priceChangePercent?.slice(0, 5),
      lastPrice: coin_eth.lastPrice?.slice(0, 7),
      img: img1,
      color: 'rgba(89,101,249,0.06)',
      title2: 'ETH',
    },
    {
      data: tron,
      title: 'TRON',
      price: coin_trx?.priceChangePercent?.slice(0, 5),
      lastPrice: coin_trx.lastPrice?.slice(0, 7),
      img: img3,
      color: '#fff8f8',
      title2: 'TRX',
    },
    {
      data: bitcoin,
      title: 'Bitcoin',
      price: coin_btc?.priceChangePercent?.slice(0, 5),
      lastPrice: coin_btc.lastPrice?.slice(0, 7),
      img: img2,
      color: '#f4fdfa',
      title2: 'BTC',
    },
  ];

  return (
    <ScrollView  showsVerticalScrollIndicator={false} >
      <Wrapper navigation={navigation} />
      {searchData.loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="rgb(222, 180, 30)" />
        </View>
      ) : (
        <View style={Gstyals.Wrapper}>
          {data.map((item, i) => (
            <CoinAnalitics
              key={i}
              data={item.data}
              title={item.title}
              price={item.price}
              lastPrice={item.lastPrice}
              img={item.img}
              color={item.color}
              title2={item.title2}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
};
