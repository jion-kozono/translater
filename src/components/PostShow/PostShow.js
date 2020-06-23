import React, { Component } from 'react'
import { Card, CardContent, CardActions, CardHeader } from '@material-ui/core';
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";

export default class PostShow extends Component {
    render() {
        return (
            <>
                <div>英文詳細画面</div>
                <Card variant="outlined">
                    <CardHeader>Post 1. title</CardHeader>
                    <CardContent>Post 1. content</CardContent>
                    <CardActions>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </>
        )
    }
}
