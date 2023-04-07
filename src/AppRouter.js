import { Container, Paper, Typography } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import SignIn from "./pages/member/SignIn";
import SignInOAuth2 from "./pages/member/SignInOAuth2";
import SignUp from "./pages/member/SignUp";

function AppRouter() {
    const Copyright = () => {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {"© " + new Date().getFullYear() + ", KDEVCORE Web Application."}
            </Typography>
        );
    };

    return (
        <Container>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signin-oauth" element={<SignInOAuth2 />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
            <Copyright />
        </Container>
    );
}

export default AppRouter;