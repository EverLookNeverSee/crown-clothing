import {initializeApp} from "firebase/app";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore";

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
initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalUserInfo = {}) => {
	if (!userAuth) return;
	const userDocRef = doc(db, "users", userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);
	if (!userSnapshot.exists()) {
		const {displayName, email} = userAuth;
		const createdAt = new Date();
		try {
			await setDoc(userDocRef, {displayName, email, createdAt, ...additionalUserInfo});
		} catch (err) {
			console.log(`Error in creating the user: ${err.message}`);
		}
	}
	return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};
