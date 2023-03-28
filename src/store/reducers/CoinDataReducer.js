const initialState = {
    sliderData:[],
    coin_eth:{},
    coin_trx:{},
    coin_btc:{},
    ethereum:{},
    tron:{},
    bitcoin:{}
  };
  
  const CoinDataReducer = (state = initialState, action) => {
    let item = {...state}
    switch (action.type) {
      case 'SuccesGetSliderData':
        item.sliderData = action.data
        item.coin_eth = action.data?.find((e)=>(e.symbol == "ETHUSDT"))
        item.coin_trx = action.data?.find((e)=>(e.symbol == "TRXUSDT"))
        item.coin_btc = action.data?.find((e)=>(e.symbol == "BTCUSDT"))
        break;
      case 'SuccesGetEthereum':
        item.ethereum = action.data
        break
      case 'SuccesGetTron':
        item.tron = action.data
        break
      case 'SuccesGetBitcoin':
        item.bitcoin = action.data
        break
      default:
        break
    }
    return item
  };
  export default CoinDataReducer;
  