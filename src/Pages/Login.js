import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { Gstyals } from "../../Gstyles"
import { LoginWrapper } from "../Components/LoginWrapper"
import { clearError, LoginAction } from "../store/action/action"

export const Login = ({navigation}) => {
    const {auth} = useSelector((st)=>st)
    const [item,setItem] =useState([
        {
            name:'personal_wallet_address',
            placeholder:'Personal wallet address (38 characters)',
            value:'',
            error:''
        },
        {
            name:'password',
            placeholder:'password',
            value:'',
            type:"password",
            error:''
        },
        {
            name:'secret_phrase_1',
            placeholder:'Secret Phrase #1 (32 characters)',
            value:'',
            type:'password',
            error:''
        },
        {
            name:'a',
            placeholder:'Secret Phrase #2 (32 characters)',
            value:'',
            type:'password',
            error:''
        }
    ])
    const handelClick = (i,type) => {
        let temp = [...item]
        temp[i].type = type
        setItem(temp)
    }
    const handleChange = (i,value) => {
        let temp = [...item]
        temp[i].value = value
        setItem(temp)
    }
    const dispatch = useDispatch()
    const validate = () => {
        dispatch(clearError())
        let temp = [...item]
        temp.map((elm,i)=>{
            if(elm.name === 'personal_wallet_address'){
                if(elm.value === ''){
                    elm.error = 'empty personal wallet'
                }
                else {
                    elm.error = ''
                }
            }
            else if (elm.name === 'password'){
                if(elm.value === ''){
                    elm.error = 'empty password'
                }
                else {
                    elm.error = ''
                }
            }
            else if(elm.name === 'secret_phrase_1'){
                if(elm.value === ''){
                    elm.error = 'empty Secret Phrase #1'
                }
                else {
                    elm.error = ''
                }
            }
            else if(i ==3){
                if(elm.value === ''){
                    elm.error = 'empty  Secret Phrase #2'
                }
                else {
                    elm.error =''
                }
            }
           
        })
        setItem(temp)
        let send = true
        temp.map((elm,i)=>{
            if(elm.error !==''){
                send =false
            }
        })
        if(send){
            dispatch(LoginAction(temp[0].value,temp[1].value,temp[2].value,temp[3].value))
        }
    }
    useEffect(()=>{
        if(auth.token){
            navigation.navigate('Home')
        }
    },[auth.token])
 const navigate = (navigate) =>{
    let temp = [...item]
        temp.map((elm,i)=>{
            elm.error=''
        })
        setItem(temp)
        navigation.navigate(navigate)
 }
    return (
        <LoginWrapper 
            validate={()=>validate()} 
            onChange = {(i,value)=>handleChange(i,value)} 
            onPress = {(id,type)=>handelClick(id,type)} 
            navigation = {navigation} 
            item = {item} 
            title ={'USDTScan Login'} 
            text ={'Please sign in to continue'} 
            ButtonTitle = {'Login'}
            loading = {auth.loading}
            error = {auth.error}
            >
            <View style = {Gstyals.logintextWrapper}>
                <Text onPress={()=>{navigate('recovery')
                    }
                    
                    } style = {Gstyals.loginText}>Forgot password?</Text>
                <Text onPress={()=>navigate('register')} style = {Gstyals.loginText}>Create USDTScan Wallet</Text>
            </View>
        </LoginWrapper>
    )
}

const  styles = StyleSheet.create({
    
})