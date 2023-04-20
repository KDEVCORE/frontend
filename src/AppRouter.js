import { KeyboardArrowUp } from "@mui/icons-material";
import { Box, Fab, Fade, Toolbar, useScrollTrigger } from "@mui/material";
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import SignIn from "./pages/member/SignIn";
import SignInOAuth2 from "./pages/member/SignInOAuth2";
import SignUp from "./pages/member/SignUp";
import Todo from "./pages/todo/Frame";

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
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Header />
            <Toolbar id="back-to-top-anchor" />
            <Box>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signin-oauth" element={<SignInOAuth2 />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/todo" element={<Todo />} />
                    </Routes>
                </BrowserRouter>
            </Box>
            <Footer />
            <ScrollTop {...props}>
                <Fab size="medium" aria-label="scroll back to top">
                    <KeyboardArrowUp />
                </Fab>
            </ScrollTop>
        </Box>
    );
}