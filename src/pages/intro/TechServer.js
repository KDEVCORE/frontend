import { StorageOutlined } from "@mui/icons-material";
import { Card, CardActionArea, CardContent, Container, Grid, Typography } from "@mui/material";

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "center",
};

const number = {
    fontSize: {xs: 40, sm: 64, md: 128},
    fontFamily: 'default',
    textAlign: "center",
};

export default function IntroTechServer () {
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
            <Typography variant="h4">
                {"Server-Side"}
            </Typography>
            <Grid
                container
                spacing={5}
                sx={{
                    justifyContent: "center",
                }}
            >
                <Grid item xs={12} md={4}>
                    <Card sx={item} elevation={4}>
                        <CardActionArea sx={number}>
                            <CardContent>
                                <StorageOutlined sx={{ fontSize: {xs: 40, sm: 64, md: 128} }} />
                                <Typography variant="h4">
                                    {"AWS EC2"}
                                </Typography>
                                <Typography variant="body1">
                                    {"Elastic Beanstalk, Route 53, RDS, S3"}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}