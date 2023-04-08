import { ExitToApp, Security } from "@mui/icons-material";
import { Avatar, Box, Button, ButtonGroup, Container, Divider, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { signIn, signInOAuth2 } from "../../service/ApiService";

function SignIn() {
  const handleSignIn = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    signIn({ username: data.get("username"), password: data.get("password") });
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
          marginTop: 8,
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
            type="text"
            variant="outlined"
            margin="normal"
            label="ID"
            id="username"
            name="username"
            autoComplete="username"
            required
            fullWidth
            autoFocus
          />
          <TextField
            type="password"
            variant="outlined"
            margin="normal"
            label="Password"
            id="password"
            name="password"
            autoComplete="new-password"
            required
            fullWidth
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
          <Button aria-label="social login button from google" onClick={handleSignInOauth2("google")}>
            <Avatar variant="circular" src="/static/images/google_g_logo_icon.png" />
          </Button>
          <Button aria-label="social login button from kakao" onClick={e => handleSignInOauth2("kakao")}>
            <Avatar variant="rounded" src="/static/images/kakaotalk_sharing_btn_small.png" />
          </Button>
          <Button aria-label="social login button from naver" onClick={e => handleSignInOauth2("naver")}>
            <Avatar variant="rounded" src="/static/images/btn_icon_rounded.png" />
          </Button>
          <Button aria-label="social login button from github" onClick={e => handleSignInOauth2("github")}>
            <Avatar variant="circular" src="/static/images/github-mark.png" />
          </Button>
        </ButtonGroup>
      </Paper>
    </Container>
  );
}

export default SignIn;
