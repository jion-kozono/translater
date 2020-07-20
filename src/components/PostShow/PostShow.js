import React, { useEffect, useState, useContext } from 'react'
import { Card, CardContent, CardActions, CardHeader } from '@material-ui/core'
import FavoriteIcon from "@material-ui/icons/Favorite"
import IconButton from "@material-ui/core/IconButton"
import { API, graphqlOperation } from 'aws-amplify'
import { getPost } from '../../graphql/queries'
import ScrollToTopOnMount from '../ScrollToTopOnMount'
import { TPostContext } from '../../Context/TPostContext'

const PostShow = () => {
    const [post, setPost] = useState([])
    const { id } = useContext(TPostContext)

    useEffect(() => {
        getPostShow()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const getPostShow = async () => {
        try {
            const PostData = await API.graphql(graphqlOperation(getPost, { id }))
            const Post = PostData.data.getPost
            setPost(Post)
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
                    <CardContent>
                        description: {post.description}
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <div>createdAt: {post.createdAt}</div>
                    </CardActions>
                </Card> : ""}
        </>
    )
}
export default PostShow
