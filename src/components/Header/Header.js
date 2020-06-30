import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@material-ui/core'
import NavBar from '../NavBar';

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
                    <Button variant="contained" color="default">
                        <Link to="/signUp" style={LinkStyle}>SignUp</Link>
                    </Button>
                    <Button variant="contained" color="default">
                        <Link to="/logIn" style={LinkStyle}>LogIn</Link>
                    </Button>
                    <Button variant="contained" color="default">
                        <Link to="/" style={LinkStyle}>LogOut</Link>
                    </Button>
                    <NavBar />
                </Toolbar>
            </AppBar>
        </>
    )
}


export default Header
