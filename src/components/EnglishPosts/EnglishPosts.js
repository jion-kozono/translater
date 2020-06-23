import React, { Component } from 'react'
import { Card, CardContent, CardActions, CardHeader, TextField } from '@material-ui/core';
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";


const index = [1, 2, 3, 4];

export default class EnglishPosts extends Component {
    render() {
        return (
            <>
                <div>英文一覧</div>
                <TextField
                variant="outlined"
                placeholder="word検索">
                </TextField>
                {index.map((i) => {
                return (
                    <Card variant="outlined">
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
                        <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    </Card>
                )
                })}
            </>
        )
    }
}
