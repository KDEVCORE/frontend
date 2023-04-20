import { StorageOutlined } from "@mui/icons-material";
import { Box, Card, CardActionArea, CardContent, Container, Grid, Typography } from "@mui/material";

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
                my: 2,
            }}
        >
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4">
                    {"Server-Side"}
                </Typography>
            </Box>
            <Grid
                container
                spacing={5}
                sx={{
                    justifyContent: "center",
                }}
            >
                <Grid item xs={12} md={4}>
                    <Card sx={item} elevation={10}>
                        <CardActionArea sx={number}>
                            <CardContent>
                                <StorageOutlined sx={{ fontSize: {xs: 40, sm: 64, md: 128} }} />
                                <Typography variant="h4">
                                    {"AWS EC2"}
                                </Typography>
                                <Typography variant="body1">
                                    {"Elastic Beanstalk, Route 53"}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}