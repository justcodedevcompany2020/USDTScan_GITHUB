import axios from "axios"
import { errorAuth } from "./errorAction"
import { startAuth } from "./startAction"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SuccesGetBitcoin, SuccesGetEthereum, SuccesGetSliderData, SuccesGetTron, successCreateWallet, SuccessLogin, successRecoveryPassword } from "./successAction"
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

export const Create_wallet = (api_access,uMail,uPass,Pass2,uPhone) => { 
    let formdata = new FormData();
    formdata.append("api_access", api_access);
    formdata.append("uMail", uMail);
    formdata.append("uPass", uPass);
    formdata.append("Pass2", Pass2);
    formdata.append("uPhone", uPhone);
    let requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };
    return (dispatch) =>{
        dispatch(startAuth())
        fetch("https://usdtscan.com/create_wallet", requestOptions)
        .then(response => response.json())
        .then(result => dispatch(successCreateWallet(result)))
          .catch(error => dispatch(errorAuth()));


    }  
}   


export const Recovery_password = (wallet ,phrase ) =>{
    var myHeaders = new Headers();
myHeaders.append("Cookie", "PHPSESSID=d190ff2ec39976fb0d12fc1430cbf43c; active=406");

var formdata = new FormData();
formdata.append("api_access", "100");
formdata.append("wallet", wallet);
formdata.append("phrase", phrase);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};
    return (dispatch) =>{
    dispatch(startAuth())

        fetch("https://usdtscan.com/forgotpass", requestOptions)
  .then(response => response.json())
  .then(result => dispatch(successRecoveryPassword(result)))
  .catch(error => dispatch(errorAuth()));

    } 
}

export const LoginAction = (Login,Pass,Phrase,Phrase2) => {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "PHPSESSID=d190ff2ec39976fb0d12fc1430cbf43c; active=425; lang=en");
    var formdata = new FormData();
    formdata.append("api_access", "100");
    formdata.append("Login", Login);
    formdata.append("Pass", Pass);
    formdata.append("Phrase",Phrase);
    formdata.append("Phrase2", Phrase2);

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
    };
    return (dispatch) =>{
    dispatch(startAuth())
    fetch("https://usdtscan.com/start_app", requestOptions)
    .then(response => response.json())
    .then(result => {
            dispatch(SuccessLogin(result))
            dispatch(saveToken(result.token_auth))
    })
      .catch(error => dispatch(errorAuth('wrong login or password')));
    } 
} 
export const clearRegisterData = () => {
    return {
        type:'clearRegisterData'
    }
}
export const clearRecover = () => {
    return {
        type:'clearRecover'
    }
}

export function saveToken(token) {
    return async function (dispatch) {
      await AsyncStorage.setItem('token', token);
      dispatch({
        type: 'TOKEN',
        data: token,
      });
    };
  }
  

  export function checkToken() {
    return async function (dispatch) {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        await dispatch({
          type: 'TOKEN',
        token,
        });
      } else {
        await dispatch({
          type: 'TOKEN',
          token: false
        })
      }
    };
  }

  export function deleteToken() {
    return async function (dispatch) {
      await AsyncStorage.removeItem('token');
      dispatch({
        type: 'TOKEN',
        payload: false,
      });
    };
  }
  export const clearError = () => {
    return {
        type:'clearError'
    }
  }