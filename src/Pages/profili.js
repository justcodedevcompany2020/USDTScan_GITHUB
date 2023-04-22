import { useSelector } from "react-redux"
import { WebView } from 'react-native-webview';
import { deleteToken } from "../store/action/action";

export const Profile = ({navigation}) =>{
    const {auth} = useSelector(st=>st)
    let webviewRef = null
    const sendMessage = () =>{
        const message = 'Hello from react native'
        webviewRef.postMessage(message)
    }
    return <WebView
    reg = {(ref) =>{webviewRef = ref}}
    useWebKit={true}
    source={{ uri:`https://usdtscan.com/?api_access_key=${auth.token}`}}
    onNavigationStateChange={(webViewState)=>{
        console.log(webViewState.url)
        let logour_url = "https://usdtscan.com/start_app?out"
        if(webViewState.url.search(logour_url) !== -1 )
        {   
            console.log('aaaaaaaaaaaaaaaaaa')
            dispatch(deleteToken())
            navigation.navigate('Home')
        }
    }}
    javaScriptEnabled = {true}
    domStorageEnabled = {true}
/>
}