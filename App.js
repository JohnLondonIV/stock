import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Stock from './components/Stock';
import SearchBar from './components/SearchBar';
import axios from 'axios';


export default function App() {

    const [stockData, setStockData] = useState(null);
    const [loaded, setLoaded] = useState(true);

    async function fetchStockData(country, symbol) {
        setLoaded(false);
 
        const url = `https://api.fintel.io/web/v/0.0/ss/us/${symbol}`


        try {
          const response = await axios.get(
            url,
          {headers: {
                "Content-type": "Application/json",
                "X-API-KEY": "sk_2f019fcc84ad45a1b2e988a91ae6e097"
                }   
            }
        )
            if(response.status == 200) {
               setStockData(response.data);
            } else {
                setStockData(null);
            }
            setLoaded(true);
            
        } catch (error) {
            console.log(error);
      
 }
    }

  useEffect(() => {
    fetchStockData('us', 'AMC')
  }, [])

  
  if (!loaded){
    return(
      <View style={styles.container}>
        <ActivityIndicator color='yellow' size={40} />
      </View>
    )
  }

  else if(stockData == null){
    return(
      <View style={styles.container}>
        <SearchBar fetchStockData={fetchStockData}/>
        <Text style={styles.primaryText}>Stock Not Found!</Text>
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <Stock stockData={stockData} fetchStockData={fetchStockData}/>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
    margin: 20,
    fontSize: 28,
    fontWeight: 'bold',
    color: 'green'
  },

});
