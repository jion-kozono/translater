import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { withAuthenticator } from '@aws-amplify/ui-react'
import Header from './components/Header/Header'
import Posts from './components/Posts/Posts'
import TranslationPostShow from './components/TranslationPostShow/TranslationPostShow'
import SignUp from './SignUp/SignUp'
import LogIn from './LogIn/LogIn'
import PostDefaultShow from './components/PostShow/PostDefaultShow'
import UserShow from './components/UserShow/UserShow'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/signUp' component={SignUp}/>
          <Route exact path='/logIn' component={LogIn} />
          <Route exact path='/' render={() => <Posts title="英文一覧" />} />
          <Route exact path='/posts/:id' render={() => <PostDefaultShow titlide="英文詳細画面" />} />
          <Route exact path='/translationPosts/:id' render={() => <TranslationPostShow title="和訳詳細画面" />} />
          <Route exact path='/userShow' render={() => <UserShow title="ユーザー詳細画面" />} />
        </Switch>
      </Router>
    </>
  )
}


export default withAuthenticator(App)
