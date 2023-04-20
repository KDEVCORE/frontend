import { HubOutlined, JavascriptOutlined, WidgetsOutlined } from "@mui/icons-material";
import { Box, Card, CardActionArea, CardContent, Container, Grid, Typography } from "@mui/material";

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const number = {
    fontSize: {xs: 40, sm: 64, md: 128},
    fontFamily: 'default',
    textAlign: "center",
};

export default function IntroTechFront () {
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
                    {"Front-End"}
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
                    <Card sx={item} elevation={4}>
                        <CardActionArea sx={number}>
                            <CardContent>
                                <HubOutlined sx={{ fontSize: {xs: 40, sm: 64, md: 128} }} />
                                <Typography variant="h4">
                                    {"React"}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={item}>
                        <CardActionArea>
                            <CardContent sx={number}>
                                <JavascriptOutlined sx={{ fontSize: {xs: 40, sm: 64, md: 128} }} />
                                <Typography variant="h4">
                                    {"Javascript"}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={item}>
                        <CardActionArea>
                            <CardContent sx={number}>
                                <WidgetsOutlined sx={{ fontSize: {xs: 40, sm: 64, md: 128} }} />
                                <Typography variant="h4">
                                    {"MUI"}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}