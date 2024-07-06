import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import PropTypes from 'prop-types'
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const authinfo = { name: 'hello from context API' }

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current value of the current user', currentUser)
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = { user, createUser, signInUser, logout }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider

AuthProvider.propTypes = {
    children: PropTypes.node
}