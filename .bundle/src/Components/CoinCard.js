import { StyleSheet, View , Text,Dimensions,Pressable} from "react-native"
import { Svgs } from "../Svg/svg";

export default CoinCard = ({title,price,procent,onPressIn,onPressOut}) =>{
  const windowWidth = Dimensions.get('window').width;
    return <Pressable onPressIn = {()=>onPressIn(true)} onPressOut = {()=>onPressOut(false)} style = {[styles.coin,{width:windowWidth-43}]}>
            <View style = {styles.img}>
                <Svgs title={title} />
            </View>
        <View>
            <Text style = {{color:"black"}}>{title.replace("USDT", "")}/ USDT</Text>
            <Text style = {styles.price}>${price.slice(0,7)} <Text style = {[procent && procent[0] === '-' ?styles.minus: styles.procent]}>
            {procent && procent[0] !== '-'  &&
                    <Text>+</Text>
                    }    
                {procent}%</Text> </Text>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    coin:{
        height:70,
        backgroundColor:'#fff',
        borderRadius:6,
        alignItems:'center',
        flexDirection:'row',
        borderColor:'rgba(0,0,0,.125)',
        marginRight:3, 
        shadowColor:'#9f9fbb',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,   
    },
    coinIcon:{
        borderWidth:1,
        height:25,
        width:25,
    },
    img:{
        width:25,
        height:25,
        marginHorizontal:20,
    },
    price:{
        color:'#e8b210',
    },
    procent:{
        color:'rgb(113, 178, 128)',
    },
    minus:{
        color:"red"
    }
})