import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { TextField, Button, Box, Typography, makeStyles, Tabs, Tab, AppBar, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'
import MyTranslationPosts from './MyTranslationPosts/MyTranslationPosts'
import MyLikedPosts from './MyLikedPosts/MyLikedPosts'
import MyPosts from './MyPosts/MyPosts'
import { UserContext } from '../../Context/UserContext'

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box p={3}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}))

export const UserShow = (props) => {
    const { user } = useContext(UserContext)
    const initialState = {
        userName: user.username,
        selfIntroduction: '',
    }
    const classes = useStyles()
    const [value, setValue] = useState(0)
    const [open, setOpen] = useState(false)
    const [formState, setFormState] = useState(initialState)

    const handleClickOpen = () => setOpen(true)

    const handleClose = () => setOpen(false)

    const handleChange = (event, newValue) => setValue(newValue)

    const setInput = (key, value) => setFormState({ ...formState, [key]: value })

    return (
        <>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">編集</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    ユーザー情報を編集してください。
                </DialogContentText>
                <TextField
                    onChange={event => setInput('userName', event.target.value)}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    value={formState.userName}
                    fullWidth
                />
                <TextField
                    onChange={event => setInput('selfIntroduction', event.target.value)}
                    autoFocus
                    margin="dense"
                    id="selfIntroduction"
                    label="Self-Introduction"
                    value={formState.selfIntroduction}
                    fullWidth
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                    EDIT
                </Button>
                </DialogActions>
            </Dialog>
            <div>{props.title}</div>
            <div>アカウント情報</div>
            <p>User: {formState.userName}</p>
            <p>Self-introduction: </p>
            <p>Score: 30</p>
            <p>Created date: 2020-06-24</p>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                アカウント情報を編集
            </Button>
            <hr/>
            <Button variant="contained" color="secondary">
                アカウントを削除する
            </Button><hr />
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="MY POSTS" {...a11yProps(0)} />
                    <Tab label="MY TRANSLATION" {...a11yProps(1)} />
                    <Tab label="LIKED" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <div>
                        <MyPosts />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <MyTranslationPosts />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <MyLikedPosts />
                </TabPanel>
            </div>
        </>
    )
}