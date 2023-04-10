import { useEffect, useState } from "react"
import { View ,Text, StyleSheet,Linking, Modal } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { Gstyals } from "../../Gstyles"
import { LoginWrapper } from "../Components/LoginWrapper"
import { Modals } from "../Components/Modal"
import { clearRegisterData, Create_wallet } from "../store/action/action"

export const Register = ({navigation}) => {
    const dispatch = useDispatch()
    const [popUp,setPopUp] = useState(false)
    const {auth} = useSelector((st)=>st)
    const [item,setItem] = useState([
        {
            name:'email',
            placeholder:'Personal Email',
            text:'Personal Email',
            value:'',
            error:'',
        },
        {
            name:'password',
            placeholder:'Password',
            text:'Password',
            value:'',
            Type:"password",
            error:''
        },
        {
            name:'retype_password',
            placeholder:'Retype Password',
            text:'Retype Password',
            Type:"password",
            value:'',
            error:''
        },
        {
            name:'personal_phone_Number',
            placeholder:'Personal Phone Number (Optional)',
            text:'Personal Phone Number (Optional)',
            value:'',
            error:''
        },
        {
            name:'usdtchain_referral_address',
            placeholder:'USDTChain Referral Address (Optional)',
            text:'USDTChain Referral Address (Optional)',
            value:'',
            error:''
        },
    ])
    const [error,setError] = useState('')
    const handleChange = (i,value) => {
        let temp = [...item]
        temp[i].value = value
        setItem(temp)
    }


    const validateEmail = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
          return false;
        }
        else {
            return true
        }
      }

      const Validate = () => {
        let temp =[...item]
        temp.map((elm,i)=>{
            if(elm.name === 'email'){
                if(elm.value !==''){
                    if(!validateEmail(elm.value)){
                        elm.error ='wrong e-mail'
                    }
                    else {
                        elm.error =''
                    }
                }
                else {
                    elm.error ='empty e-mail'
                }
            }
            else if(elm.name === 'password'){
                if(!elm.value.length){
                    elm.error = 'empty password'
                }
                else {
                    elm.error = ''
                }
            }
            else if (elm.name === 'retype_password'){
                if(elm.value !==temp[1].value){
                    elm.error ='password don`t match'
                }
                else {
                    elm.error = ''
                }
            }
        })
        let send = true
        temp.map((elm,i)=>{
            if(elm.error !==''){
                send=false
            }
        })
        if(send){
            dispatch(Create_wallet(
                100,
                item[0].value,
                item[1].value,
                item[2].value,
                item[3].value,
            ))
        }
        setItem(temp)
      }
    useEffect(()=>{
        if(auth?.data?.success){
            setPopUp(true)
        }
        else {
            setPopUp(false)
        }
    },[auth?.data?.success])
    return <LoginWrapper 
                validate = {()=>Validate()}  
                onChange={(i,value)=>handleChange(i,value)} 
                navigation ={navigation} 
                ButtonTitle={'Create Wallet'} 
                item = {item} 
                title = {'Welcome to USDTSCAN!'} 
                text ={'Create Personal USDTSCAN Wallet'}
                loading = {auth.loading}
            >
                <Modal visible = {popUp} transparent = {true}>
                    <Modals 
                        onPress = {()=>{
                            navigation.navigate('login')
                            dispatch(clearRegisterData())
                            setPopUp(false)
                        }} 
                        token = {auth.data?.Wallet} 
                        recovery_word = {auth.data?.recovery_word} 
                        recovery_word2 = {auth.data?.recovery_word2}
                        navigation = {navigation}
                        >
                        </Modals>
                </Modal>
        <View style = {styles.textWrapper}>
            <Text style = {{color:'#333'}}>I have read and agree to USDTScan’s 
                <Text onPress={() => Linking.openURL('https://usdtscan.com/USDTSCAN_Terms_of_Service.pdf')} style = {styles.link}>Terms of Service</Text>  
                <Text onPress={() => Linking.openURL('https://usdtscan.com/USDTSCAN_Privacy_Policy.pdf')} style = {styles.link}>Privacy Policy</Text></Text>
                <Text onPress={()=>navigation.navigate('login')} style ={Gstyals.loginText}>Log In</Text>
        </View>
    </LoginWrapper>
}
const styles = StyleSheet.create({
    textWrapper:{
        marginTop:20,
        borderTopWidth:1,
        borderColor:'rgba(0, 0, 0, 0.1)',
        paddingTop:20
    },
    link:{
        color:'blue'
    }
})