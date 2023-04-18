import { AccountCircle } from "@mui/icons-material";
import { AppBar, Box, Container, Divider, IconButton, Link, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignIn from "./pages/member/SignIn";
import SignInOAuth2 from "./pages/member/SignInOAuth2";
import SignUp from "./pages/member/SignUp";
import Todo from "./pages/todo/Frame";
import { getAuthStatus, signOut } from "./service/ApiService";

function AppRouter() {
    const Copyright = () => {
        return (
            <Typography variant="subtitle1" color="InfoText" align="center">
                {"Copyright " + new Date().getFullYear() + " "}
                <Link href="/">
                    {"KDEVCORE"}
                </Link>
                {", Demo Web Application."}
            </Typography>
        );
    };

    const [menuItem, setMenuItem] = useState(null);

    const handleAvatarMenu = (event) => {
      setMenuItem(event.currentTarget);
    };
  
    const handleClose = () => {
      setMenuItem(null);
    };

    let beferAuthUI = (
        <div>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                <Link
                    href="/signin"
                    color="inherit"
                    variant="h6"
                    underline="none"
                    sx={{ml: 3}}
                >
                    {"Sign In"}
                </Link>
                <Link
                    href="/signup"
                    color="inherit"
                    variant="h6"
                    underline="none"
                    sx={{ml: 3}}
                >
                    {"Sign Up"}
                </Link>
            </Box>
        </div>
    );

    let afterAuthUI = (
        <div>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleAvatarMenu}
                color="inherit"
                >
                <AccountCircle />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={menuItem}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(menuItem)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <Divider />
                <MenuItem onClick={signOut}>Sign Out</MenuItem>
            </Menu>
        </div>
    );

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Box>
                <AppBar position="static">
                    <Toolbar>
                        <Link
                            href="/"
                            underline="none"
                            color="inherit"
                            variant="h4"
                            sx={{ flexGrow: 1 }}
                        >
                            {"KDEVCORE"}
                        </Link>
                        {getAuthStatus() ? afterAuthUI : beferAuthUI}
                    </Toolbar>
                </AppBar>
            </Box>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signin-oauth" element={<SignInOAuth2 />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/todo" element={<Todo />} />
                </Routes>
            </BrowserRouter>
            <Box
                component="footer"
                sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[800],
                }}
            >
                <Container maxWidth="sm">
                    <Copyright />
                </Container>
            </Box>
        </Box>
    );
}

export default AppRouter;