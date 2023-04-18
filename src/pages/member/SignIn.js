import { ExitToApp, Security, Visibility, VisibilityOff } from "@mui/icons-material";
import { Avatar, Box, Button, ButtonGroup, Container, Divider, IconButton, InputAdornment, Paper, TextField, Tooltip, Typography, Zoom } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signIn, signInOAuth2 } from "../../service/ApiService";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    signIn({ identifier: data.get("identifier"), password: data.get("password") });
  };

  const handleSignInOauth2 = (provider) => {
    signInOAuth2(provider);
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
              <Avatar variant="circular" src="/static/images/google_g_logo_icon.png" />
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
              <Avatar variant="rounded" src="/static/images/kakaotalk_sharing_btn_small.png" />
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
              <Avatar variant="rounded" src="/static/images/btn_icon_rounded.png" />
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
              <Avatar variant="circular" src="/static/images/github-mark.png" />
            </Button>
          </Tooltip>
        </ButtonGroup>
      </Paper>
    </Container>
  );
}

export default SignIn;
