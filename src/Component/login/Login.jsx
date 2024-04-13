import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Login.module.css";
import { createTheme ,ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";

const theme =createTheme({
  direction:"rtl"
})
const cacheRTl = createCache({
key:"muirtl",
stylisPlugins:[prefixer,rtlPlugin]
})

export default function Login() {
    const [values, setValues] = useState({
     
      showPassword: false,
    });

    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
      setValues({
        ...values,
        showPassword: !values.showPassword,
      });
    };

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const reset = () => {
    setemail("");
    setpassword("");
  };

  let navigate = useNavigate();
  // const validateLogin = (users) => {
  // 	if (!users.email) return toast.error("empty email");
  // 	if (!users.password) return toast.error("empty password");
  // };
  const handlesubmit = async (event) => {
    event.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    

    axios
      .post("http://api.idekr.com/microservice/v1/client/login", JSON.stringify(user))
      .then((response) => {
        console.log(response);

    
        localStorage.setItem("token", response.data.data.token);
       
        console.log(response.data.data.token);
        reset();

        navigate("/panel", { replace: true });
        // window.location.reload()
      })
      .catch((error) => {
        console.log(error);
        alert(error)
      });
    // validateLogin(users);
  };

  return (
    <CacheProvider value={cacheRTl}>

    
    <ThemeProvider theme={theme}>

    <Box>
      <Grid container sx={{ width: "100%", minHeight: "100vh",height:"100%" }}>
        {/* righte */}

        <Grid item md={6} lg={6} xs={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <Box sx={{ width: "80%", display: "block" }}>
            <Typography style={{ fontSize: "24px", fontWeight: "500" }}>ورود</Typography>

            {/* <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="ایمیل"
              style={{
                width: "70%",
                height: "48px",
                borderRadius: "8px",
                boxSizing: "border-box",
                padding: "0 1em",
                marginTop: "3em",
                border: "thin solid rgba(237, 237, 237, 1)",
              }}
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="رمز عبور"
              style={{
                width: "70%",
                height: "48px",
                borderRadius: "8px",
                boxSizing: "border-box",
                padding: "0 1em",
                marginTop: "1.5em",
                border: "thin solid rgba(237, 237, 237, 1)",
              }}
            /> */}

            <FormControl variant="outlined" sx={{ width: "80%", mt: 4 }} className={styles.input}>
            <InputLabel htmlFor="outlined-adornment-email" style={{alignItems:"right !important",textAlign:"right"}}>ایمیل</InputLabel>
            <OutlinedInput id="outlined-adornment-email" type="email"  value={email}
                onChange={(e) => setemail(e.target.value)} label="Email" />
          </FormControl>

          <FormControl variant="outlined" sx={{ width: "80%", mt: 4}} >
            <InputLabel htmlFor="outlined-adornment-password" className={styles.input}>
              رمز عبور
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

            <Button variant="contained" size="large" sx={{ width: "80%", mt: 4, background: "rgba(22, 50, 90, 1)" }} onClick={handlesubmit}>
              ورود
            </Button>
          </Box>
        </Grid>

        {/* left */}

        <Grid item xs={6} md={6} lg={6} className={styles.baclog}></Grid>
      </Grid>
    </Box>

    </ThemeProvider>
    </CacheProvider>
  );
}
