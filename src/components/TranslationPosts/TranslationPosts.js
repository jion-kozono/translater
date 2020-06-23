import React, { Component } from 'react'
import { Card, CardContent, CardActions, CardHeader} from '@material-ui/core';
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";

const index = [1, 2, 3, 4];

class TranslationPosts extends Component {
    render() {
        return (
            <>
                <div>和訳一覧</div>
                {index.map((i, index) => {
                return (
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
                )
                })}
            </>
        )
    }
}
export default TranslationPosts
