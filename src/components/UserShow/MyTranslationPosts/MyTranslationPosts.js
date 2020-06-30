import React from 'react'
import { Card, CardContent, CardActions, CardHeader } from '@material-ui/core'
import FavoriteIcon from "@material-ui/icons/Favorite"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import IconButton from "@material-ui/core/IconButton"
import { Link } from 'react-router-dom'

const MyTranslationPosts = () => {
    const index = [1, 2, 3, 4]
    const LinkStyle = {
        textDecoration: "none",
        color: "#fff"
    }
    return (
        <>
            <div>訳した投稿一覧</div>
            {index.map((i, index) => {
                return (
                    <Link to={"/translationPosts/" + i} style={LinkStyle}>
                        <Card key={index} variant="outlined">
                            <CardHeader>日本語訳</CardHeader>
                                <CardContent>日本語訳. {i}</CardContent>
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

export default MyTranslationPosts
