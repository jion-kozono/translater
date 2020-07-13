import React from 'react'
import { Redirect } from 'react-router-dom'

export const Auth = (props) => {
    return (
        (props.user != null ? props.children : <Redirect to={'/Login'}/>)
    )
}