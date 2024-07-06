import React, { createContext } from 'react';
import PropTypes from 'prop-types'

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const authinfo = {name:'hello from context API'}
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider

AuthProvider.propTypes = {
    children: PropTypes.node
}