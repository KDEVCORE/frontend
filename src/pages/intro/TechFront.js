import { Check, HubOutlined, JavascriptOutlined, WidgetsOutlined } from "@mui/icons-material";
import { Button, Card, CardActionArea, CardContent, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
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
                    {"front-end"}
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
                                <DialogContentText id="alert-dialog-description">
                                    <List>
                                        <ListItem>
                                            <ListItemText
                                                primary={"JavaScript"}
                                                secondary={"JavaScript는 대화식 웹 페이지를 만들기 위해 사용하는 프로그래밍 언어입니다. 여러 라이브러리가 있지만, 이 프로젝트에서는 React를 사용했습니다."}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Check />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"쉬운 학습 및 사용성"}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Check />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"플랫폼 독립성 확보"}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Check />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"서버 부하 감소"}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Check />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"사용자 인터페이스 개선"}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Check />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"동시성 지원"}
                                            />
                                        </ListItem>
                                    </List>
                                </DialogContentText>
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
                                {"FRONT-END"}
                            </DialogTitle>
                            <DialogContent dividers>
                                <DialogContentText id="alert-dialog-description">
                                    <List>
                                        <ListItem>
                                            <ListItemText
                                                primary={"React"}
                                                secondary={"React의 주요 기능만을 사용하여, UI 구현을 위해 축약적으로 사용했습니다."}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Check />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"선언형"}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Check />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"컴포넌트 기반"}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Check />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"유연한 호환성"}
                                            />
                                        </ListItem>
                                    </List>
                                </DialogContentText>
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
                                {"FRONT-END"}
                            </DialogTitle>
                            <DialogContent dividers>
                                <DialogContentText id="alert-dialog-description">
                                    <List>
                                        <ListItem>
                                            <ListItemText
                                                primary={"MUI"}
                                                secondary={"UI 구성에 큰 시간을 투자하지 않아, Front-End 핵심 비즈니스 논리에 집중할 수 있습니다."}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Check />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"빠른 제공"}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Check />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"깔끔함"}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Check />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"사용자 정의"}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Check />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"협업 편의"}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Check />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"커뮤니티"}
                                            />
                                        </ListItem>
                                    </List>
                                </DialogContentText>
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