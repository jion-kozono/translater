import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { UserProvider } from './Context/UserContext';
import { PostProvider } from './Context/PostContext';
Amplify.configure(awsExports);

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <PostProvider>
          <App />
      </PostProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
