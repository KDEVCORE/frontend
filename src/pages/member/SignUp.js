import { PersonAdd, Publish } from "@mui/icons-material";
import { Avatar, Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../service/ApiService";

function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    signUp({ username: data.get("username"), password: data.get("password") })
      .then((response) => {
        window.location.href = "/signin";
      });
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
          <PersonAdd />
        </Avatar>
        <Typography variant="h4">
          {"SIGN UP"}
        </Typography>
        <form noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
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
            startIcon={<Publish />}>
            Sign Up
          </Button>
        </form>
      </Box>
      <Link to="/signin">{"이미 계정이 있습니까? 돌아가 로그인 하세요."}</Link>
    </Container>
  );
}

export default SignUp;
