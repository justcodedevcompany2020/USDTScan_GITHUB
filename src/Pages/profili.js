import { useSelector } from 'react-redux'
import { WebView } from 'react-native-webview';
import { deleteToken } from '../store/action/action';
import { useEffect, useRef, useState } from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height'
export const Profile = ({navigation}) =>{
    const {auth} = useSelector(st=>st)
    const [height,setHeight] = useState()
    useEffect (()=>{
      setHeight(getStatusBarHeight(true))
    },[])
  
    let webviewRef = useRef(null)
    return <WebView
    ref = {webviewRef}
    style = {{marginTop:height}}
    useWebKit={true}
    source={{ uri:`https://usdtscan.com/?api_access_key=${auth.token}`}}
    injectedJavaScript={`$.ajax({
      type: 'POST',
      url: 'https://usdtscan.com',
      data:' app_access_val=121',
      success: function(ex) {
      }})`}
    // onError={(error)=>console.log(error)}
      onNavigationStateChange={(webViewState)=>{
        let logour_url = 'https://usdtscan.com/logout_app';
        console.log(webViewState)
        if(webViewState.url.search(logour_url) !== -1 )
        {
            dispatch(deleteToken())
            navigation.navigate('Home')
        }
    }}
    javaScriptEnabled = {true}
    domStorageEnabled = {true}
/>
}