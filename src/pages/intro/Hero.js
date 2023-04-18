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
                sx={{
                    textAlign: "center",
                }}
            >
                <Typography variant="h2">
                    {"Welcome!"}
                </Typography>
            </Paper>
        </Container>
    );
}

export default IntroHero;