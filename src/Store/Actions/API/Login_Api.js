import * as firebase from "firebase"
import { Alert } from "../../../Helpers/Alert";
import Store from "../../Store"
import history from "../../../Helpers/history";



const LoginUsingGoogleOrFacebook = (web) => {
    var provider;
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

        Store.dispatch({
            type: "NewUser",
            NewUser: user
        })


        
        Alert("info", "Sign In For Tinder App", "Almost There");
        history.push("NewUser");
    })
}

export {
    LoginUsingGoogleOrFacebook,
    customLoginSignUp
}