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
                <Link to="/signUp" style={LinkStyle}>
                    <Button variant="contained" color="primary">
                            新規登録画面へ
                    </Button>
                </Link>
            </FormControl>
        </>
    )
}

export default LogIn
