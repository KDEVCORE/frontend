import { PersonAdd, Publish, Visibility, VisibilityOff } from "@mui/icons-material";
import { Alert, Avatar, Box, Button, Container, IconButton, InputAdornment, Paper, Snackbar, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuthStatus, signUp } from "../../service/ApiService";
import { strengthColor, strengthIndicator } from "../../utils/password-strength";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState();
  const [validationPw, setValidationPw] = useState(false);
  const [open, setOpen] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  
  if(getAuthStatus()) window.location.href = "/";
  
  const changePassword = (value) => {
    const level = strengthIndicator(value);
    if(level < 1) setValidationPw(false);
    else setValidationPw(true);
    setStrength(strengthColor(level));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    
    if(!validationPw) {
      setAlertMsg("비밀번호를 확인해 주십시오.")
      setOpen(true);
      return;
    }

    const dto = {
      identifier: data.get("identifier"),
      password: data.get("password"),
      name: data.get("name"),
      email: data.get("email")
    };

    signUp(dto)
    .then((response) => {
      if(!response.ok) {
        setAlertMsg("입력 정보를 확인해 주십시오.");
        setOpen(true);
      } else window.location.href = "/signin";
    });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'black' }}>
          <PersonAdd />
        </Avatar>
        <Typography variant="h4">
          {"SIGN UP"}
        </Typography>
        <form noValidate sx={{ mt: 2 }} onSubmit={handleSubmit}>
          <Snackbar
            autoHideDuration={3000}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={open}
            onClose={handleClose}
          >
            <Alert
              variant="filled"
              severity="error"
              sx={{ width: '100%' }}
              onClose={handleClose}
            >
              {alertMsg}
            </Alert>
          </Snackbar>
          <TextField
            id="identifier"
            name="identifier"
            type="text"
            variant="outlined"
            margin="normal"
            label="ID"
            required
            fullWidth
          />
          <TextField
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            margin="normal"
            label="Password"
            required
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={(e) => {
              changePassword(e.target.value);
            }}
            helperText={strength?.label}
          />
          <TextField
            id="name"
            name="name"
            type="text"
            variant="outlined"
            margin="normal"
            label="Your Name"
            required
            fullWidth
          />
          <TextField
            id="email"
            name="email"
            type="email"
            variant="outlined"
            margin="normal"
            label="E-Mail"
            required
            fullWidth
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
            startIcon={<Publish />}>
            Sign Up
          </Button>
        </form>
      </Box>
      <Paper
        sx={{ mt: 2, p: 1, textAlign: "center" }}
        elevation={4}
      >
        <Link to="/signin">{"이미 계정이 있습니까? 돌아가 로그인 하세요."}</Link>
      </Paper>
    </Container>
  );
}