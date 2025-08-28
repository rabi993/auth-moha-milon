import React, { createContext } from 'react';

export const AuthContext = createContext(null);


const AuthProviders = ({children}) => {
    const authInfo = {
        name: 'Nodi sagor khal bil..'
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;


/*
* 1. Create context with null as default
* 2. Create Provider
* 3. set a value with something (authInfo)
* 4. [ attention Please !!!]
* 5. use the authProvider in the main.jsx
* 6. access the children inside the authProvider in the main.jsx
* 7. export AuthContext

*/