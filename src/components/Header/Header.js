import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import NavBar from '../NavBar'

const Header = () => {
    return (
        <>
            <AppBar position="static" color="default" hei>
                <Toolbar variant="dense">
                    <h2>Translater</h2>
                    <NavBar />
                </Toolbar>
            </AppBar>
        </>
    )
}


export default Header
