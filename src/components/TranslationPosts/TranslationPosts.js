import React, { useContext } from 'react'
import { Card, CardContent, CardActions, CardHeader} from '@material-ui/core'
import FavoriteIcon from "@material-ui/icons/Favorite"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import IconButton from "@material-ui/core/IconButton"
import { UserContext } from '../../Context/UserContext'
import TranslationPostForm from './TranslationPostForm'
import { TPostContext } from '../../Context/TPostContext'


const TranslationPosts = () => {
    const { user } = useContext(UserContext)
    const { globalTPosts } = useContext(TPostContext)
    return (
        <>
            {user.username ? <TranslationPostForm /> : <p>和訳を投稿するにはログインが必要です。</p>}
            {globalTPosts && globalTPosts.map((tPost, index) => (
                <Card key={index} variant="outlined" style={{"border": "ridge", "margin": "10px"}}>
                    <CardHeader style={{"padding": "0"}}>{tPost.id}</CardHeader>
                        <CardContent>
                            {tPost.user.username}
                        </CardContent>
                        <CardContent>
                            {tPost.content}
                        </CardContent>
                        {tPost.description && (
                        <CardContent>
                            description: {tPost.description}
                        </CardContent>
                        )}
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
export default TranslationPosts
