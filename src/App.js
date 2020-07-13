import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import history from './history'
import Header from './components/Header/Header'
import { SignUpForm } from './SignUp/SignUp'
import { LogInForm } from './LogIn/LogIn'
import {Posts} from './components/Posts/Posts'
import {PostDefaultShow} from './components/PostShow/PostDefaultShow'
import { TranslationPostShow } from './components/TranslationPostShow/TranslationPostShow'
import {UserShow} from './components/UserShow/UserShow'
// import { Auth } from './Auth/Auth'
// import { UserContext } from './Context/UserContext'

const App = () => {
  // const { user } = useContext(UserContext)
  return (
    <>
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path='/signUp' component={SignUpForm}/>
          <Route exact path='/logIn' component={LogInForm} />
          {/* 認証ずみ */}
          {/* <Auth user={user}>
            <Switch> */}
          <Route exact path='/' component={Posts} />
          <Route exact path='/posts/:id' component={PostDefaultShow} />
          <Route exact path='/translationPosts/:id' component={TranslationPostShow} />
          <Route exact path='/userShow' component={UserShow} />
            {/* </Switch>
          </Auth> */}
        </Switch>
      </Router>
    </>
  )
}


export default App
