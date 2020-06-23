import React, { Component } from 'react'
import Header from './components/Header/Header'
import EnglishPostForm from './components/Form/EnglishPostForm';
import EnglishPosts from './components/EnglishPosts/EnglishPosts';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        {/* <EnglishPostForm /> */}
        <EnglishPosts />
      </>
    );
  }
}

export default App;
