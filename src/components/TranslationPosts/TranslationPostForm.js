import React, { useState, useContext } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { FormControl, TextField, Button } from '@material-ui/core'
import { createTranslationPost } from '../../graphql/mutations'
import { UserContext } from '../../Context/UserContext'
import { TPostContext } from '../../Context/TPostContext'

const initialFormState = {
    content: '',
    description: '',
}

const TranslationPostForm = () => {
    const { user } = useContext(UserContext)
    const { globalTPosts, setGlobalTPosts, id } = useContext(TPostContext)
    const [formState, setFormState] = useState(initialFormState)

    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }
    async function addPost() {
        try {
            if (!formState.content) return
            const input = {
                ...formState,
                userId: user.id,
                postId: id
            }
            await API.graphql(graphqlOperation(createTranslationPost, { input }))
            const post = {
                ...input,
                user: {
                    username: user.username
                }
            }
            setGlobalTPosts([post, ...globalTPosts])
            setFormState(initialFormState)
            console.log(globalTPosts)
        } catch (err) {
            console.log('error creating post:', err)
        }
    }
    return (
        <>
            <div>和訳を投稿する</div>
            <FormControl>
                <TextField
                    onChange={event => setInput('content', event.target.value)}
                    variant="outlined"
                    label="和訳投稿フォーム"
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

export default TranslationPostForm