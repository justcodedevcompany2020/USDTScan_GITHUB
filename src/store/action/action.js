import { SuccesGetBitcoin, SuccesGetEthereum, SuccesGetSliderData, SuccesGetTron } from "./successAction"
export default GetSliderData = (data) => {
    return (dispatch) => {
        fetch("https://www.binance.com/api/v1/ticker/24hr?symbols=[\"BTCUSDT\",\"BNBUSDT\",\"SOLUSDT\",\"XRPUSDT\",\"MATICUSDT\",\"DOGEUSDT\",\"ETHUSDT\",\"IOTAUSDT\",\"LTCUSDT\",\"XMRUSDT\",\"ADAUSDT\",\"TRXUSDT\"]",{
            method: 'GET',
        })
        .then((respons)=>{
            return respons.json()
        })
        .then((data)=>{
            dispatch(SuccesGetSliderData(data))
        })
    }
}


export const GetEthereum = () =>{
    return (dispatch) =>{
        fetch("https://api.coingecko.com/api/v3/coins/ethereum",{
            method: 'GET',
        })
        .then((respons)=>{
            return respons.json()
        })
        .then((data)=>{
            dispatch(SuccesGetEthereum(data))
        })
    }
}

export const GetTron = () =>{
    return (dispatch) =>{
        fetch("https://api.coingecko.com/api/v3/coins/tron",{
            method: 'GET',
        })
        .then((respons)=>{
            return respons.json()
        })
        .then((data)=>{
            dispatch(SuccesGetTron(data))
        })
    }
}
export const GetBitcoin = () =>{
    return (dispatch) =>{
        fetch("https://api.coingecko.com/api/v3/coins/bitcoin",{
            method: 'GET',
        })
        .then((respons)=>{
            return respons.json()
        })
        .then((data)=>{
            dispatch(SuccesGetBitcoin(data))
        })
    }
}

export const Next20 = (data) => {
    return {
        type:'Next20',
        data
    }
}


export const lastData = () => {
    return {
        type:'lastData'
    }
}