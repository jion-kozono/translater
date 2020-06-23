import React, { Component } from 'react'
import Header from './components/Header/Header'
import PostForm from './components/PostForm/PostForm';
import Posts from './components/Posts/Posts';
import PostShow from './components/PostShow/PostShow';
import TranslationPosts from './components/TranslationPosts/TranslationPosts';
import TranslationPostForm from './components/TranslationPostForm/TranslationPostForm';
import TranslationPostShow from './components/TranslationPostShow/TranslationPostShow';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        {/* <PostForm title="英文投稿画面"/> */}
        {/* <Posts title="英文一覧"/> */}


        {/* <PostShow title="英文詳細画面"/>
        <TranslationPostForm title="和訳を投稿する"/>
        <TranslationPosts title="和訳一覧"/> */}

        <TranslationPostShow />
      </>
    );
  }
}

export default App;
