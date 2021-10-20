import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, StatusBar, Image, Linking } from 'react-native'
import SearchBar from './SearchBar'
import back from '../assets/back.jpg'


export default function Stock({ stockData, newData, fetchStockData, eodData }) {

    const [backgroundImage, setBackgroundImage] = useState(null)


    console.log(stockData)

    let urlData = stockData.url;

    return (
        <View style={styles.container}>
            <StatusBar backgroundImage="grey" />
            <ImageBackground source={back} style={styles.backgroundImage} resizeMode='cover'>
                <SearchBar fetchStockData={fetchStockData} />
                <View style={{ alignItems: 'center', marginVertical: 50 }}>
                    <Text style={{ ...styles.headerText, color: 'gold', fontWeight: 'bold', fontSize: 30 }}>
                        Exchange: {stockData.exchange}</Text>
                    <Text style={{ ...styles.headerText, color: 'yellow', fontWeight: 'bold', fontSize: 30, justifyContent: 'space-around', marginTop: 15 }}>
                        Symbol: {stockData.symbol}</Text>
                    <Text style={{ ...styles.headerText, color: 'yellow', fontWeight: 'bold', fontSize: 17, marginTop: 15 }}>
                        Company: {stockData.name}</Text>
                    <Text style={{ ...styles.headerText, color: '#2cfc03', fontWeight: 'bold', textAlign: 'center', fontSize: 34, marginTop: 20, justifyContent: 'space-around' }}>
                        Short Float: {eodData.SharesStats.ShortPercentFloat * 100}%</Text>
                    <Text style={{ ...styles.headerText, color: 'gold', fontWeight: 'bold', textAlign: 'center', fontSize: 30, marginTop: 20, justifyContent: 'space-around' }}>
                        Float: {Number(eodData.SharesStats.SharesFloat).toLocaleString()}</Text>
                    <Text style={{ ...styles.headerText, color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 19, marginTop: 20, justifyContent: 'space-around' }}>
                        Today's Short Volume Ratio: {stockData.data[0].shortVolumeRatio * 100}%</Text>
                    <Text style={{ ...styles.headerText, color: 'yellow', fontWeight: 'bold', fontSize: 19, marginTop: 20 }}>
                        Short Volume: {Number(stockData.data[0].shortVolume).toLocaleString()}</Text>
                    <Text style={{ ...styles.headerText, color: 'yellow', fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>
                        Volume: {Number(stockData.data[0].totalVolume).toLocaleString()}</Text>
                    <Text style={{ ...styles.headerText, color: 'gold', fontWeight: 'bold', fontSize: 20, marginTop: 20, textAlign: 'center' }}>
                        Market Cap: {Number(eodData.Highlights.MarketCapitalization).toLocaleString()}</Text>
                    <Text style={{ ...styles.headerText, color: 'lightgreen', fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>
                        Buy Ratings: {eodData.AnalystRatings === undefined ? "none available" : eodData.AnalystRatings.Buy}</Text>
                    <Text style={{ ...styles.headerText, color: 'white', fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>
                        Hold Ratings: {eodData.AnalystRatings === undefined ? 'none available' : eodData.AnalystRatings.Buy}</Text>
                    <Text style={{ ...styles.headerText, color: '#f54269', fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>
                        Sell Ratings: {eodData.AnalystRatings === undefined ? "none available" : eodData.AnalystRatings.Sell}</Text>
                    <Text style={{ ...styles.headerText, color: 'red', fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>
                        Strong Sell Ratings: {eodData.AnalystRatings === undefined ? "none available" : eodData.AnalystRatings.StrongSell}</Text>
                    <Text style={{ ...styles.headerText, color: 'gold', fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>
                        Target Price: {eodData.AnalystRatings === undefined ? "none available" : eodData.AnalystRatings.TargetPrice}</Text>
                    <Text onPress={() => Linking.openURL(newData[0].url)} style={{ ...styles.headerText, color: 'yellow', fontWeight: 'bold', fontSize: 30, marginTop: 5, textDecorationLine: "underline", textDecorationStyle: "solid", textDecorationColor: "white" }}>Latest SEC Filing</Text>
                    <Text style={{ ...styles.headerText, color: 'yellow', fontWeight: 'bold', fontSize: 15, marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                        Yesterday's Short Volume Ratio: {(stockData.data[1].shortVolumeRatio * 100).toFixed(1)}%</Text>
                    <Text style={{ ...styles.headerText, color: 'white', fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>
                        Change: {((stockData.data[0].shortVolumeRatio - stockData.data[1].shortVolumeRatio) * 100).toFixed(1)}%</Text>
                    <Text onPress={() => Linking.openURL("http://youtube.com/beginnertrading")} style={{ ...styles.headerText, color: 'yellow', fontWeight: 'bold', fontSize: 18, marginTop: 5, textDecorationLine: "underline", textDecorationStyle: "solid", textDecorationColor: "white" }}>Watch us trade live HERE on YouTube!</Text>
                    <Text onPress={() => Linking.openURL(urlData)} style={{ ...styles.headerText, color: 'white', fontWeight: 'bold', fontSize: 18, marginTop: 5, textDecorationLine: "underline", textDecorationStyle: "solid", textDecorationColor: "white" }}>Full FINTEL Short Report</Text>
                    <Image style={{ height: 475, width: 350 }} resizeMode='contain' source={(stockData.chart.url)} />
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
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
    },

    extraInfo: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-evenly',
        padding: 20
    },

    info: {
        width: Dimensions.get('screen').width / 2.5,
        backgroundColor: 'rgba(0, 0, 100, 0.7)',
        padding: 7,
        borderRadius: 15,
        justifyContent: 'center'
    }

})

/*<Text style={{ ...styles.headerText, color: 'lightgreen', fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>
Buy Ratings: {eodData.AnalystRatings != null ? eodData.AnalystRatings.Buy : "none available"}</Text>
<Text style={{ ...styles.headerText, color: 'white', fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>
    Hold Ratings: {eodData.AnalystRatings === null ? 'none available' : eodData.AnalystRatings.Buy}</Text>
<Text style={{ ...styles.headerText, color: '#f54269', fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>
    Sell Ratings: {eodData.AnalystRatings.Sell}</Text>
<Text style={{ ...styles.headerText, color: 'red', fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>
    Strong Sell Ratings: {eodData.AnalystRatings.StrongSell}</Text>
<Text style={{ ...styles.headerText, color: 'gold', fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>
    Target Price: {eodData.AnalystRatings.TargetPrice}</Text>*/