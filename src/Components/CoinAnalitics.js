import { Image, StyleSheet, Text, View } from "react-native"
import { Svgs } from "../Svg/svg"

export default CoinAnalitics = ({img,title,color,lastPrice,price,data,title2}) =>{
    return <View style = {styals.coinAnalitics}>
        <View style = {styals.TitleWrapper}>
        {title2 === 'ETH'?
            <Image style = {styals.image}  source={require('../images/e.png')} />:
            <View  style = {styals.image}>
                <Svgs title={title2}/>
            </View> 
        }
            <View>
                <Text style = {styals.Title}>{title} </Text>
                <Text style = {{color:'black'}}>
                    {title2} (USD) = 
                     $<Text>{lastPrice}</Text>
                     <Text>   </Text>
                   <Text style = {[price && price[0] === '-' ?styals.minus: styals.procent]}>
                    {price && price[0] !== '-'  &&
                    <Text>+</Text>
                    }    
                    {price && price}%</Text>
                </Text>
            </View>
        </View>
        <Image style = {styals.chart} source={img} ></Image>
        <View style = {[styals.end,{backgroundColor:color}]}>
            <View style = {[styals.EndView]}>
                <Text style = {styals.text} >1D</Text>
                <Text style = {styals.text2} >
                {JSON.stringify(data?.market_data?.price_change_percentage_24h)?.slice(0,1)!=='-'  &&
                    <Text>+</Text>
                    }   
                    {data?.market_data?.price_change_percentage_24h}%</Text>
            </View>
            <View style = {[styals.EndView,styals.border]}>
                <Text style = {styals.text} >1W</Text>
                <Text  style = {styals.text2}>
                {JSON.stringify(data?.market_data?.price_change_percentage_7d)?.slice(0,1)!=='-'  &&
                    <Text>+</Text>
                    }   
                    {data?.market_data?.price_change_percentage_7d}%</Text>
            </View>
            <View style = {[styals.EndView,styals.border]}>
                <Text style = {styals.text} >1M</Text>
                <Text  style = {styals.text2}>
                {JSON.stringify(data?.market_data?.price_change_percentage_30d)?.slice(0,1)!=='-'  &&
                    <Text>+</Text>
                    }   
                    {data?.market_data?.price_change_percentage_30d}%</Text>
            </View>
            <View style = {[styals.EndView,styals.border]}>
                <Text style = {styals.text} >1Y</Text>
                <Text  style = {styals.text2}>
                {JSON.stringify(data?.market_data?.price_change_percentage_1y)?.slice(0,1)!=='-'  &&
                    <Text>+</Text>
                    }   
                    {data?.market_data?.price_change_percentage_1y}%</Text>
            </View>
        </View>
    </View>
}


const styals = StyleSheet.create({
    coinAnalitics:{
        marginBottom:40,
        height:200,
        borderRadius:8,
        backgroundColor:'white',
        shadowColor: '#171717',
        shadowOffset: {
            width: -2,
            height: 4,
        },
        shadowOpacity: 0.20,
        shadowRadius: 3,
        elevation: 2,
      
    },
    image:{
        width:42,
        height:42,
        marginRight:20,
    },
    TitleWrapper:{
        flexDirection:'row',
        padding:20,
        },
    Title:{
        fontSize:14,
        fontWeight:700,
        color:'#1c273c',
        marginBottom:3,        
    },
    procent:{
        color:'rgb(113, 178, 128)'
    },
    end:{
        flexDirection:'row',
        borderTopWidth:0.5,
        height:40,
        borderBottomRightRadius:8,
        borderBottomLeftRadius:8,
        borderColor:'#d9d9d9'
    },
    border:{
        borderLeftWidth:0.5,
        borderColor:'#d9d9d9'
    },
    EndView:{
        width:'25%',
        height:40,
        borderColor:' #edecf7',
        justifyContent:'center',
    },
    text:{
        color:'#556888',
        textAlign:'center',
        fontSize:11,
    },
    text2:{
        color:'#031b4e',
        fontWeight:500,
        fontSize:11,
        textAlign:'center'
    },
    chart:{
        width:'100%',
        height:80
    },
    minus:{
        color:'red'
    }
})