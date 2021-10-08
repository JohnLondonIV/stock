import React, { useState, useEffect} from 'react';
import {View, Text, StyleSheet, ImageBackground, Dimensions, StatusBar, Image, Linking} from 'react-native'
import SearchBar from './SearchBar'
import {snow, candle} from '../assets'


export default function Stock({stockData, fetchStockData}){

const [backgroundImage, setBackgroundImage] = useState(null)

console.log(stockData)

let urlData = stockData.url;

     return(
        <View style = {styles.container}>
            <StatusBar backgroundImage="grey"/>
            <ImageBackground source = {candle} style={styles.backgroundImage} resizeMode='cover'>
                <SearchBar fetchStockData={fetchStockData}/>
                <View style={{alignItems: 'center', marginVertical: 50 }}>
                    <Text style={{...styles.headerText, color: 'white', fontWeight: 'bold', fontSize: 30}}>
                        Exchange: {stockData.exchange}</Text>
                    <Text style={{...styles.headerText, color: 'yellow', fontWeight: 'bold', fontSize: 40, justifyContent: 'space-around', marginTop: 15}}>
                        Symbol: {stockData.symbol}</Text>
                    <Text style={{...styles.headerText, color: 'yellow', fontWeight: 'bold', fontSize: 17,  marginTop: 15}}>
                        Company: {stockData.name}</Text>    
                    <Text style={{...styles.headerText, color: 'white', fontWeight: 'bold', fontSize: 25,  marginTop: 20}}>
                        Short Volume Ratio: {stockData.data[0].shortVolumeRatio * 100}%</Text>
                    <Text style={{...styles.headerText, color: 'white', fontWeight: 'bold', fontSize: 19, marginTop: 20}}>
                        Short Volume: {stockData.data[0].shortVolume}</Text>
                    <Text style={{...styles.headerText, color: 'white', fontWeight: 'bold', fontSize: 20, marginTop: 20}}>
                        Volume: {stockData.data[0].totalVolume}</Text>
                    <Text style={{...styles.headerText, color: 'white', fontWeight: 'bold', fontSize: 20, marginTop: 20}}>
                        Yesterday's Short Percentage {stockData.data[1].shortVolumeRatio * 100}%</Text>
                    <Text style={{...styles.headerText, color: 'white', fontWeight: 'bold', fontSize: 30, marginTop: 20}}>
                        Change: {((stockData.data[0].shortVolumeRatio - stockData.data[1].shortVolumeRatio) * 100).toFixed(1)}%</Text> 
                    <Text onPress={() => Linking.openURL(urlData)} style={{...styles.headerText, color: 'white', fontWeight: 'bold', fontSize: 18, marginTop: 5,  textDecorationLine: "underline", textDecorationStyle: "solid", textDecorationColor: "white"}}>Full FINTEL Short Report</Text>
                    <Image style={{height: 475, width: 350}}  resizeMode='contain' source={(stockData.chart.url)}/>   
                </View>
            </ImageBackground>
        </View>
       )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
},
    backgroundImage: {  
        flex: 5,
        width: Dimensions.get('screen').width
},
    headerText: {
        fontSize: 36,
        marginTop: 10,
},

    extraInfo: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-evenly',
        padding: 30
},

    info: {
        width: Dimensions.get('screen').width/2.5,
        backgroundColor: 'rgba(0, 0, 100, 0.7)',
        padding: 10,
        borderRadius: 15,
        justifyContent: 'center'
    }

})
