import React, { Component } from 'react'
import { Card, CardContent, CardActions, CardHeader } from '@material-ui/core'
import FavoriteIcon from "@material-ui/icons/Favorite"
import IconButton from "@material-ui/core/IconButton"

export default class PostShow extends Component {
    // constructor(title) {
    //     super()
    //     this.title = title
    // }
    render() {
        return (
            <>
                {/* <div>{this.props.title}</div>
                {
                    console.log(this.props.title)
                } */}
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
