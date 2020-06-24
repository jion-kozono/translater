import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import SignUp from '../../SignUp/SignUp'
import LogIn from '../../LogIn/LogIn'

export class Header extends Component {
    render() {
        return (
            <>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography color="inherit">
                            Translater
                        </Typography>
                        <SignUp />
                        <LogIn />
                    </Toolbar>
                </AppBar>
            </>
        )
    }
}

export default Header
