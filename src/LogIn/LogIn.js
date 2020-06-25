import React from 'react'
import { Link } from 'react-router-dom'
import { FormControl, TextField, Button } from '@material-ui/core'

const LogIn = () => {
    const LinkStyle = {
        textDecoration: "none",
        color: "#fff"
    }
    return (
        <>
            <div>
                アカウント未保持の場合、新規登録してください。
            </div>
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
                    ログイン
                </Button>
                <Button variant="contained" color="primary">
                    <Link to="/signUp" style={LinkStyle}>新規登録画面へ</Link>
                </Button>
            </FormControl>
        </>
    )
}

export default LogIn
