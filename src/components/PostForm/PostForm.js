import React, { useState, useContext } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { FormControl, TextField, Button } from '@material-ui/core'
import { createPost } from '../../graphql/mutations'
import { UserContext } from '../../Context/UserContext'
import { PostContext } from '../../Context/PostContext'

const initialFormState = {
    content: '',
    description: '',
}

const PostForm = () => {
    const { user } = useContext(UserContext)
    const [formState, setFormState] = useState(initialFormState)
    const {globalPostState, setGlobalPostState } = useContext(PostContext)

    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }
    async function addPost() {
        try {
            if (!formState.content || !formState.description) return
            const input = {
                ...formState,
                userId: user.id,
            }
            await API.graphql(graphqlOperation(createPost, { input }))
            const post = {
                ...input,
                user: {
                    username: user.username
                }
            }
            setGlobalPostState([post, ...globalPostState])
            setFormState(initialFormState)
        } catch (err) {
            console.log('error creating post:', err)
        }
    }
    return (
        <>
            <div>英文を投稿する</div>
            <FormControl>
                <TextField
                    onChange={event => setInput('content', event.target.value)}
                    variant="outlined"
                    label="英文投稿フォーム"
                    multiline
                    rows={4}
                    rowsMax={6}
                    value={formState.content}
                />
                <TextField
                    onChange={event => setInput('description', event.target.value)}
                    variant="outlined"
                    label="備考フォーム"
                    multiline
                    rows={2}
                    rowsMax={4}
                    value={formState.description}
                />
                <Button onClick={addPost} variant="contained" color="primary">
                    Post
                </Button>
            </FormControl>
        </>
    )
}

export default PostForm