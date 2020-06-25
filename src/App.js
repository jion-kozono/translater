import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header'
import PostForm from './components/PostForm/PostForm';
import Posts from './components/Posts/Posts';
import TranslationPostShow from './components/TranslationPostShow/TranslationPostShow';
import SignUp from './SignUp/SignUp';
import LogIn from './LogIn/LogIn';
import PostDefaultShow from './components/PostShow/PostDefaultShow';
import UserShow from './components/UserShow/UserShow';
class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Link to="postForm">英文を投稿する</Link><br/>
          <Link to="/">英文一覧</Link><br/>
          <Link to="postDefaultShow">英文詳細画面</Link><br/>
          <Link to="translationPostShow">和訳詳細画面</Link><br/>
          <Link to="userShow">ユーザー詳細画面</Link><hr />　{/* ここはユーザーidがクエリパラメータになり、現時点では仮にuserShowとする */}
          <Switch>
            <Route exact path='/signUp' component={SignUp}/>
            <Route exact path='/logIn' component={LogIn} />
            <Route exact path='/postForm' render={() => <PostForm title="英文投稿画面" />} />
            <Route exact path='/' render={() => <Posts title="英文一覧" />} />
            <Route exact path='/postDefaultShow' render={() => <PostDefaultShow title="英文詳細画面" />} />
            <Route exact path='/translationPostShow' render={() => <TranslationPostShow title="和訳詳細画面" />} />
            <Route exact path='/userShow' render={() => <UserShow title="ユーザー詳細画面" />} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
