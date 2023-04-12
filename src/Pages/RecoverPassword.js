import { useEffect, useState } from "react"
import { View,Text } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { Gstyals } from "../../Gstyles"
import { LoginWrapper } from "../Components/LoginWrapper"
import { Recovery_password } from "../store/action/action"

export const RecoverPassword = ({navigation}) => {
    const [item,setItem] = useState([
        {
            name:'tusdch',
            placeholder:'TUSDCh...',
            text:'Personal wallet address (38 characters)',
            value:'',
            error:'',
        },
        {
            name:'search_phrase',
            placeholder:'Secret Phrase #1',
            text:'Secret Phrase #1',
            value:'',
            error:'',

        },
    ])
    const [msg,setMsg] = useState({type:'',msg:''})
    const {auth} = useSelector((st)=>st)
    const dispatch = useDispatch()
    const validate = () =>{
        let temp =[...item]
        temp.map((elm,i)=>{
            if(elm.name === 'tusdch'){
                if(elm.value === ''){
                    elm.error = 'empty wallet'
                }
                else {
                    elm.error = ''
                }
            }
            else if(elm.name === 'search_phrase'){
                if(elm.value === ''){
                    elm.error = 'empty search phrase'
                }
                else {
                    elm.error = ''
                }
            }
            let send = true
            temp.map((elm,i)=>{
                if(elm.error !==''){
                    send = false
                }
            })
            if(send){
                dispatch(Recovery_password(temp[0].value,temp[1].value))
            }
        })
        setItem(temp)
    }
    const handleChange = (i,value) => {
        let temp = [...item]
        temp[i].value = value
        setItem(temp)
    }
    useEffect(()=>{
        let item = {...msg}
        console.log(auth,658)
        if(auth.status){
            item.type = true,
            item.msg = auth.msg
        }
        else {
            item.type = false,
            item.msg = auth.msg
        }
        setMsg(item)
    },[auth.msg])
    return  (
        <LoginWrapper 
            validate={()=>validate()} 
            onChange = {(i,value)=>handleChange(i,value)} 
            navigation ={navigation} 
            item={item} 
            ButtonTitle = {'Recovery password'} 
            title ={'Password recovery'} 
            text ={'Forgot password?'}
            loading = {auth.loading} 
            msg = {msg}>
            <View style = {Gstyals.logintextWrapper}>
                <Text onPress={()=>navigation.navigate('register')} style ={Gstyals.loginText}>Create USDTScan Wallet</Text>
            </View>
        </LoginWrapper>
    )
}