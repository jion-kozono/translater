import React　from 'react'
import TranslationPosts from '../TranslationPosts/TranslationPosts'
import PostShow from './PostShow'
import { TPostProvider } from '../../Context/TPostContext'

export const PostDefaultShow =() => {
    return (
        <>
            <TPostProvider>
                <PostShow />
                <p>和訳を投稿する</p>
                <TranslationPosts/>
            </TPostProvider>
        </>
    )
}
