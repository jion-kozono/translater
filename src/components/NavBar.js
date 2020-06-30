import React from 'react'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { Button } from '@material-ui/core'

const NavBar = () => {
    const LinkStyle = {
        textDecoration: "none",
        color: "#0000ff"
    }
    return (
        <>
            <Link to="/" style={LinkStyle}>英文一覧</Link><br />
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
            <Link to="/userShow" style={LinkStyle}>
                <Button variant="outlined" color="default">
                    <AccountCircleIcon />
                    Profile
                </Button>
            </Link>
        </>
    )
}

export default NavBar
