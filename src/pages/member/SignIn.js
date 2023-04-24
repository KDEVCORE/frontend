import { ExitToApp, Security, Visibility, VisibilityOff } from "@mui/icons-material";
import { Alert, Avatar, Box, Button, ButtonGroup, Container, Divider, IconButton, InputAdornment, Paper, Snackbar, TextField, Tooltip, Typography, Zoom } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuthStatus, signIn, signInOAuth2 } from "../../service/ApiService";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  if(getAuthStatus()) window.location.href = "/";

  const handleSignIn = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const dto = {
      identifier: data.get("identifier"),
      password: data.get("password"),
    }
    signIn(dto)
    .then((response) => {
      if(!response.ok) {
        setAlertMsg("입력 정보를 확인해 주십시오.");
        setOpen(true);
      } else window.location.href = "/todo";
    });
  };

  const handleSignInOauth2 = (provider) => {
    signInOAuth2(provider);
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
          <Security />
        </Avatar>
        <Typography variant="h4">
          {"SIGN IN"}
        </Typography>
        <form noValidate sx={{ mt: 2 }} onSubmit={handleSignIn}>
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
            autoComplete="identifier"
            required
            fullWidth
            autoFocus
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
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
            startIcon={<ExitToApp />}>
            Sign In
          </Button>
        </form>
      </Box>
      <Paper
        sx={{ mt: 2, p: 1, textAlign: "center" }}
        elevation={4}
      >
        <Link to="/signup">{"계정이 없습니까? 여기서 생성하세요."}</Link>
      </Paper>
      <Divider sx={{ mt: 2 }}>
        <Typography variant="subtitle1">또는</Typography>
      </Divider>
      <Paper sx={{ mt: 2, p: 1, textAlign: "center" }} elevation={6}>
        <ButtonGroup
          orientation="horizontal"
          fullWidth
        >
          <Tooltip
            title="Google"
            TransitionComponent={Zoom}
            placement="bottom"
            arrow
          >
            <Button
              aria-label="social login button from google"
              value="google"
              onClick={e => handleSignInOauth2(e.currentTarget.value)}
            >
              <Avatar variant="circular" src="/static/images/logo/google_g_logo_icon.png" />
            </Button>
          </Tooltip>
          <Tooltip
            title="kakao"
            TransitionComponent={Zoom}
            placement="bottom"
            arrow
          >
            <Button
              aria-label="social login button from kakao"
              value="kakao"
              onClick={e => handleSignInOauth2(e.currentTarget.value)}
            >
              <Avatar variant="rounded" src="/static/images/logo/kakaotalk_sharing_btn_small.png" />
            </Button>
          </Tooltip>
          <Tooltip
            title="Naver"
            TransitionComponent={Zoom}
            placement="bottom"
            arrow
          >
            <Button
              aria-label="social login button from naver"
              value="naver"
              onClick={e => handleSignInOauth2(e.currentTarget.value)}
            >
              <Avatar variant="rounded" src="/static/images/logo/btn_icon_rounded.png" />
            </Button>
          </Tooltip>
          <Tooltip
            title="GitHub"
            TransitionComponent={Zoom}
            placement="bottom"
            arrow
          >
            <Button
              aria-label="social login button from github"
              value="github"
              onClick={e => handleSignInOauth2(e.currentTarget.value)}>
              <Avatar variant="circular" src="/static/images/logo/github-mark.png" />
            </Button>
          </Tooltip>
        </ButtonGroup>
      </Paper>
    </Container>
  );
}