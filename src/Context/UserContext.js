import React, { createContext, useEffect, useState } from 'react';
import { Auth, graphqlOperation, API } from 'aws-amplify';
import { userByEmail } from '../graphql/queries';

export const UserContext = createContext()
export const UserProvider = ({ children }) => {
    const initialState = {
        username: "",
        email: "",
        selfIntroduction: "",
        score: 0,
        createdAt: "",
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
        const userData = await Auth.currentAuthenticatedUser()
        setUserInfo(userData)
        try {
            const email = userData.attributes.email
            const User = await API.graphql(graphqlOperation(userByEmail, { email }))
            const userItems = User.data.userByEmail.items[0]
            const createdAt = new Date(userItems.createdAt).toLocaleString().split(' ')[0] //ローカルの時刻
            setUser({
                username: userItems.username,
                email: userItems.email,
                selfIntroduction: userItems.selfIntroduction,
                //日付以下を削除
                score: userItems.score,
                createdAt
            })
        } catch (err) {
            console.log('error fetching user')
        }
    }
    return (
        <>
            <UserContext.Provider value={{ userInfo, user }}>
                {children}
            </UserContext.Provider>
        </>
    )
}
