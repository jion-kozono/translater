import React, { createContext, useEffect, useState } from 'react';
import { Auth, graphqlOperation, API } from 'aws-amplify';
import { userByEmail } from '../graphql/queries';

export const UserContext = createContext()
export const UserProvider = ({ children }) => {
    const initialState = {
        id: "",
        username: "",
        email: "",
        selfIntroduction: "",
        score: 0,
        createdAt: "",
        _version: 0
    }
    const [userInfo, setUserInfo] = useState([])
    const [user, setUser] = useState(initialState)
    useEffect(() => {
        getUserData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
    }, [user])
    const getUserData = async () => {
        try {
            const userData = await Auth.currentAuthenticatedUser()
            setUserInfo(userData)
            const email = userData.attributes.email
            const User = await API.graphql(graphqlOperation(userByEmail, { email }))
            const userItems = User.data.userByEmail.items[0]
            console.log(userItems)
            const dt = new Date(userItems.createdAt)
            const createdAt = dt.toLocaleString().split(' ')[0]
            setUser({
                id: userItems.id,
                username: userItems.username,
                email: userItems.email,
                selfIntroduction: userItems.selfIntroduction,
                score: userItems.score,
                createdAt,
                _version: userItems._version
            })
        } catch (err) {
            // getUserData()
            console.log('error fetching user', err)
        }
    }
    return (
        <>
            <UserContext.Provider value={{ userInfo, user, setUser }}>
                {children}
            </UserContext.Provider>
        </>
    )
}
