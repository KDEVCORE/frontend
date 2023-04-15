import { Box, Container, Link, Typography } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Notice from "./pages/error/Notice";
import SignIn from "./pages/member/SignIn";
import SignInOAuth2 from "./pages/member/SignInOAuth2";
import SignUp from "./pages/member/SignUp";

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

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signin-oauth" element={<SignInOAuth2 />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/notice" element={<Notice />} />
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