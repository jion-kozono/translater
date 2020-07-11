import React, { createContext, useState } from 'react';

export const PostContext = createContext()
export const PostProvider = ({ children }) => {
    const [globalPostState, setGlobalPostState] = useState([])
    return (
        <>
            <PostContext.Provider value={{ globalPostState, setGlobalPostState }}>
                {children}
            </PostContext.Provider>
        </>
    )
}