import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

const width = Dimensions.get('screen').width;

const Toast = (props) => {
    const {
        title,
        show
    } = props;
    return (
        <View style={styles.container}>
            <View style={[styles.wrapp, { display: show ? 'flex' : 'none' }]}>
                <Text style={{ fontSize: 17, color: 'white', fontWeight: '900' }}>{title}</Text>
            </View>
        </View>
    )
}

export default Toast

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'absolute',
        bottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapp: {
        height: 40,
        backgroundColor: 'rgba(52, 52, 52, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        paddingHorizontal: 10,
    }
})
