import { Container, Paper, Typography } from "@mui/material";

const HeroBackgroundImage = "/static/images/background/Black_and_White_MOKOKO.jpg";
function IntroHero () {
    return (
        <Container
            component="section"
            sx={{
                display: "flex",
                flexDirection: "column",
                backgroundImage: `url(${HeroBackgroundImage})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Paper
                component="h3"
                sx={{
                    textAlign: "center",
                }}
            >
                <Typography variant="h3">
                    {"Welcome!"}
                </Typography>
            </Paper>
        </Container>
    );
}

export default IntroHero;