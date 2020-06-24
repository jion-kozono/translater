import React, { useState } from 'react'
import { FormControl, TextField, Button, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions } from '@material-ui/core'

const LogIn = () => {
    const [open, setOpen] = useState(false);

    const handleClickLogInOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <>
        <button type="button" onClick={handleClickLogInOpen}>
            LogIn
        </button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">LogIn</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    アカウント未保持の場合、新規登録してください。
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
                    ログイン
                </Button>
                <Button onClick={handleClose} variant="contained" color="primary">
                    新規登録画面へ
                </Button>
            </DialogActions>
        </Dialog>
        </>
    )
}

export default LogIn
