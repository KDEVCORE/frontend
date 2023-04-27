import { AccountTreeOutlined } from "@mui/icons-material";
import { Avatar, Button, Card, CardActionArea, CardContent, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from "@mui/material";
import { useState } from "react";

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "center",
};

const number = {
    fontSize: { xs: 40, sm: 64, md: 128 },
    fontFamily: 'default',
    textAlign: "center",
};

export default function IntroTechPlatform() {
    const [open1, setOpen1] = useState(false);

    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    const handleClose = () => {
        setOpen1(false);
    };

    return (
        <Container
            component="section"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 4,
                my: 2,
            }}
        >
            <Button variant="text" disabled>
                <Typography
                    variant="button"
                    sx={{
                        fontSize: { sm: 32, md: 64 },
                        fontFamily: { color: "black", textDecorationLine: "underline" }
                    }}
                >
                    {"design"}
                </Typography>
            </Button>
            <Grid
                container
                spacing={5}
                sx={{
                    justifyContent: "center",
                }}
            >
                <Grid item xs={12} md={4}>
                    <Card sx={item} elevation={10}>
                        <CardActionArea onClick={handleClickOpen1}>
                            <CardContent sx={number}>
                                <AccountTreeOutlined sx={{ fontSize: { xs: 40, sm: 64, md: 128 } }} />
                                <Typography variant="h4">
                                    {"Flowchart"}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Dialog
                            open={open1}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title" variant="button">
                                {"design"}
                            </DialogTitle>
                            <DialogContent dividers>
                                <DialogContentText id="alert-dialog-description">
                                    <Avatar
                                        alt="flowchart"
                                        variant="square"
                                        src="/static/design.png"
                                        sx={{
                                            width: "100%",
                                            height: "100%"
                                        }}
                                    />
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} autoFocus>{"Close"}</Button>
                            </DialogActions>
                        </Dialog>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}