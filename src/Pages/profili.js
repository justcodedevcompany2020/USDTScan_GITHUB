import { useSelector } from "react-redux"
import { WebView } from 'react-native-webview';
import { deleteToken } from "../store/action/action";
import { useRef } from "react";

export const Profile = ({navigation}) =>{
    const {auth} = useSelector(st=>st)
    let webviewRef = useRef(null)    
 
    const config = {
      headers:{APP_STATUS:'from app'}
    }

    const postData = 'param1=value1&param2=value2';

  const postUrl = 'https://example.com';

  const handleButtonClick = () => {
        `$.ajax({
        type: "POST",
        url: "https://usdtscan.com",
        data:" app_access_val=121",
        success: function(ex) {
          alert(ex)
        }})`
  };


    return <WebView
    ref = {webviewRef}
    useWebKit={true}
    // onLoad={() => sendPostRequest()}
    // injectJavaScript  = {handleButtonClick}
    source={{ uri:`https://usdtscan.com/?api_access_key=${auth.token}`}}
    injectedJavaScript={ `$.ajax({
      type: "POST",
      url: "https://usdtscan.com",
      data:" app_access_val=121",
      success: function(ex) {
        alert(ex)
      }})`}
    onNavigationStateChange={(webViewState)=>{
        let logour_url = "https://usdtscan.com/start_app?out"
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