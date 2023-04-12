import { PersonAdd, Publish } from "@mui/icons-material";
import { Avatar, Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { call, signUp } from "../../service/ApiService";
import { strengthColor, strengthIndicator } from "../../utils/password-strength";

function SignUp() {
  const [validIdentifier, setValidIdentifier] = useState(false);
  const [strength, setStrength] = useState(0);
  const [level, setLevel] = useState();
  
  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const dto = {
      identifier: data.get("identifier"),
      password: data.get("password"),
      name: data.get("name"),
      email: data.get("email")
    }
    signUp(dto).then((response) => {
      window.location.href = "/signin";
    });
  };

  const handleValidation = (identifier) => {
    call("/member/id-check", "POST", { identifier: identifier })
    .then((response) => setValidIdentifier(response.data));
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
        <form noValidate sx={{ mt: 2 }} onSubmit={handleSubmit}>
          <TextField
            id="identifier"
            name="identifier"
            type="text"
            variant="outlined"
            margin="normal"
            label="ID"
            required
            fullWidth
            onBlur={e => handleValidation(e.target.value)}
            helperText={
              <Typography variant="subtitle1">
                {validIdentifier ? "It's possible to use." : "Not available."}
              </Typography>
            }
          />
          <TextField
            id="password"
            name="password"
            type="password"
            variant="outlined"
            margin="normal"
            label="Password"
            required
            fullWidth
            onChange={(e) => {
              changePassword(e.target.value);
            }}
            helperText={strength !== 0 && (
              <Typography variant="subtitle1">
                {level?.label}
              </Typography>
            )}
          />
          <TextField
            id="confirm-password"
            name="confirm-password"
            type="password"
            variant="outlined"
            margin="normal"
            label="Confirm Password"
            required
            fullWidth
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

export default SignUp;
