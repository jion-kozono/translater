import React from 'react'
import { FormControl, TextField, Button } from '@material-ui/core'
import MyTranslationPosts from './MyTranslationPosts/MyTranslationPosts'
import MyLikedPosts from './MyLikedPosts/MyLikedPosts'
import MyPosts from './MyPosts/MyPosts'

const UserShow = (props) => {

    return (
        <>
            <div>{props.title}</div>
            <div>アカウント情報</div>
            <FormControl>
                <TextField
                    label="name"
                    variant="outlined"
                    value=""
                />
                <TextField
                    label="self-introduction"
                    variant="outlined"
                    value=""
                />
                <p>Score: 30</p>
                <p>Created date: 2020-06-24</p>
                <Button variant="contained" color="primary">
                    アカウント情報を編集
                </Button>
            </FormControl><hr/>
            <Button variant="contained" color="secondary">
                アカウントを削除する
            </Button><hr />
            <MyPosts /><hr/>
            <MyTranslationPosts /><hr/>
            <MyLikedPosts />
        </>
    )
}

export default UserShow
