import React, { createContext, useReducer } from 'react';

const initialState = {
    posts: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return { posts: action.payload.posts }
        default:
            return state
    }
}
export const PostContext = createContext({
    globalPostState: initialState,
    setGlobalPostState: () => null
})
export const PostProvider = ({ children }) => {
    const [globalPostState, setGlobalPostState] = useReducer(reducer, initialState)
    return (
        <>
            <PostContext.Provider value={{ globalPostState, setGlobalPostState }}>
                {children}
            </PostContext.Provider>
        </>
    )
}