import React, {useRef} from "react";
import {Alert, Avatar, Box, Button, Grid, Paper, Snackbar, TextField, Typography} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import registerImage from "../../assets/register.png";
import {sendForm} from "@emailjs/browser";
import {useNavigate} from "react-router-dom";
import localStorageService from "../../configs/localStorageService";

const Register = () => {
    const [openSuccess, setOpenSuccess] = React.useState(false);
    const [openIncorrectOTP, setOpenIncorrectOTP] = React.useState(false);
    const form = useRef();
    const navigate = useNavigate();

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpenSuccess(false);
    };

    const handleSubmitOTP = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });

        sendForm(
            "service_awa4i8c",
            "template_ds4gz3j",
            form.current,
            "an0H3tvHS0noMqv5O"
        )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        setOpenSuccess(true);
        console.log(form);
    };

    const handleSubmit = () => {
        console.log("inside handle submit");
        const otp = document.getElementById("password").value;
        console.log(otp);
        if (otp === "2234") {
            localStorageService.setVerifiedUser("true");
            navigate("/signup");
        } else {
            setOpenIncorrectOTP(true);
        }
    };

    return (
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
                        marginTop: 18,
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: "secondary.main"}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Verify E-Mail
                    </Typography>
                    <Box
                        noValidate
                        sx={{mt: 1}}
                    >
                        <form onSubmit={handleSubmitOTP} ref={form}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                // required
                                fullWidth
                                name="password"
                                label="Enter OTP"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{mt: 3, mb: 2, ml: 20}}
                            >
                                Send OTP
                            </Button>
                            <Snackbar
                                open={openSuccess}
                                autoHideDuration={6000}
                                onClose={handleClose}
                            >
                                <Alert
                                    onClose={handleClose}
                                    severity="success"
                                    sx={{width: "100%"}}
                                >
                                    OTP sent to your email ID!
                                </Alert>
                            </Snackbar>
                            <Button
                                //   type="submit"
                                variant="contained"
                                sx={{mt: 3, mb: 2, ml: 2}}
                                onClick={handleSubmit}
                            >
                                Verify
                            </Button>
                            <Snackbar
                                open={openIncorrectOTP}
                                autoHideDuration={6000}
                                onClose={handleClose}
                            >
                                <Alert
                                    onClose={handleClose}
                                    severity="error"
                                    sx={{width: "100%"}}
                                >
                                    Incorrect OTP!
                                </Alert>
                            </Snackbar>
                        </form>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Register;