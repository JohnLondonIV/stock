import React, { useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Dimensions} from 'react-native'
import {EvilIcons} from '@expo/vector-icons'


export default function SearchBar({fetchStockData}){

    const [countryName, setCountryName] = useState('');
    const [symbol, setSymbol] = useState('');

    return(
        <View style={styles.searchbar}>
            <View>
                <TextInput style={{width: '90%', height: 30}} placeholder='Enter Symbol' 
                    value={symbol} onChangeText={(text)=> setSymbol(text)}/>
            </View>
                <EvilIcons name='search' size={28} color='black'
                onPress={() => fetchStockData(countryName, symbol)}/>
            </View>
       )
}

const styles = StyleSheet.create({
    searchbar: {
        marginTop: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width - 20,
        borderStartWidth: 1.5,
        paddingVertical: 10,
        borderTopEndRadius: 25,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: 'lightgray',
        borderColor: 'orange',

    }
})