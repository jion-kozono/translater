import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

export class Header extends Component {
    render() {
        return (
            <>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Translater
                        </Typography>
                    </Toolbar>
                </AppBar>
            </>
        )
    }
}

export default Header
