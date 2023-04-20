import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {InputLabel} from "@mui/material";
import {useNavigate} from "react-router-dom";
import signUpBackground from "../../images/agronomy.png";
import localStorageService from "../../configs/localStorageService";
import {useState, useEffect} from "react";
import axios from "../../configs/axiosConfig";
import Snackbar from '../../components/SnackBar/SnackBar';
import EndPointLoader from '../../components/EndPointLoader/EndPointLoader';
import Copyright from "../Copyright/Copyright";

const payload = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phoneNumber: ""
};

const theme = createTheme();

export default function SignUp() {
    const [values, setValues] = useState(payload);
    const navigate = useNavigate();

    const [MessageHandler, setMessageHandler] = useState({message: '', status: true});

    const [open, setOpen] = React.useState(false);

    const [showLoader, setShowLoader] = useState(false);
    const [uploadPercentage, setuploadPercentage] = useState(0);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);

    const uploadProgressOptions = {
        onUploadProgress: (progressEvent) => {
            const {loaded, total} = progressEvent;
            let percent = Math.floor((loaded * 100) / total)
            console.log(`${loaded}bytes of ${total}bytes | ${percent}%`);
            setuploadPercentage(percent);
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

    const handleSubmit = (event) => {
        event.preventDefault();

        let isSubscribed = true;

        if(!passwordMatch) {
            setMessageHandler({...MessageHandler, message: 'Password do not match!!!', status: false});
            handleClick();
        } else {
            setShowLoader(true);
            values.email = localStorageService.getEmail();
            axios.post('/signup', values, uploadProgressOptions)
                .then(response => {
                    console.log(response);
                    if (isSubscribed === true) {
                        if (response.data.success === true) {
                            setMessageHandler({...MessageHandler, message: response.data.message, status: true});
                            handleClick();
                            setTimeout(() => {
                                localStorageService.setUser(values);
                                localStorageService.setVerifiedUser("false");
                                navigate("/grocery");
                            }, 1000);
                        } else {
                            setMessageHandler({...MessageHandler, message: response.data.message, status: false});
                            handleClick();
                        }
                    }
                    setShowLoader(false);
                })
                .catch(error => {
                    if (isSubscribed === true) {
                        console.log(error, error.response, error.message, error.request);
                        setMessageHandler({...MessageHandler, message: error.response.data.message, status: false});
                        handleClick();
                    }
                    setShowLoader(false);
                })
            return () => (isSubscribed = false);
        }
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setPasswordMatch(event.target.value === confirmPassword);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        setPasswordMatch(event.target.value === password);
    };

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });

        if(event.target.name === 'password') {
            handlePasswordChange(event)
        }

        if(event.target.name === "confirmPassword") {
            handleConfirmPasswordChange(event)
        }
    };

    useEffect(() => {
        if (!localStorageService.getVerifiedUser() || localStorageService.getVerifiedUser() === "false") {
            navigate("/register");
        }
    })

    return (
        <div className="layout">
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{height: "100vh"}}>
                    <CssBaseline/>
                    <Grid
                        item
                        xs={false}
                        sm={3}
                        md={7}
                        sx={{
                            backgroundImage: `url(${signUpBackground})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            width: "65%",
                            height: "65%",
                            marginTop: 16,
                        }}
                    />
                    <Container component="main" maxWidth="xs">
                            <CssBaseline/>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <Avatar sx={{m: 1, bgcolor: "secondary.main"}}>
                                    <LockOutlinedIcon/>
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Sign up
                                </Typography>
                                <Box
                                    component="form"
                                    noValidate
                                    onSubmit={handleSubmit}
                                    sx={{mt: 3}}
                                >
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="given-name"
                                                name="firstName"
                                                value={values.firstName}
                                                required
                                                fullWidth
                                                id="firstName"
                                                label="First Name"
                                                autoFocus
                                                onChange={handleChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="lastName"
                                                label="Last Name"
                                                name="lastName"
                                                value={values.lastName}
                                                autoComplete="family-name"
                                                onChange={handleChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                value={localStorageService.getEmail()}
                                                autoComplete="email"
                                                disabled
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                name="password"
                                                value={values.password}
                                                label="Password"
                                                type="password"
                                                id="password"
                                                autoComplete="new-password"
                                                onChange={handleChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                name="confirmPassword"
                                                value={values.confirmPassword}
                                                label="Confirm Password"
                                                type="password"
                                                id="confirmPassword"
                                                autoComplete="new-password"
                                                onChange={handleChange}
                                            />
                                            {!passwordMatch && <p className="text-danger">Passwords do not match.</p>}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <InputLabel id="demo-simple-select-label">
                                                Address
                                            </InputLabel>
                                            <TextField
                                                required
                                                fullWidth
                                                name="address"
                                                value={values.address}
                                                label="Address"
                                                type="text"
                                                id="address"
                                                autoComplete="address"
                                                onChange={handleChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <InputLabel id="demo-simple-select-label">
                                                Phone Number
                                            </InputLabel>
                                            <TextField
                                                required
                                                fullWidth
                                                name="phoneNumber"
                                                value={values.phoneNumber}
                                                label="PhoneNumber"
                                                type="number"
                                                id="phoneNumber"
                                                autoComplete="phoneNumber"
                                                onChange={handleChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox value="allowExtraEmails" color="primary"/>
                                                }
                                                label="I want to receive inspiration, marketing promotions and updates via email."
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid container justifyContent="flex-end">
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{mt: 3, mb: 2}}
                                        >
                                            Sign Up
                                        </Button>
                                    </Grid>
                                    <Grid container justifyContent="flex-end">
                                        <Grid item>
                                            <Link
                                                style={{cursor: "pointer"}}
                                                onClick={() => navigate("/login")}
                                                variant="body2"
                                            >
                                                Already have an account? Sign in
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Copyright sx={{mt: 5}}/>
                            </Box>
                    </Container>
                </Grid>
            </ThemeProvider>
            {showLoader === true ? <EndPointLoader showLoader={showLoader} uploadPercentage={uploadPercentage}/> : null}
            {open === true ?
                <Snackbar handleClose={handleClose} status={MessageHandler.status} message={MessageHandler.message}
                          openStatus={open}/> : null}
        </div>
    );
}
