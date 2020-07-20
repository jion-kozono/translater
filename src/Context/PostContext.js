import React, { createContext, useState, useContext } from 'react';
import { useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { onCreatePost } from '../graphql/subscriptions';
import { UserContext } from './UserContext';
import { searchPosts } from '../graphql/queries';

export const PostContext = createContext()
export const PostProvider = ({ children }) => {
    const { user } = useContext(UserContext)
    const [globalPosts, setGlobalPosts] = useState([])
    async function fetchPosts() {
        const queryArgument = Object.assign({}, {
            sort: { // Defaultはパーティションキー順になってしまうので対策
                field: 'createdAt',
                direction: 'desc'
            },
        })
        try {
            const PostData = await API.graphql(graphqlOperation(searchPosts, queryArgument))
            const Posts = PostData.data.searchPosts.items
            let n = 0;
            while (n < Posts.length) {
                let cre = Posts[n].createdAt
                let dt = new Date(cre)
                const changedCreated = dt.toLocaleString()
                Posts[n].createdAt = changedCreated
                n++;
            }
            setGlobalPosts(Posts)
            console.log("fetchPosts")
        } catch (err) {
            console.log('error fetching posts', err)
        }
    }
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
                const Posts = [...globalPosts.filter(r => {
                    return (r.id !== newPost.id)
                }), newPost]
                setGlobalPosts([newPost, ...Posts])
            }
        })
        return () => subscription.unsubscribe()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [globalPosts])
    return (
        <>
            <PostContext.Provider value={{ globalPosts, setGlobalPosts }}>
                {children}
            </PostContext.Provider>
        </>
    )
}