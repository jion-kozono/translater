import React from 'react'
import { Card, CardContent, CardActions, CardHeader } from '@material-ui/core';
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";

const MyPosts = () => {
    const index = [1, 2, 3, 4];
    return (
        <>
            <div>自分の投稿一覧</div>
            {index.map((i, index) => {
            return (
                <Card key={index} variant="outlined">
                <CardHeader>Post {i}. title</CardHeader>
                <CardContent>Post {i}. content</CardContent>
                <CardActions>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                    <IconButton>
                    </IconButton>
                </CardActions>
                </Card>
            )
            })}
        </>
    )
}

export default MyPosts