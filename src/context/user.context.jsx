import {createContext, useEffect, useState} from "react";
import {
	createUserDocumentFromAuth,
	onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

// As the actual value that you want to access:
export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});
export const UserProvider = ({children}) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = {currentUser, setCurrentUser};
	useEffect(() => {
		return onAuthStateChangedListener(async user => {
			if (user) {
				await createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
		});
	}, []);
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
