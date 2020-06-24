import React, { useState } from 'react'
import { FormControl, TextField, Button, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions } from '@material-ui/core'
import LogIn from '../LogIn/LogIn';

const SignUp = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => setOpen(true)
    const handleClose = () => {
        setOpen(false)
        return (
            <LogIn isOpen={true}/>
        )
    }

    return (
        <>
        <button type="button" onClick={handleClickOpen}>
            SignUp
        </button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">SignUp</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    アカウント取得済みの場合、ログインしてください。
                </DialogContentText>
                <FormControl>
                    <TextField
                        variant="outlined"
                        placeholder="nameフィールド"
                    />
                    <TextField
                        variant="outlined"
                        placeholder="emailフィールド"
                    />
                    <TextField
                        variant="outlined"
                        placeholder="passwordフィールド"
                    />
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="contained" color="primary">
                    新規登録
                </Button>
                <Button onClick={handleClose} variant="contained" color="primary">
                    ログイン画面へ
                </Button>
            </DialogActions>
        </Dialog>
        </>
    )
}

export default SignUp
