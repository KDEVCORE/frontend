import { PersonAdd, Publish, Visibility, VisibilityOff } from "@mui/icons-material";
import { Avatar, Box, Button, Container, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { call, signUp } from "../../service/ApiService";
import { strengthColor, strengthIndicator } from "../../utils/password-strength";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [validIdentifier, setValidIdentifier] = useState();
  const [strength, setStrength] = useState();
  
  const changePassword = (value) => {
    const level = strengthIndicator(value);
    setStrength(strengthColor(level));
  };
  
  const checkIdentifier = (identifier) => {
    call("/member/id-check", "POST", { identifier: identifier })
    .then((response) => {
      if(response) setValidIdentifier({ label: "Not available", color: "#f44336" });
      else setValidIdentifier({ label: "It's possible to use", color: "#00c853" });
    });
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
          <TextField
            id="identifier"
            name="identifier"
            type="text"
            variant="outlined"
            margin="normal"
            label="ID"
            required
            fullWidth
            onBlur={(e) => {
              checkIdentifier(e.target.value);
            }}
            helperText={validIdentifier?.label}
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

export default SignUp;
