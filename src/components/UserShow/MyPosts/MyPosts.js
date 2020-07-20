import React, { useContext, useEffect } from 'react'
import { Card, CardContent, CardActions, CardHeader } from '@material-ui/core'
import FavoriteIcon from "@material-ui/icons/Favorite"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import IconButton from "@material-ui/core/IconButton"
import { Link } from 'react-router-dom'
import { API, graphqlOperation } from 'aws-amplify'
import { searchPosts } from '../../../graphql/queries'
import { useState } from 'react'
import { UserContext } from '../../../Context/UserContext'

const MyPosts = () => {
    const { user } = useContext(UserContext)
    const [myPosts, setMyPosts] = useState([])
    useEffect(() => {
        getMyPosts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const getMyPosts = async () => {
        const queryArgument = Object.assign({}, {
            filter: {
                userId: {
                    eq: user.id
                }
            },
            sort: { // Defaultはパーティションキー順になってしまうので対策
                field: 'createdAt',
                direction: 'desc'
            },
        })
        try {
            console.log("getMyPosts")
            // console.log(user.id)
            const MyPostData = await API.graphql(graphqlOperation(searchPosts, queryArgument))
            const MyPosts = MyPostData.data.searchPosts.items
            let n = 0;
            while (n < MyPosts.length) {
                let cre = MyPosts[n].createdAt
                let dt = new Date(cre)
                const changedCreated = dt.toLocaleString()
                MyPosts[n].createdAt = changedCreated
                n++;
            }
            setMyPosts(MyPosts)
        } catch (err) {
            console.log('error fetching my posts', err)
        }
    }
    const LinkStyle = {
        textDecoration: "none",
        color: "black"
    }
    return (
        <>
            {myPosts && myPosts.map((post, index) => (
                <Card key={index} variant="outlined" style={{"border": "ridge", "margin": "10px"}}>
                    <CardHeader style={{"padding": "0"}}>{post.id}</CardHeader>
                    <Link to={`/posts/${post.id}`} style={LinkStyle}>
                        <CardContent>
                            {post.user.username}
                        </CardContent>
                        <CardContent>
                            {post.content}
                        </CardContent>
                        <CardContent>
                            description: {post.description}
                        </CardContent>
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

export default MyPosts