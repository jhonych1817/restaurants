import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'
import { size } from 'lodash'
import { useNavigation } from '@react-navigation/native'

import { validateEmail } from '../../utils/helper'
import { registerUserFirebase } from '../../utils/actions'
import Loading from '../Loading'


export default function RegisterForm() {
    const defaultFormValues = () => {
        return { email : "", password : "", confirm : "" }
    }

    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState(defaultFormValues)
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirm, setErrorConfirm] = useState("")
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation()

    

    const onChange = (e, type) => {
        setFormData({...formData, [type]: e.nativeEvent.text })
        
    }

    const registerUser = async() => {
        if(!validateData()) {
            return;
        }
        setLoading(true)
        const result = await registerUserFirebase(formData.email, formData.password)
        setLoading(false)

        if(!result.statusResponse){
            setErrorEmail(result.error)
            return
        }
        navigation.navigate("account")

    }

    const validateData = () => {
        setErrorConfirm("")
        setErrorEmail("")
        setErrorPassword("")
        let isValid = true

        if( !validateEmail(formData.email) ) {
            setErrorEmail("Debes de ingresar un email valido.")
            isValid = false
        }
        if(size(formData.password) < 6) {
            setErrorPassword("Debes ingresar una contraseña de al menos 6 carácteres.")
            isValid = false
        }
        if(size(formData.confirm) < 6) {
            setErrorConfirm("Debes ingresar una confirmación de contraseña de al menos 6 carácteres.")
            isValid = false
        }

        if(formData.password !== formData.confirm) {
            setErrorPassword("La contraseña y la confirmación no son iguales")
            setErrorConfirm("La contraseña y la confirmación no son iguales")
            isValid = false
        }

        return isValid
    }

    return (
        <View style = {styles.formulario}>
            <Input
                placeholder = "Ingresa tu email"
                containerStyle = {styles.input}
                onChange = { (e) => onChange(e, "email") }
                keyboardType = "email-address"
                errorMessage = {errorEmail}
                defaultValue = {formData.email}
            />
            <Input
                placeholder = "Ingresa tu contraseña"
                containerStyle = {styles.input}
                secureTextEntry = {!showPassword}
                onChange = { (e) => onChange(e, "password") }
                errorMessage = {errorPassword}
                defaultValue = {formData.password}
                rightIcon = {
                    <Icon
                        type = "material-community"
                        name = { showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle = {styles.icon}
                        onPress = { () => setShowPassword(!showPassword) }
                    />
                }
            />
            <Input
                placeholder = "Confirma tu contraseña"
                containerStyle = {styles.input}
                secureTextEntry = {!showPassword}
                onChange = { (e) => onChange(e, "confirm") }
                errorMessage = {errorConfirm}
                defaultValue = {formData.confirm}
                rightIcon = {
                    <Icon
                        type = "material-community"
                        name = { showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle = {styles.icon}
                        onPress = { () => setShowPassword(!showPassword) }
                    />
                }
            />
            <Button 
                title = "Registrar Nuevo Usuario"
                containerStyle = {styles.btnContainer}
                buttonStyle = {styles.btn}
                onPress = { ()=> registerUser() }
            />
            <Loading isVisible= { loading } text="Creando Cuenta ..." />
        </View>    
    )
}

const styles = StyleSheet.create({
    formulario : {
        flex: 1,
        marginHorizontal : 40
    },
    input : {
        width : "100%"
    },
    btnContainer : {
        marginTop : 20,
        width : "95%",
        alignSelf : "center"
    },
    btn : {
        backgroundColor : "#442484"
    },
    icon : {
        color : "#c1c1c1"
    }
})
