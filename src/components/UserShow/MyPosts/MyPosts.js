import React, { useContext, useEffect } from 'react'
import { Card, CardContent, CardActions, CardHeader, TextField } from '@material-ui/core'
import FavoriteIcon from "@material-ui/icons/Favorite"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import IconButton from "@material-ui/core/IconButton"
import { Link } from 'react-router-dom'
import { API, graphqlOperation } from 'aws-amplify'
import { searchPosts } from '../../../graphql/queries'
import { useState } from 'react'
import { UserContext } from '../../../Context/UserContext'

const MyPosts = () => {
    const { user } = useContext(UserContext)
    const [myPost, setMyPost] = useState([])
    // const [myPosts, setMyPosts] = useState([])
    useEffect(() => {
        getMyPosts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const getMyPosts = async () => {
        // const userId = user.id
        // console.log(user.userId)
        // // const postUserId = post.user.id
        // globalPostState.forEach(post => {
        //     if (userId === post.userId) {

        //         // console.log(post)
        //         // setMyPosts({ ...post, post })
        //         // console.log(myPosts)
        //     }
        // })
        console.log("getMyPosts")
        try {
            console.log(user.id)
            const queryArgument = Object.assign({}, {
                fileter: {
                    userId: {
                        eq: user.id
                    }
                },
                sort: { // Defaultはパーティションキー順になってしまうので対策
                    field: 'id',
                    direction: 'desc'
                },
            })
            const MyPostData = await API.graphql(graphqlOperation(searchPosts, queryArgument))
            const MyPosts = MyPostData.data.searchPosts.items
            setMyPost(MyPosts)
            console.log(MyPosts)
        } catch (err) {
            console.log('error fetching my posts', err)
        }
    }
    const LinkStyle = {
        textDecoration: "none",
        color: "#fff"
    }
    return (
        <>
            <TextField
            variant="outlined"
            label="word検索" >
            </TextField>
            {myPost && myPost.map((post, index) => (
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

export default MyPosts