import { AccountCircle, ExitToApp, Home, ManageAccounts } from "@mui/icons-material";
import { AppBar, Box, Divider, FormControlLabel, IconButton, Link, Menu, MenuItem, Switch, Toolbar, Tooltip, Typography, useScrollTrigger } from "@mui/material";
import PropTypes from 'prop-types';
import { cloneElement, Fragment, useState } from "react";
import { getAuthStatus, signOut } from "./service/ApiService";

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
    const [menuItem, setMenuItem] = useState(null);

    const handleMenu = (event) => {
        setMenuItem(event.currentTarget);
    };

    const handleClose = () => {
        setMenuItem(null);
    };

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
                    <IconButton color="inherit" aria-label="home" component="a" href="/">
                        <Home sx={{ fontSize: { sm: 24, md:48 }}} />
                    </IconButton>
                    <Typography
                        variant="button"
                        component="div"
                        sx={{
                            mt: "auto",
                            flexGrow: 1,
                        }}
                    />
                    <FormControlLabel
                        control={<Switch readOnly checked={getAuthStatus()} />}
                        label="Authentication"
                        labelPlacement="top"
                    />
                    <Box>
                        {getAuthStatus() && (
                            <Fragment>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <Tooltip title="Account" placement="bottom">
                                        <AccountCircle sx={{ fontSize: { sm: 24, md:48 } }} />
                                    </Tooltip>
                                </IconButton>
                                <Menu
                                    MenuListProps={{
                                      'aria-labelledby': 'basic-button',
                                    }}
                                    id="menu-appbar"
                                    anchorEl={menuItem}
                                    anchorOrigin={{
                                        vertical: 'bottom',
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
                                    <MenuItem>
                                        <IconButton component="a" href="/profile" variant="button">
                                            <ManageAccounts /> {"profile"}
                                        </IconButton>
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={signOut}>
                                        <Link href="#" underline="none" variant="button">
                                            {"sign out"}
                                        </Link>
                                    </MenuItem>
                                </Menu>
                            </Fragment>
                        )}
                        {!getAuthStatus() && (
                            <Fragment>
                                <IconButton
                                    aria-label="member process choice"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <Tooltip title="Member" placement="bottom">
                                        <ExitToApp sx={{ fontSize: { sm: 24, md:48 } }} />
                                    </Tooltip>
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={menuItem}
                                    anchorOrigin={{
                                        vertical: 'bottom',
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
                                    <MenuItem>
                                        <Link href="/signin" underline="none" variant="button">
                                            {"sign in"}
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link href="/signup" underline="none" variant="button">
                                            {"sign up"}
                                        </Link>
                                    </MenuItem>
                                </Menu>
                            </Fragment>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    );
};

export default Header;