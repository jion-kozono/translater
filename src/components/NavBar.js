import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <Link to="postForm">英文を投稿する</Link><br/>
            <Link to="/">英文一覧</Link><br/>
            <Link to="postDefaultShow">英文詳細画面</Link><br/>
            <Link to="translationPostShow">和訳詳細画面</Link><br/>
            <Link to="userShow">ユーザー詳細画面</Link><hr />　{/* ここはユーザーidがクエリパラメータになり、現時点では仮にuserShowとする */}
        </>
    )
}

export default NavBar
