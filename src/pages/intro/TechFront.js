import { HubOutlined, JavascriptOutlined, WidgetsOutlined } from "@mui/icons-material";
import { Button, Card, CardActionArea, CardContent, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useState } from "react";

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const number = {
    fontSize: { xs: 40, sm: 64, md: 128 },
    fontFamily: 'default',
    textAlign: "center",
};

export default function IntroTechFront() {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const handleClickOpen1 = () => {
        setOpen1(true);
    };
    const handleClickOpen2 = () => {
        setOpen2(true);
    };
    const handleClickOpen3 = () => {
        setOpen3(true);
    };

    const handleClose = () => {
        setOpen1(false);
        setOpen2(false);
        setOpen3(false);
    };

    return (
        <Container
            component="section"
            sx={{
                textAlign: "center",
                alignItems: "center",
                padding: 4,
            }}
            maxWidth="xl"
        >
            <Typography
                variant="button"
                sx={{
                    fontSize: { sm: 32, md: 64 },
                    fontFamily: { textDecorationLine: "underline" }
                }}
            >
                {"front-end"}
            </Typography>
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
                                <JavascriptOutlined sx={{ fontSize: { xs: 40, sm: 64, md: 128 } }} />
                                <Typography variant="h4">
                                    {"JavaScript"}
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
                                {"front-end"}
                            </DialogTitle>
                            <DialogContent dividers>
                                <List>
                                    <ListItem>
                                        <ListItemText
                                            primary="JavaScript"
                                            secondary="대화식 웹 페이지를 만들기 위해 사용했습니다."
                                        />
                                    </ListItem>
                                </List>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} autoFocus>{"close"}</Button>
                            </DialogActions>
                        </Dialog>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={item} elevation={10}>
                        <CardActionArea onClick={handleClickOpen2}>
                            <CardContent sx={number}>
                                <HubOutlined sx={{ fontSize: { xs: 40, sm: 64, md: 128 } }} />
                                <Typography variant="h4">
                                    {"React"}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Dialog
                            open={open2}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title" variant="button">
                                {"front-end"}
                            </DialogTitle>
                            <DialogContent dividers>
                                <List>
                                    <ListItem>
                                        <ListItemText
                                            primary={"React"}
                                            secondary={"JavaScript 라이브러리, 주요 기능만을 사용하여 UI 구현 목적으로 사용했습니다."}
                                        />
                                    </ListItem>
                                </List>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} autoFocus>{"close"}</Button>
                            </DialogActions>
                        </Dialog>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={item} elevation={10}>
                        <CardActionArea onClick={handleClickOpen3}>
                            <CardContent sx={number}>
                                <WidgetsOutlined sx={{ fontSize: { xs: 40, sm: 64, md: 128 } }} />
                                <Typography variant="h4">
                                    {"MUI"}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Dialog
                            open={open3}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title" variant="button">
                                {"front-end"}
                            </DialogTitle>
                            <DialogContent dividers>
                                <List>
                                    <ListItem>
                                        <ListItemText
                                            primary={"MUI"}
                                            secondary={"UI 구성에 큰 시간을 투자하지 않아, Front-End 핵심 비즈니스 논리에 집중할 수 있어 사용했습니다."}
                                        />
                                    </ListItem>
                                </List>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} autoFocus>{"close"}</Button>
                            </DialogActions>
                        </Dialog>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}