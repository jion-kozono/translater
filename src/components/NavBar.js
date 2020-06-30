import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <Link to="/">英文一覧</Link><br/>
            <Link to="postDefaultShow">英文詳細画面</Link><br/>
            <Link to="translationPostShow">和訳詳細画面</Link><br/>
        </>
    )
}

export default NavBar
