import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function UserGuest() {

    const navigation = useNavigation()
    return (
        <ScrollView
            centerContent
            style = {styles.viewBody}
        >
            <Image
                source = { require("../../../assets/restaurant-logo.png") }
                resizeMode = "contain"
                style = {styles.image}
            />
            <Text style= {styles.title}>Consulta tu perfil en Restaurantes</Text>
            <Text style = {styles.description}>¿Cómo describirías tu mejor restaurante? Busca y visualiza los mejores restaurantes de una forma sencilla,
                 vota cuál te ha gustado más y comenta cómo ha sido tu experiencia.</Text>
            <Button
                buttonStyle = {styles.button}
                title = "Ver tu perfil"
                onPress = { () => navigation.navigate("login") }
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    viewBody : {
        marginHorizontal : 30
    },
    image :  {
        height : 300,
        width : "100%",
        marginBottom : 10
    },
    title : {
        fontWeight : "bold",
        fontSize : 19,
        marginVertical : 10,
        textAlign : "center",
        color : "#442484"
    },
    description : {
        textAlign : "justify",
        marginBottom : 20,
        color : "#a65273"
    },
    button : {
        backgroundColor : "#442484"
    }
})
