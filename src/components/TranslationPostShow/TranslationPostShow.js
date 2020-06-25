import React, { Component } from 'react'
import { Card, CardContent, CardActions, CardHeader } from '@material-ui/core';
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import PostShow from '../PostShow/PostShow';

export default class TranslationPostShow extends Component {
    render() {
        return (
            <>
                <div>{this.props.title}</div>
                <Card variant="outlined">
                    <CardHeader>日本語訳</CardHeader>
                    <CardContent>日本語訳. 1</CardContent>
                    <CardActions>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                    </CardActions>
                    <CardContent>
                        元の英文
                        <PostShow/>
                    </CardContent>
                </Card>
            </>
        )
    }
}
