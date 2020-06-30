import React from 'react'
import { Card, CardContent, CardActions, CardHeader, TextField, Button } from '@material-ui/core'
import FavoriteIcon from "@material-ui/icons/Favorite"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import IconButton from "@material-ui/core/IconButton"
import { Link } from 'react-router-dom'

const Posts = (props) => {
    const index = [1, 2, 3, 4]
    const LinkStyle = {
        textDecoration: "none",
        color: "#fff"
    }
    return (
        <>
            <div>{props.title}</div>
            <TextField
            variant="outlined"
            label="word検索" >
            </TextField>
            <Link to="/postForm"　style={LinkStyle}>
                <Button variant="contained" color="primary">
                    英文を投稿する
                </Button>
            </Link>
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
export default Posts

