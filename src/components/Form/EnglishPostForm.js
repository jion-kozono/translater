import React, { Component } from 'react'
import { FormControl, TextField, Button } from '@material-ui/core'

export default class EnglishPostForm extends Component {
    render() {
        return (
            <>
                <div>英文投稿画面</div>
                    <FormControl>
                    <TextField
                        variant="outlined"
                        placeholder="英文投稿フォーム　MultiLine with rows: 4 and rowsMax: 6"
                        multiline
                        rows={4}
                        rowsMax={6}
                    />
                    <TextField
                        variant="outlined"
                        placeholder="備考フォーム　MultiLine with rows: 2 and rowsMax: 4"
                        multiline
                        rows={2}
                        rowsMax={4}
                    />
                    <Button variant="contained" color="primary">
                        Post
                    </Button>
                    </FormControl>
            </>
        )
    }
}
