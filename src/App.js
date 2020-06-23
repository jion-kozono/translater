import React, { Component } from 'react'
import Header from './components/Header/Header'
import EnglishPostForm from './components/Form/EnglishPostForm';
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <EnglishPostForm />
      </>
    )
  }
}

export default App;
