import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "../../configs/axiosConfig";
import {Avatar, Box, Button, Grid, Paper, TextField, Typography} from "@mui/material";
import localStorageService from '../../configs/localStorageService';
import EndPointLoader from '../../components/EndPointLoader/EndPointLoader';
import LoginIcon from '@mui/icons-material/Login';
import Link from "@mui/material/Link";
import Copyright from "../Copyright/Copyright";
import registerImage from "../../images/agronomy.png";
import Snackbar from '../../components/SnackBar/SnackBar';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState({message: '', status: true});
    const [showLoader, setShowLoader] = useState(false);
    const [uploadPercentage, setUploadPercentage] = useState(0);

    const navigate = useNavigate();

    const uploadProgressOptions = {
        onUploadProgress: (progressEvent) => {
            const {loaded, total} = progressEvent;
            let percent = Math.floor((loaded * 100) / total)
            console.log(`${loaded}bytes of ${total}bytes | ${percent}%`);
            setUploadPercentage(percent);
        }
    }

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleSubmit = () => {
        console.log('test');
        let isSubscribed = true;

        let payload = {
            "email": email,
            "password": password
        }

        setShowLoader(true);
        axios.post('/login', payload, uploadProgressOptions)
            .then(response => {
                if (isSubscribed === true) {
                    if (response.data.success === true) {
                        setMessage({...message, message: response.data.message, status: true});
                        handleClick();
                        setTimeout(() => {
                            localStorageService.setUser(response.data.data);
                            localStorage.setItem('getUser', true);
                            navigate("/grocery");
                        }, 1000);
                    } else {
                        setMessage({...message, message: response.data.message, status: false});
                        handleClick();
                    }
                }
                setShowLoader(false);
            })
            .catch(error => {
                if (isSubscribed === true) {
                    console.log(error, error.response, error.message, error.request);
                    setMessage({...message, message: error.response.data.message, status: false});
                    handleClick();
                }
                setShowLoader(false);
            })
        return () => (isSubscribed = false);
    }

    return (
        <>
            <Grid container component="main" sx={{height: "100vh"}}>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${registerImage})`,
                        backgroundColor: "white",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        marginTop: 16,
                        width: "65%",
                        height: "65%",
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginTop: 18
                        }}
                    >
                        <Avatar sx={{m: 1, bgcolor: "secondary.main"}}>
                            <LoginIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <Box
                            noValidate
                            sx={{mt: 1}}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                type="email" value={email}
                                onChange={e => {
                                    setEmail(e.target.value);
                                }}
                            />
                            <TextField
                                margin="normal"
                                autoComplete="password"
                                name="password"
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                type="password"
                                placeholder="Password" value={password}
                                onChange={e => {
                                    setPassword(e.target.value);
                                }}
                            />
                            <Button
                                onClick={handleSubmit}
                                fullWidth
                                variant="contained"
                                disabled={email === '' || password === ''}
                                sx={{mt: 3, mb: 2}}
                            >
                                Login
                            </Button>

                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link
                                        style={{cursor: "pointer"}}
                                        onClick={() => navigate("/register")}
                                        variant="body2"
                                    >
                                        {`Don't have an account? SignUp`}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                        <Copyright sx={{mt: 5}}/>
                    </Box>
                </Grid>

            </Grid>
            {showLoader === true ?
                <EndPointLoader showLoader={showLoader} uploadPercentage={uploadPercentage}/> : null}
            {open === true ?
                <Snackbar handleClose={handleClose} status={message.status} message={message.message}
                          openStatus={open}/> : null
            }
            {
                <Snackbar message={"Test"}/>
            }
        </>

    )
}

export default React.memo(Login)
