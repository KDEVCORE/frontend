import { ManageAccounts, Publish, Visibility, VisibilityOff } from "@mui/icons-material";
import { Alert, Avatar, Box, Button, Container, IconButton, InputAdornment, Snackbar, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { strengthColor, strengthIndicator } from "../../utils/password-strength";

export default function Profile() {
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState();
  const [open, setOpen] = useState(false);
  const [validationPw, setValidationPw] = useState(false);

  const changePassword = (value) => {
    const level = strengthIndicator(value);
    if (level < 2) setValidationPw(false);
    else setValidationPw(true);
    setStrength(strengthColor(level));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
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
          <ManageAccounts />
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
              {"입력 정보를 확인해 주십시오"}
            </Alert>
          </Snackbar>
          <TextField
            id="identifier"
            name="identifier"
            type="text"
            variant="outlined"
            margin="normal"
            label="ID"
            disabled
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
    </Container>
  );
}