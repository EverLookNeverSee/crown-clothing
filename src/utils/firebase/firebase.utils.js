import {initializeApp} from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCCcWWj_mJoPwEBtYjhqSz4Ic-eV_5GAxk",
	authDomain: "crown-clothing-ccb62.firebaseapp.com",
	projectId: "crown-clothing-ccb62",
	storageBucket: "crown-clothing-ccb62.appspot.com",
	messagingSenderId: "48157665233",
	appId: "1:48157665233:web:0bd372e422e68b329362f0",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
