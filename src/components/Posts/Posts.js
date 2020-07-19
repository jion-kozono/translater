import React, { useContext } from 'react'
import { Card, CardContent, CardActions, CardHeader, TextField } from '@material-ui/core'
import FavoriteIcon from "@material-ui/icons/Favorite"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import IconButton from "@material-ui/core/IconButton"
import { Link } from 'react-router-dom'
import PostForm from '../PostForm/PostForm'
import { PostContext } from '../../Context/PostContext'
import { UserContext } from '../../Context/UserContext'

const Posts = () => {
    const { user } = useContext(UserContext)
    const { globalPostState } = useContext(PostContext)
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