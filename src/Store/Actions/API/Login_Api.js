// import * as firebase from "firebase"
import firebase from "../../../Config/firebase-conf";
import { Alert } from "../../../Helpers/Alert";



const LoginUsingGoogleOrFacebook = (web) => {
    var provider;
    Alert("info", "Please Wait", "Your Request Is Being In Process");
    switch (web) {

        case "facebook":
            provider = new firebase.auth.FacebookAuthProvider();
            break;

        case "google":
            provider = new firebase.auth.GoogleAuthProvider();
            break;
            default:
            break;

    }

    firebase.auth().signInWithPopup(provider).then(function (result) {
        var user = result.user;
        checkMember(user);
    }).catch(function (error) {
        Alert("error", "Error", error.message);
    });
}

const customLoginSignUp = (data, type) => {
    Alert("info", "Please Wait", "Your Request Is Being In Process");
    if (type === "SignUp") {
        firebase.auth().createUserWithEmailAndPassword(data.Email, data.Password).then((result) => {
            checkMember(result.user);
        }).catch(function (error) {
            Alert("error", "Error", error.message);
        });
    }
    else if (type === "Login") {
        firebase.auth().signInWithEmailAndPassword(data.Email, data.Password).then((result) => {
            checkMember(result.user);
        }).catch(function (error) {
            Alert("error", "Error", error.message);
        });
    }
}

const checkMember = (user) => {
    firebase.database().ref(`tinder/users/${user.uid}`).on('value', (data) => {
        if (data.val()) {
            Alert("success", "Sign In For Tinder App", "Successfully Logged In");
            return;
        }
        Alert("info", "Sign In For Tinder App", "Almost There");
        return;
    })
}

export {
    LoginUsingGoogleOrFacebook,
    customLoginSignUp
}