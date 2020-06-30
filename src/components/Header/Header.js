import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import NavBar from '../NavBar'

const Header = () => {
    const LinkStyle = {
        textDecoration: "none",
        color: "#0000ff"
    }
    return (
        <>
            <AppBar position="static" color="default">
                <Toolbar>
                    <h2>Translater</h2>
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
                    <Link to="/" style={LinkStyle}>
                        <Button variant="contained" color="default">
                            LogOut
                        </Button>
                    </Link>
                    <NavBar />
                    <Link to="/userShow" style={LinkStyle}>
                        <Button variant="outlined" color="default">
                            <AccountCircleIcon />
                            Profile
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </>
    )
}


export default Header
