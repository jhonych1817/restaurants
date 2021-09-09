import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { Overlay } from 'react-native-elements'

export default function Loading({isVisible, text}) {
    return (
        <Overlay
            isVisible = {isVisible}
            overlayStyle = {styles.overlay}
        >
            <View style= {styles.view}>
                <ActivityIndicator size="large" color="#442484"/>
                {
                    text && <Text style={styles.text}>{text}</Text>
                }
            </View>

        </Overlay>
    )
}

const styles = StyleSheet.create({

    overlay : {
        height : 90,
        width : 200,
        backgroundColor : "#fff",
        borderColor : "#442484",
        borderWidth : 2,
        borderRadius : 10
        
    },
    view : {
        alignItems : "center",
        justifyContent : "center"
    },
    text : {
        color : "#442484",
        marginTop : 10
    }
})
