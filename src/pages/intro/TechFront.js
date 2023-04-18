import { Card, CardContent, Container, Stack, Typography } from "@mui/material";

function IntroTechFront () {
    return (
        <Container
            component="section"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#4444aa",
            }}
        >
            <Typography variant="h4" component="h4">
                {"Front-End"}
            </Typography>
            <Stack
                gap={2}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                direction={{ xs: 'column', sm: 'row' }}
                sx={{ margin: 1, justifyContent: "center", textAlign: "center" }}
            >
            <Card>
                <CardContent>
                <Typography gutterBottom variant="h5">
                    React
                </Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                <Typography gutterBottom variant="h5">
                    Javascript
                </Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                <Typography gutterBottom variant="h5">
                    MUI
                </Typography>
                </CardContent>
            </Card>
            </Stack>
        </Container>
    );
}

export default IntroTechFront;