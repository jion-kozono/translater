import React, { Component } from 'react'
import TranslationPostForm from '../TranslationPostForm/TranslationPostForm'
import TranslationPosts from '../TranslationPosts/TranslationPosts'
import PostShow from './PostShow'

export default class PostDefaultShow extends Component {
    constructor(title) {
        super()
        this.title = title
    }
    render() {
        return (
            <>
                <div>{this.props.title}</div>
                <PostShow />
                <TranslationPostForm/>
                <TranslationPosts/>
            </>
        )
    }
}
