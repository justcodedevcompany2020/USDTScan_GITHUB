import {useEffect } from 'react';
import CoinAnalitics from '../Components/CoinAnalitics';
import img1 from '../images/ETH.png';
import img2 from '../images/b.png';
import img3 from '../images/trx.png';
import  GetSliderData  from '../store/action/action';
import Wrapper from './wrapper';
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {GetBitcoin, GetEthereum, GetTron} from '../store/action/action';

export default Home = ({navigation}) => {
  const {coin_eth, coin_trx, coin_btc} = useSelector(st => st.coin);
  const dispatch = useDispatch();
  const interval_time = 4000
  useEffect(() => {
    let interval = setInterval(() => {
      dispatch(GetEthereum());
      dispatch(GetTron());
      dispatch(GetSliderData())
      dispatch(GetBitcoin());
    }, interval_time);
    return () => clearInterval(interval);
  }, [interval_time]);


  const {ethereum, tron, bitcoin} = useSelector(st => st.coin);

  return (
    <ScrollView>
      <Wrapper navigation={navigation}>
        <CoinAnalitics
          data={ethereum}
          title={"Ethereum"}
          price={coin_eth?.priceChangePercent?.slice(0, 5)}
          lastPrice={coin_eth.lastPrice?.slice(0, 7)}
          img={img1}
          color={'rgba(89,101,249,0.06)'}
          title2 ={'ETH'}
        />
        <CoinAnalitics
          data={tron}
          title={"TRON"}
          price={coin_trx?.priceChangePercent?.slice(0, 5)}
          lastPrice={coin_trx.lastPrice?.slice(0, 7)}
          img={img3}
          color={'#fff8f8'}
          title2 = {"TRX"}
        />
        <CoinAnalitics
          data={bitcoin}
          title={"Bitcoin"}
          price={coin_btc?.priceChangePercent?.slice(0, 5)}
          lastPrice={coin_btc.lastPrice?.slice(0, 7)}
          img={img2}
          color={'#f4fdfa'}
          title2 = {"BTC"}
        />
      </Wrapper>
    </ScrollView>
  );
};
