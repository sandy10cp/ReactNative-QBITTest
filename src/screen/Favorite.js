import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Favorite = () => {
    return (
        <View style={styles.container}>
            <Text>Favorite</Text>
        </View>
    )
}

export default Favorite

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e3e3e3',
    }
})
