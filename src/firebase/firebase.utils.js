import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


const config = {
    apiKey: "AIzaSyDdo6JkLG67vhNtOg7uAEQe_3JAdI1zEMw",
    authDomain: "e-clothing-523f1.firebaseapp.com",
    databaseURL: "https://e-clothing-523f1.firebaseio.com",
    projectId: "e-clothing-523f1",
    storageBucket: "e-clothing-523f1.appspot.com",
    messagingSenderId: "242264891605",
    appId: "1:242264891605:web:9d03529422695eebe6025c"
};

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get()
    if (!snapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log("error creating user", error.message)
        }
    }

    return userRef
   
}
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})

export const signInwithGoogle = () => auth.signInWithPopup(provider)

export default firebase;