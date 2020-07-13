import React　from 'react'
import TranslationPostForm from '../TranslationPostForm/TranslationPostForm'
import TranslationPosts from '../TranslationPosts/TranslationPosts'
import PostShow from './PostShow'

export const PostDefaultShow =() => {
    return (
        <>
            <div>英文詳細画面</div>
            <PostShow />
            <TranslationPostForm/>
            <TranslationPosts/>
        </>
    )
}
