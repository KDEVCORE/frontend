import { DeveloperBoard, PowerSettingsNew, VerifiedUserOutlined } from "@mui/icons-material";
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

export default function IntroTechBack() {
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
                    {"Back-End"}
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
                                <PowerSettingsNew sx={{ fontSize: {xs: 40, sm: 64, md: 128} }} />
                                <Typography variant="h4">
                                    {"Spring Boot"}
                                </Typography>
                                <Typography variant="body1">
                                    {"Spring Security, Spring Data JPA"}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={item} elevation={10}>
                        <CardActionArea>
                            <CardContent sx={number}>
                                <VerifiedUserOutlined sx={{ fontSize: {xs: 40, sm: 64, md: 128} }} />
                                <Typography variant="h4">
                                    {"Authentication"}
                                </Typography>
                                <Typography variant="body1">
                                    {"JWT(JSON Web Token), OAuth 2"}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={item} elevation={10}>
                        <CardActionArea>
                            <CardContent sx={number}>
                                <DeveloperBoard sx={{ fontSize: {xs: 40, sm: 64, md: 128} }} />
                                <Typography variant="h4">
                                    {"Structure"}
                                </Typography>
                                <Typography variant="body1">
                                    {"REST API, Layered System"}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}