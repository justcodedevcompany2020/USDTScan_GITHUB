import { useDispatch, useSelector } from "react-redux"
import { WebView } from 'react-native-webview';
import { deleteToken } from "../store/action/action";
import { useEffect } from "react";

export const Profile = ({navigation}) =>{
    const {auth} = useSelector(st=>st)
    const dispatch = useDispatch()
    return <WebView
    useWebKit={true}
    source={{ uri:` https://usdtscan.com/?api_access_key=${auth.token} ` }}
    onNavigationStateChange={(webViewState)=>{
        console.log(webViewState)
        let logour_url = "https://usdtscan.com/logout_success"
        if(webViewState.url.search(logour_url) !== -1 )
        {   
            console.log('8888')
            dispatch(deleteToken())
            navigation.navigate('Home')
            // console.log('stex jnjumes tokeny asyncstoragic, cragri mej logoutes anum userin u redirectes anum cragri mej home ej')
        }
    }}
    javaScriptEnabled = {true}
    domStorageEnabled = {true}
/>
}