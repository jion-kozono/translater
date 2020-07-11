import React, { useEffect, useContext } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { Card, CardContent, CardActions, CardHeader, TextField, Button } from '@material-ui/core'
import { onCreatePost } from '../../graphql/subscriptions'
import FavoriteIcon from "@material-ui/icons/Favorite"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import IconButton from "@material-ui/core/IconButton"
import { Link } from 'react-router-dom'
import PostForm from '../PostForm/PostForm'
import { listPosts } from '../../graphql/queries'
import { PostContext } from '../../Context/PostContext'

const Posts = (props) => {
    const {globalPostState, setGlobalPostState } = useContext(PostContext)
    useEffect(() => {
        fetchPosts([])
        const subscription = API.graphql(graphqlOperation(onCreatePost)).subscribe({
            next: (eventData) => {
                const newPost = eventData.value.data.onCreatePost
                const Posts = [...globalPostState.filter(r => {
                    return (r.content !== newPost.content)
                }), newPost]
                setGlobalPostState({type: 'SET_POSTS', payload: {posts: [...globalPostState, Posts]}})
            }
        })
        return () => subscription.unsubscribe()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [globalPostState])
    async function fetchPosts() {
        try {
            const PostData = await API.graphql(graphqlOperation(listPosts))
            const Posts = PostData.data.listPosts.items
            setGlobalPostState({ type: 'SET_POSTS', payload: { posts: [Posts] } })
        } catch (err) {
            console.log('error fetching posts')
        }
    }
    // const index = [1, 2, 3, 4]
    const LinkStyle = {
        textDecoration: "none",
        color: "#fff"
    }
    return (
        <>
            <div>{props.title}</div>
            <TextField
            variant="outlined"
            label="word検索" >
            </TextField>
            <Link to="/postForm"　style={LinkStyle}>
                <Button variant="contained" color="primary">
                    英文を投稿する
                </Button>
            </Link>
            <PostForm />
            {
                globalPostState.posts && globalPostState.posts.map((post, index) => (
                <div key={index}>
                    <p>content: {post.content}</p>
                    <p>description: {post.description}</p>
                    <hr/>
                </div>
                ))
            }
            {/* {index.map((i, index) => {
                return (
                        <Card key={index} variant="outlined">
                            <CardHeader>Post {i}. title</CardHeader>
                            <CardContent>
                                <Link to={"/posts/" + i} style={LinkStyle}>
                                    Post {i}. content
                                </Link>
                            </CardContent>
                            <CardActions>
                                <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                                </IconButton>
                                <IconButton>
                                <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                )
            })} */}
        </>
    )
}
export default Posts

