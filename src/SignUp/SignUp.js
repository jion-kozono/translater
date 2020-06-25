import React from 'react'
import { Link } from 'react-router-dom'
import { FormControl, TextField, Button } from '@material-ui/core'

const SignUp = () => {
    const LinkStyle = {
        textDecoration: "none",
        color: "#fff"
    }

    return (
        <>
            <div>アカウント取得済みの場合、ログインしてください</div>
            <FormControl>
                <TextField
                    variant="outlined"
                    label="nameフィールド"
                />
                <TextField
                    variant="outlined"
                    label="emailフィールド"
                />
                <TextField
                    variant="outlined"
                    label="passwordフィールド"
                />
                <Button variant="contained" color="primary">
                    新規登録
                </Button>
                <Button variant="contained" color="primary">
                    <Link to="/logIn"　style={LinkStyle}>ログイン画面へ</Link>
                </Button>
            </FormControl>
        </>
    )
}

export default SignUp