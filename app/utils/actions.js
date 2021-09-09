import firebase from './firebase'
import 'firebase/firestore'
import 'firebase/auth'


export const isUserLogged = () => {

    let isLogged = false
    firebase.auth().onAuthStateChanged( user => {
        user != null && ( isLogged = true )
    })
    return isLogged   
}

export const getCurrentUser = () => {

    return firebase.auth().currentUser
}

export const registerUserFirebase = async(email, password) => {
    const result = { statusResponse : true, error : null }
    
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        let user = userCredential.user
        result.statusResponse = true
        
        })
        .catch((error) => {
        result.statusResponse = false
        result.error = "Este correo ya fue registrado."
        
        })
    return result    
}

export const closeSession = () => {
    return firebase.auth().signOut()
}

export const loginWithEmailAndPassword = async(email, password) => {
    const result = { statusResponse : false, error : null }
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user
            result.statusResponse = true
            
          })
          .catch((error) => {
            result.statusResponse = false  
            result.error = "Usuario o contraseña no validos."
          });
    
    return result
}