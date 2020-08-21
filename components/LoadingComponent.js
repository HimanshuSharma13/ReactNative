import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';


export const Loading = () => {
    return (
        <View style={styles.loadingView}>
            <ActivityIndicator size="large" color='#3f51b5' />
            <Text style={styles.loadingText}>Loading . . .</Text>
        </View>
    );
}



const styles = StyleSheet.create({
    loadingView: {
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    loadingText: {
        color:'#3F51B5',
        fontSize:14,
        fontWeight:'bold'
    }
});