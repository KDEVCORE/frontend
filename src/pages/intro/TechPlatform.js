import { Check, StorageOutlined } from "@mui/icons-material";
import { Button, Card, CardActionArea, CardContent, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
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
            }}
        >
            <Typography
                variant="button"
                sx={{
                    fontSize: { sm: 32, md: 64 },
                    fontFamily: { textDecorationLine: "underline" }
                }}
            >
                {"platform"}
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
                                <StorageOutlined sx={{ fontSize: { xs: 40, sm: 64, md: 128 } }} />
                                <Typography variant="h4">
                                    {"AWS"}
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
                                {"platform"}
                            </DialogTitle>
                            <DialogContent dividers>
                                <List>
                                    <ListItem>
                                        <ListItemText
                                            primary="AWS(Amazon Web Services)"
                                            secondary="클라우드 컴퓨팅 환경을 경험해보기 위해 PaaS 중에서 대중적인 플랫폼을 이용했습니다."
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Check />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="EC2(Elastic Compute Cloud)"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Check />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Elastic Beanstalk"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Check />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Route 53"
                                        />
                                    </ListItem>
                                </List>
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