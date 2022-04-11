import { Alert } from "react-native";
import { auth } from '../config/firebase'

const handleSignUp = (email, password, rePass,  navigation ) => {

    console.log("????")
    if (password !== rePass) {
        alert("Passwords do not match")
    } else {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // navigation.navigate('Home')
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
    }

}

export default handleSignUp