import React, { useContext } from 'react'
import { Card, CardContent, CardActions, CardHeader, TextField, Box, Input, FormControl, InputLabel, OutlinedInput, InputAdornment } from '@material-ui/core'
import FavoriteIcon from "@material-ui/icons/Favorite"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import SearchIcon from '@material-ui/icons/Search'
import IconButton from "@material-ui/core/IconButton"
import { Link } from 'react-router-dom'
import PostForm from './PostForm'
import { PostContext } from '../../Context/PostContext'
import { UserContext } from '../../Context/UserContext'

const Posts = (props) => {
    const { user } = useContext(UserContext)
    const { globalPosts } = useContext(PostContext)
    const LinkStyle = {
        textDecoration: "none",
        color: "black"
    }
    return (
        <>
            <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    // value={values.amount}
                    // onChange={handleChange('amount')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            // onClick={handleClickShowPassword}
                            // onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            <SearchIcon fontSize="large"/>
                            {/* {values.showPassword ? <Visibility /> : <VisibilityOff />} */}
                            </IconButton>
                        </InputAdornment>
                        }
                    labelWidth={60}
                />
            </FormControl>
            {user.username ? <PostForm /> : <p>英文を投稿するにはログインが必要です。</p>}
            {globalPosts && globalPosts.map((post, index) => (
                <Card key={index} variant="outlined" style={{"border": "ridge", "margin": "10px"}}>
                    <CardHeader style={{"padding": "0"}}>{post.id}</CardHeader>
                    <Link to={`/posts/${post.id}`} style={LinkStyle}>
                        <CardContent>
                            {post.user.username}
                        </CardContent>
                        <CardContent>
                            {post.content}
                        </CardContent>
                        {post.description && (
                        <CardContent>
                            description: {post.description}
                        </CardContent>
                        )}
                    </Link>
                    <CardActions>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon></FavoriteIcon>
                        </IconButton>
                        <IconButton>
                        <ExpandMoreIcon />
                        </IconButton>
                        <div>createdAt: {post.createdAt}</div>
                    </CardActions>
                </Card>
            ))}
        </>
    )
}
export default Posts