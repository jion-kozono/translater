import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import { SignUpForm } from './SignUp/SignUp'
import { LogInForm } from './LogIn/LogIn'
import Posts from './components/Posts/Posts'
import { PostDefaultShow } from './components/PostShow/PostDefaultShow'
import { TranslationPostShow } from './components/TranslationPostShow/TranslationPostShow'
import { UserShow } from './components/UserShow/UserShow'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact key={"signUp"} path='/signUp' component={SignUpForm}/>
          <Route exact key={"logIn"} path='/logIn' component={LogInForm} />
          <Route exact key={"posts"} path='/' component={Posts} />
          <Route exact key={"PostDefaultShow"} path='/posts/:id' component={PostDefaultShow} />
          <Route exact key={"TranslationPostShow"} path='/translationPosts/:id' component={TranslationPostShow} />
          <Route exact key={"UserShow"} path='/userShow' component={UserShow} />
        </Switch>
      </Router>
    </>
  )
}


export default App
