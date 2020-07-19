import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardActions, CardHeader } from '@material-ui/core'
import FavoriteIcon from "@material-ui/icons/Favorite"
import IconButton from "@material-ui/core/IconButton"
import { useParams } from 'react-router-dom'
import { API, graphqlOperation } from 'aws-amplify'
import { getPost } from '../../graphql/queries'
import ScrollToTopOnMount from '../ScrollToTopOnMount'

const PostShow = () => {
    const { id } = useParams()
    const [post, setPost] = useState([])

    useEffect(() => {
        getPostShow()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const getPostShow = async () => {
        try {
            const PostData = await API.graphql(graphqlOperation(getPost, { id }))
            const Post = PostData.data.getPost
            setPost(Post)
            console.log(Post.user.username)
        } catch (err) {
            console.log("error getPostShow", err)
        }
    }
    return (
        <>
            <ScrollToTopOnMount /> {/* ページトップへ移動 */}
            {post.user ?
                <Card variant="outlined">
                    <CardHeader style={{ "padding": "0" }}>hoge</CardHeader>
                    <CardContent>{post.user.username}</CardContent>
                    <CardContent>{post.content}</CardContent>
                    <CardContent style={{ "border": "solid 0.2px" }}>
                        description: {post.description}
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    </CardActions>
                </Card> : ""}
        </>
    )
}
export default PostShow
