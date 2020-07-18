import React, { useEffect, useContext } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { Card, CardContent, CardActions, CardHeader, TextField } from '@material-ui/core'
import { onCreatePost } from '../../graphql/subscriptions'
import FavoriteIcon from "@material-ui/icons/Favorite"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import IconButton from "@material-ui/core/IconButton"
import { Link } from 'react-router-dom'
import PostForm from '../PostForm/PostForm'
import { listPosts } from '../../graphql/queries'
import { PostContext } from '../../Context/PostContext'
import { UserContext } from '../../Context/UserContext'

const Posts = (props) => {
    const { user } = useContext(UserContext)
    const { globalPostState, setGlobalPostState } = useContext(PostContext)
    useEffect(() => {
        fetchPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        const subscription = API.graphql(graphqlOperation(onCreatePost, {userId: user.id})).subscribe({
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
    const LinkStyle = {
        textDecoration: "none",
        color: "black"
    }
    return (
        <>
            <TextField
            variant="outlined"
            label="word検索" >
            </TextField>
            {user.username ? <PostForm /> : <p>英文を投稿するにはログインが必要です。</p>}
            {globalPostState && globalPostState.map((post, index) => (
                <Card key={index} variant="outlined" style={{"border": "ridge", "margin": "10px"}}>
                    <CardHeader style={{"padding": "0"}}>{post.id}</CardHeader>
                    <Link to={`/posts/${post.id}`} style={LinkStyle}>
                        <CardContent>
                            {post.user.username}
                        </CardContent>
                        <CardContent>
                            {post.content}
                        </CardContent>
                        <CardContent style={{"border": "solid 0.2px"}}>
                            description: {post.description}
                        </CardContent>
                    </Link>
                    <CardActions>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon></FavoriteIcon>
                        </IconButton>
                        <IconButton>
                        <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            ))}
        </>
    )
}
export default Posts