import { Card, CardContent, Container, Stack, Typography } from "@mui/material";

function IntroTechServer () {
    return (
        <Container
            component="section"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#aa4444",
            }}
        >
            <Typography variant="h4" component="h4">
                {"Server-Side"}
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
                    AWS EC2
                </Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                <Typography gutterBottom variant="h5">
                    AWS Elastic Beanstalk
                </Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                <Typography gutterBottom variant="h5">
                    AWS Route 53
                </Typography>
                </CardContent>
            </Card>
            </Stack>
        </Container>
    );
}

export default IntroTechServer;