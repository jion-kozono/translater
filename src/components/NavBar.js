import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { Button } from '@material-ui/core'
import { Auth } from 'aws-amplify'
import { UserContext } from '../Context/UserContext'

const NavBar = () => {
    const history = useHistory();
    const {user} =useContext(UserContext)
    const LinkStyle = {
        textDecoration: "none",
        color: "red"
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
    const clickLink = (e, linkName) => {
        e.preventDefault()
        switch (linkName) {
            case "signUp":
                history.push("/signUp")
                break
            case "logIn":
                history.push("/logIn")
                break
            case "userShow":
                history.push("/userShow")
                break
            default:
                break
        }
    }
    const AuthenticateRender = (username) => {
        if (username) {
            return (
                <>
                    <Button variant="contained" color="default" onClick={signOut}>
                        LogOut
                    </Button>
                    <Button variant="outlined" color="default" onClick={(e)=>clickLink(e, "userShow")}>
                        <AccountCircleIcon />
                        <span style={{ textTransform: "none" }}>Hello, {username}</span>
                    </Button>
                </>
            )
        } else {
            return (
                <>
                    <Button variant="contained" color="default" onClick={(e)=>clickLink(e, "signUp")}>
                        SignUp
                    </Button>
                    <Button variant="contained" color="default" onClick={(e)=>clickLink(e, "logIn")}>
                        LogIn
                    </Button>
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
