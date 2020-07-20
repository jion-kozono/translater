import React, { createContext, useState, useContext } from 'react';
import { useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { onCreateTranslationPost } from '../graphql/subscriptions';
import { UserContext } from './UserContext';
import { searchTranslationPosts } from '../graphql/queries';
import { useParams } from 'react-router-dom'


export const TPostContext = createContext()
export const TPostProvider = ({ children }) => {
    const { user } = useContext(UserContext)
    const { id } = useParams()
    const [globalTPosts, setGlobalTPosts] = useState([])
    useEffect(() => {
        fetchTPosts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        const subscription = API.graphql(graphqlOperation(onCreateTranslationPost, {
            userId: user.id
        })).subscribe({
            next: (eventData) => {
                const newPost = eventData.value.data.onCreatePost
                const Posts = [...globalTPosts.filter(r => {
                    return (r.id !== newPost.id)
                }), newPost]
                setGlobalTPosts([newPost, ...Posts])
            }
        })
        return () => subscription.unsubscribe()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [globalTPosts])
    async function fetchTPosts() {
        const queryArgument = Object.assign({}, {
            filter: {
                postId: {
                    eq: id//パラムの値
                }
            },
            sort: { // Defaultはパーティションキー順になってしまうので対策
                field: 'createdAt',
                direction: 'desc'
            },
        })
        try {
            const PostData = await API.graphql(graphqlOperation(searchTranslationPosts, queryArgument))
            const Posts = PostData.data.searchTranslationPosts.items
            let n = 0;
            while (n < Posts.length) {
                let cre = Posts[n].createdAt
                let dt = new Date(cre)
                const changedCreated = dt.toLocaleString()
                Posts[n].createdAt = changedCreated
                n++;
            }
            setGlobalTPosts(Posts)
            console.log("fetchTPosts")
        } catch (err) {
            console.log('error fetching translation posts', err)
        }
    }
    return (
        <>
            <TPostContext.Provider value={{ globalTPosts, setGlobalTPosts, id }}>
                {children}
            </TPostContext.Provider>
        </>
    )
}