import { Alert } from "react-native";
import {auth} from '../config/firebase'

const signIn = (email, password, navigation) => {

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          
            Alert.alert("Successfully Signed In!");
            navigation.navigate("Home")
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Alert.alert(errorMessage, ": " + errorCode)
        })

}
export default signIn