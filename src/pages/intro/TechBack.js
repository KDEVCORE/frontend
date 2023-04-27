import { Check, DeveloperBoard, PowerSettingsNew, VerifiedUserOutlined } from "@mui/icons-material";
import { Button, Card, CardActionArea, CardContent, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Link, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useState } from "react";
import { API_BASE_URL } from "../../appConfig";

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

export default function IntroTechBack() {
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
                    {"back-end"}
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
                        <CardActionArea onClick={handleClickOpen2}>
                            <CardContent sx={number}>
                                <VerifiedUserOutlined sx={{ fontSize: { xs: 40, sm: 64, md: 128 } }} />
                                <Typography variant="h4">
                                    {"Authentication"}
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
                                {"BACK-END"}
                            </DialogTitle>
                            <DialogContent dividers>
                                <DialogContentText id="alert-dialog-description">
                                    <List>
                                        <ListItem>
                                            <ListItemText
                                                primary={"Authentication"}
                                                secondary={"인증 방식은 JWT. 회원 로그인은 ID/Password 판별, SSO 로그인은 OAuth 2 방식을 도입하여 구현했습니다."}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Check />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"JWT(JSON Web Token)"}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Check />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"OAuth 2"}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Check />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"Password Encryption"}
                                            />
                                        </ListItem>
                                    </List>
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} autoFocus>{"Close"}</Button>
                            </DialogActions>
                        </Dialog>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={item} elevation={10}>
                        <CardActionArea onClick={handleClickOpen1}>
                            <CardContent sx={number}>
                                <PowerSettingsNew sx={{ fontSize: { xs: 40, sm: 64, md: 128 } }} />
                                <Typography variant="h4">
                                    {"Spring"}
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
                                {"BACK-END"}
                            </DialogTitle>
                            <DialogContent dividers>
                                <DialogContentText id="alert-dialog-description">
                                    <List>
                                        <ListItem>
                                            <ListItemText
                                                primary={"Spring"}
                                                secondary={"Java 프로그래밍을 이용하여, Back-End를 구성할 수 있는 프레임워크를 사용했습니다."}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Check />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"Spring Boot"}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Check />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"Spring Security"}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Check />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"Spring Data JPA"}
                                            />
                                        </ListItem>
                                    </List>
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} autoFocus>{"Close"}</Button>
                            </DialogActions>
                        </Dialog>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={item} elevation={10}>
                        <CardActionArea onClick={handleClickOpen3}>
                            <CardContent sx={number}>
                                <DeveloperBoard sx={{ fontSize: { xs: 40, sm: 64, md: 128 } }} />
                                <Typography variant="h4">
                                    {"Structure"}
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
                                {"BACK-END"}
                            </DialogTitle>
                            <DialogContent dividers>
                                <DialogContentText id="alert-dialog-description">
                                    <List>
                                        <ListItem>
                                            <ListItemText
                                                primary={"Structure"}
                                                secondary={"RESTful에 맞게 API를 작성했고, Annotation을 사용하여 계층을 구분한 시스템을 구현했습니다."}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Check />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"REST API"}
                                                secondary={<Link href={API_BASE_URL + "/swagger-ui/index.html"}>{"API 살펴보기"}</Link>}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Check />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"Layered System"}
                                            />
                                        </ListItem>
                                    </List>
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