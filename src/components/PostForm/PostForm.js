import React, { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { FormControl, TextField, Button } from '@material-ui/core'
import { createPost } from '../../graphql/mutations'
import { listPosts } from '../../graphql/queries'
import { onCreatePost } from '../../graphql/subscriptions'


const initialState = {
    content: '',
    description: '',
    userId: '',
    likeCount: 0
}
const PostForm = () => {
    const [formState, setFormState] = useState(initialState)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchPosts()
        const subscription = API.graphql(graphqlOperation(onCreatePost)).subscribe({
            next: (eventData) => {
                const newPost = eventData.value.data.onCreatePost;
                const Posts = [...posts.filter(r => {
                    return (r.content !== newPost.content)
                    }), newPost]
                setPosts(...posts, Posts)
                }
        });
        return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [posts, formState])

    function setInput(key, value) {
        setFormState({
            ...formState,
            [key]: value
        })
    }

    async function fetchPosts() {
        try {
            const PostData = await API.graphql(graphqlOperation(listPosts))
            const Posts = PostData.data.listPosts.items
            setPosts(Posts)
        } catch (err) {
            console.log('error fetching posts')
        }
    }
    async function addPost() {
        try {
            if (!formState.content || !formState.description) return
            const post = { ...formState }
            setPosts([...posts, post])
            // console.log({ posts });
            setFormState(initialState)
            console.log({formState})
            await API.graphql(graphqlOperation(createPost, {input: post}))
        } catch (err) {
            console.log('error creating post:', err)
        }
    }
    return (
        <>
            <FormControl>
                <TextField
                    onChange={event => setInput('content', event.target.value)}
                    variant="outlined"
                    label="英文投稿フォーム"
                    multiline
                    rows={4}
                    rowsMax={6}
                />
                <TextField
                    onChange={event => setInput('description', event.target.value)}
                    variant="outlined"
                    label="備考フォーム"
                    multiline
                    rows={2}
                    rowsMax={4}
                />
                <Button onClick={addPost} variant="contained" color="primary">
                    Post
                </Button>
            </FormControl><hr/>
            {
            posts.map((post, index) => (
                <div key={post.id ? post.id : index}>
                    <p>content: {post.content}</p>
                    <p>description: {post.description}</p>
                    <hr/>
                </div>
                ))
            }
        </>
    )
}

export default PostForm