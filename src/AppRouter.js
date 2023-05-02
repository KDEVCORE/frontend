import { KeyboardArrowUp } from "@mui/icons-material";
import { Box, Fab, Fade, Toolbar, useScrollTrigger } from "@mui/material";
import { koKR, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import 'dayjs/locale/ko';
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import About from "./pages/About";
import Home from "./pages/Home";
import SignIn from "./pages/member/SignIn";
import SignInOAuth2 from "./pages/member/SignInOAuth2";
import SignUp from "./pages/member/SignUp";
import Todo from "./pages/todo/Frame";
import { getAuthStatus } from "./service/ApiService";

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function AppRouter(props) {
  const [authStatus, setAuthStatus] = useState(false);
  useEffect(() => {
    setAuthStatus(getAuthStatus());
  }, []);

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale="ko"
      localeText={koKR.components.MuiLocalizationProvider.defaultProps.localeText}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header auth={authStatus} />
        <Toolbar id="back-to-top-anchor" />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signin-oauth" element={<SignInOAuth2 />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
        <Footer />
        <ScrollTop {...props}>
          <Fab size="medium" aria-label="scroll back to top">
            <KeyboardArrowUp />
          </Fab>
        </ScrollTop>
      </Box>
    </LocalizationProvider>
  );
}