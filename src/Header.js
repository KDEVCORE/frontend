import { Block, HomeOutlined, InfoOutlined, PlaylistAddCheckOutlined, Verified } from "@mui/icons-material";
import { AppBar, Box, Button, Chip, Divider, Toolbar, Typography, useScrollTrigger } from "@mui/material";
import PropTypes from 'prop-types';
import { cloneElement } from "react";

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const Header = (props) => {
    return (
        <ElevationScroll {...props}>
            <AppBar position="fixed" color="inherit">
                <Toolbar
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                    }}
                >
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: "flex"
                        }}
                    >
                        <Button
                            variant="text"
                            href="/"
                            color="inherit"
                            size="large"
                            startIcon={<HomeOutlined />}
                        >
                            {"home"}
                        </Button>
                        <Divider orientation="vertical" variant="middle" flexItem sx={{ mx: 1 }} />
                        <Button
                            variant="text"
                            href={props.auth ? "/todo" : "/signin"}
                            color="inherit"
                            size="large"
                            startIcon={<PlaylistAddCheckOutlined />}
                        >
                            {"todo"}
                        </Button>
                        <Divider orientation="vertical" variant="middle" flexItem sx={{ mx: 1 }} />
                        <Button
                            variant="text"
                            href="/about"
                            color="inherit"
                            size="large"
                            startIcon={<InfoOutlined />}
                        >
                            {"about"}
                        </Button>
                    </Box>
                    <Chip
                        label={<Typography variant="button">{props.auth ? "certified" : "limited"}</Typography>}
                        color={props.auth ? "success" : "default"}
                        icon={props.auth ? <Verified /> : <Block />}
                        variant="filled"
                    />
                    <Button
                        href={props.auth ? "/signout" : "/signin"}
                        variant="text"
                        color="inherit"
                        sx={{
                            ml: 1,
                            border: 1,
                            borderRadius: 1,
                        }}
                    >
                        {props.auth ? "sign out" : "sign in"}
                    </Button>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    );
};

export default Header;