import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FormControl, Button, InputLabel, Input, FormHelperText } from '@material-ui/core'
import { Auth } from 'aws-amplify';

export const LogInForm = () => {
    const history = useHistory()
    const [userEmail, setUserEmail] = useState("")
    const [password, setPassword] = useState("")
    async function SignIn() {
        try {
            await Auth.signIn(userEmail, password)
            history.push("/")
            document.location.reload()
        } catch (error) {
            console.log('error signing in', error);
        }
    }
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
                <InputLabel htmlFor="my-input1">Email</InputLabel>
                <Input
                    id="my-input1"
                    variant="outlined"
                    name = "name"
                    onChange = {event=>setUserEmail(event.target.value)}
                />
                <FormHelperText id="my-helper-text">メールアドレスを入力してください</FormHelperText>
            </FormControl><br/>
            <FormControl>
                <InputLabel htmlFor="my-input2">Password</InputLabel>
                <Input
                    id="my-input2"
                    variant="outlined"
                    type = "password"
                    name = "password"
                    onChange = {event=>setPassword(event.target.value)}
                />
                <FormHelperText id="my-helper-text">パスワードを入力してください</FormHelperText>
            </FormControl><br />
            <Button variant="contained" color="primary" onClick={SignIn} >
                ログイン
            </Button>
            <Link to="/signUp" style={LinkStyle}>
                <Button variant="contained" color="primary">
                        新規登録画面へ
                </Button>
            </Link>
        </>
    )
}