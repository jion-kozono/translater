import React from 'react'
import { Card, CardContent, CardActions, CardHeader } from '@material-ui/core'
import FavoriteIcon from "@material-ui/icons/Favorite"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import IconButton from "@material-ui/core/IconButton"
import { Link } from 'react-router-dom'

const MyLikedPosts = () => {
    const index = [1, 2, 3, 4]
    const LinkStyle = {
        textDecoration: "none",
        color: "#fff"
    }
    return (
        <>
            <div>いいねした投稿一覧</div>
            {index.map((i, index) => {
                return (
                    <Link to={"/posts/" + i} style={LinkStyle}>
                        <Card key={index} variant="outlined">
                            <CardHeader>Post {i}. title</CardHeader>
                            <CardContent>Post {i}. content</CardContent>
                            <CardActions>
                                <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                                </IconButton>
                                <IconButton>
                                <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Link>
                )
            })}
        </>
    )
}

export default MyLikedPosts
