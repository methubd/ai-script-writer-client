import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true);

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        user,
        googleLogin,
        logOut,
        loading
    }

    // Observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)

            if(currentUser){
                setLoading(true)
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        "content-type" : "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('AuthSecret', data.token)
                    setLoading(false)
                })
            }

            localStorage.removeItem('AuthSecret')
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;