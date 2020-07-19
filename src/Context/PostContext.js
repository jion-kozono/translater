import React, { createContext, useState, useContext } from 'react';
import { useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { onCreatePost } from '../graphql/subscriptions';
import { UserContext } from './UserContext';
import { listPosts } from '../graphql/queries';

export const PostContext = createContext()
export const PostProvider = ({ children }) => {
    const { user } = useContext(UserContext)
    const [globalPostState, setGlobalPostState] = useState([])
    useEffect(() => {
        fetchPosts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        const subscription = API.graphql(graphqlOperation(onCreatePost, {
            userId: user.id
        })).subscribe({
            next: (eventData) => {
                const newPost = eventData.value.data.onCreatePost
                const Posts = [...globalPostState.filter(r => {
                    return (r.content !== newPost.content)
                }), newPost]
                setGlobalPostState([newPost, ...Posts])
            }
        })
        return () => subscription.unsubscribe()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [globalPostState])
    async function fetchPosts() {
        console.log("fetchPosts")
        try {
            const PostData = await API.graphql(graphqlOperation(listPosts))
            const Posts = PostData.data.listPosts.items
            setGlobalPostState(Posts)
        } catch (err) {
            console.log('error fetching posts', err)
        }
    }
    return (
        <>
            <PostContext.Provider value={{ globalPostState, setGlobalPostState }}>
                {children}
            </PostContext.Provider>
        </>
    )
}