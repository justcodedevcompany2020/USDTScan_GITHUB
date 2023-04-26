import { View,StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import { Table, Row, Rows } from 'react-native-table-component';

export default SearchTAble = ({tableHead,tableData,widthArr =[200,80,80,200,200] }) =>{
    return (
        <ScrollView horizontal ={true}>
        <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1, borderColor: '#d9d9d9'}}>
          <Row widthArr={widthArr}  data={tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows widthArr={widthArr}  data={tableData} textStyle={styles.text}/>
        </Table>
      </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    text:{
        textAlign:'center',
        height:20,
        marginVertical:10,
        color:"#8587a7",
        fontSize:13,
        paddingHorizontal:10,
    },
    img:{
        height:14,
        width:14,
        marginHorizontal:10,
    },
    container: { 
        flex: 1, 
        backgroundColor: '#fff',
        marginBottom:20,
    },
    head: { 
        height: 40,
    },
})
