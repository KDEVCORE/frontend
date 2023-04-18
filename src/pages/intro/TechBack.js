import { Card, CardContent, Container, Stack, Typography } from "@mui/material";

function IntroTechBack () {
    return (
        <Container
            component="section"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#44aa44",
            }}
        >
            <Typography variant="h4" component="h4">
                {"Back-End"}
            </Typography>
            <Stack
                spacing={{ xs: 1, sm: 2, md: 4 }}
                direction={{ sm: 'column', md: 'row' }}
                sx={{ margin: 1, justifyContent: "center", textAlign: "center" }}
            >
                <Card>
                    <CardContent>
                    <Typography gutterBottom variant="h5">
                        {"Spring Boot"}
                    </Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                    <Typography gutterBottom variant="h5">
                        {"Spring Security"}
                    </Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                    <Typography gutterBottom variant="h5">
                        {"Spring Data JPA"}
                    </Typography>
                    </CardContent>
                </Card>
            </Stack>
            <Stack
                spacing={{ xs: 1, sm: 2, md: 4 }}
                direction={{ sm: 'column', md: 'row' }}
                sx={{ margin: 1, justifyContent: "center", textAlign: "center" }}
            >
                <Card>
                    <CardContent>
                    <Typography gutterBottom variant="h5">
                        {"JWT(JSON Web Token)"}
                    </Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                    <Typography gutterBottom variant="h5">
                        {"OAuth 2"}
                    </Typography>
                    </CardContent>
                </Card>
            </Stack>
            <Stack
                spacing={{ xs: 1, sm: 2, md: 4 }}
                direction={{ sm: 'column', md: 'row' }}
                sx={{ margin: 1, justifyContent: "center", textAlign: "center" }}
            >
                <Card>
                    <CardContent>
                    <Typography gutterBottom variant="h5">
                        {"RESTful API"}
                    </Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                    <Typography gutterBottom variant="h5">
                        {"Layered System"}
                    </Typography>
                    </CardContent>
                </Card>
            </Stack>
        </Container>
    );
}

export default IntroTechBack;