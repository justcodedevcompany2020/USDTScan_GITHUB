import { View } from "react-native"
import { useSelector } from "react-redux"
import { WebView } from 'react-native-webview';

export const Profile = () =>{
    const {auth} = useSelector(st=>st)
    console.log(auth.token)    
    return <WebView
    useWebKit={true}
    source={{ uri:` https://usdtscan.com/?api_access_key=${auth.token} ` }}
    onNavigationStateChange={(webViewState)=>{

        console.log(webViewState.url, 'WebView onNavigationStateChange')
         let logour_url = ""
        if(webViewState.url.search(logour_url) !== -1 )
        {
            console.log('stex jnjumes tokeny asyncstoragic, cragri mej logoutes anum userin u redirectes anum cragri mej home ej')
        }
    }}
    javaScriptEnabled = {true}
    domStorageEnabled = {true}
/>
}