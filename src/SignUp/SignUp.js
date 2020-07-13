import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FormControl, Button, Input, InputLabel, FormHelperText } from '@material-ui/core'
import { Auth } from 'aws-amplify'
import history from '../history'

export const SignUpForm = () => {
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [code, setCode] = useState("")
    const [ isSignUp, setIsSignUp ] = useState(false)
    async function signUp() {
        try {
            await Auth.signUp({
                username,
                password,
                attributes: {
                    email
                }
            })
            setIsSignUp(true)
        } catch (error) {
            console.log('error signing up:', error);
        }
    }
    async function confirmSignUp() {
        try {
            await Auth.confirmSignUp(username, code);
            await Auth.signIn(username, password)
            history.push("/")
            document.location.reload()
        } catch (error) {
            console.log('error confirming sign up', error);
        }
    }
    const LinkStyle = {
        textDecoration: "none",
        color: "#fff"
    }

    const SignRender = (isSignUp) => {
        if (!isSignUp) {
            return (
                <>
                    <div>アカウント取得済みの場合、ログインしてください</div>
                    <FormControl>
                        <InputLabel htmlFor="my-input1">User Name</InputLabel>
                        <Input
                            id="my-input1"
                            variant="outlined"
                            name = "name"
                            onChange = {event=>setUserName(event.target.value)}
                        />
                        <FormHelperText id="my-helper-text1">ユーザー名を入力してください</FormHelperText>
                    </FormControl><br/>
                    <FormControl>
                        <InputLabel htmlFor="my-input2">Emailアドレス</InputLabel>
                        <Input
                            id="my-input2"
                            variant="outlined"
                            name = "email"
                            onChange = {event=>setEmail(event.target.value)}
                        />
                        <FormHelperText id="my-helper-text2">メールアドレスは公開されません。</FormHelperText>
                    </FormControl><br/>
                    <FormControl>
                        <InputLabel htmlFor="my-input3">Password</InputLabel>
                        <Input
                            id="my-input3"
                            variant="outlined"
                            type = "password"
                            name = "password"
                            onChange = {event=>setPassword( event.target.value)}
                        />
                        <FormHelperText id="my-helper-text3">複雑なパスワードを設定してください。</FormHelperText>
                    </FormControl><br/>
                    <Button variant="contained" color="primary" onClick={signUp}>
                        認証コードを設定したメールに送信
                    </Button>
                </>
            )
        } else {
            return (
                <>
                    <p>認証コードを入力してください</p>
                    <p>{username}</p>
                    <FormControl>
                        <InputLabel htmlFor="my-input4">認証コード</InputLabel>
                        <Input
                            id="my-input4"
                            variant="outlined"
                            name = "code"
                            onChange = {event=>setCode(event.target.value)}
                        />
                        <FormHelperText id="my-helper-text4">メールに送られてきた認証コードを入力してください。</FormHelperText>
                    </FormControl><br />
                    <Button variant="contained" color="primary" onClick={confirmSignUp}>
                        新規登録
                    </Button>
                    <Link to="/logIn"　style={LinkStyle}>
                        <Button variant="contained" color="primary">
                            ログイン画面へ
                        </Button>
                    </Link>
                </>
            )
        }
    }
    return (
        <>
            {SignRender(isSignUp)}
        </>
    )
}
