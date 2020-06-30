import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, TextField, Button, Box, Typography, makeStyles, Tabs, Tab, AppBar } from '@material-ui/core'
import MyTranslationPosts from './MyTranslationPosts/MyTranslationPosts'
import MyLikedPosts from './MyLikedPosts/MyLikedPosts'
import MyPosts from './MyPosts/MyPosts'

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

const UserShow = (props) => {
    const classes = useStyles()
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <>
            <div>{props.title}</div>
            <div>アカウント情報</div>
            <FormControl>
                <TextField
                    label="name"
                    variant="outlined"
                    value=""
                />
                <TextField
                    label="self-introduction"
                    variant="outlined"
                    value=""
                />
                <p>Score: 30</p>
                <p>Created date: 2020-06-24</p>
                <Button variant="contained" color="primary">
                    アカウント情報を編集
                </Button>
            </FormControl><hr/>
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
                    <MyPosts />
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

export default UserShow
