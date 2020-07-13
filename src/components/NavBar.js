import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { Button } from '@material-ui/core'
import { Auth } from 'aws-amplify'
import { UserContext } from '../Context/UserContext'
import history from '../history'

const NavBar = () => {
    const {user} =useContext(UserContext)
    const LinkStyle = {
        textDecoration: "none",
        color: "black"
    }
    async function signOut() {
        try {
            await Auth.signOut({ global: true })
            console.log("ログアウトしました。")
            history.push("/logIn")
            document.location.reload()
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }
    const AuthenticateRender = (username) => {
        if (username) {
            return (
                <>
                    {/* <Link to="/login" style={LinkStyle}> */}
                        <Button variant="contained" color="default" onClick={signOut}>
                            LogOut
                        </Button>
                    {/* </Link> */}
                    <Link to="/userShow" style={LinkStyle}>
                        <AccountCircleIcon />
                        <span>Hello, {username}</span>
                    </Link>
                </>
            )
        } else {
            return (
                <>
                    <Link to="/signUp" style={LinkStyle}>
                        <Button variant="contained" color="default">
                            SignUp
                        </Button>
                    </Link>
                    <Link to="/logIn" style={LinkStyle}>
                        <Button variant="contained" color="default">
                            LogIn
                        </Button>
                    </Link>
                </>
            )
        }
    }
    return (
        <>
            <Link to="/" style={LinkStyle}>英文一覧</Link><br />
            {AuthenticateRender(user.username)}
        </>
    )
}

export default NavBar
