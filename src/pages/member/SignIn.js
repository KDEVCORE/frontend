import { ExitToApp, GitHub, Google, Security } from "@mui/icons-material";
import { Avatar, Box, Button, Container, Divider, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import { signIn } from "../../service/ApiService";

function SignIn() {
  const handleSignIn = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    signIn({ username: data.get("username"), password: data.get("password") });
  };

  const handleSignInOauth2 = (provider) => {
    const token = new URLSearchParams(window.location.search).get("token");

    if(token) localStorage.setItem("ACCESS_TOKEN", token);
    return (
        <Navigate to={{ pathname: (token ? "/" : "/signin"), state: { from: provider.location }, }} />
    );
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
        <form noValidate sx={{ mt: 1 }} onSubmit={handleSignIn}>
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
            sx={{ mt: 3, mb: 2 }}
            startIcon={<ExitToApp />}>
            Sign In
          </Button>
        </form>
      </Box>
      <Link to="/signup">{"계정이 없습니까? 여기서 생성하세요."}</Link>
      <Divider sx={{ mt: 2, mb: 2 }}>
        <Typography variant="subtitle1">또는</Typography>
      </Divider>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Button
          variant="contained"
          name="github"
          onClick={e => handleSignInOauth2(e.target.name)}
          startIcon={<GitHub />}
        >
          {"GitHub"}
        </Button>
        <Button
          variant="contained"
          name="google"
          onClick={e => handleSignInOauth2(e.target.name)}
          startIcon={<Google />}
        >
          {"Google"}
        </Button>
      </Stack>
    </Container>
  );
}

export default SignIn;
