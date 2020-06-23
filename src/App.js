import React, { Component } from 'react'
import Header from './components/Header/Header'
import PostForm from './components/PostForm/PostForm';
import Posts from './components/Posts/Posts';
import PostShow from './components/PostShow/PostShow';
import TranslationPosts from './components/TranslationPosts/TranslationPosts';
// import { FormControl, TextField, Button } from '@material-ui/core'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        {/* <PostForm /> */}
        {/* <Posts /> */}
        <PostShow />
        <TranslationPosts />
      </>
    );
  }
}

export default App;
