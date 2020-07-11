import React, { createContext, useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';

export const UserContext = createContext()
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState([])
    useEffect(() => {
        getUser()
    },[])
    const getUser = async () => {
        const userData = await Auth.currentAuthenticatedUser()
        setUser(userData)
    }
    return (
        <>
            <UserContext.Provider value={{ user }}>
                {children}
            </UserContext.Provider>
        </>
    )
}
