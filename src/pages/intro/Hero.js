import { PlayArrow } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";
import { getAuthStatus } from "../../service/ApiService";

export default function IntroHero() {
    return (
        <Container
            component="section"
            sx={{
                textAlign: "center",
                alignItems: "center",
                padding: 4,
                backgroundColor: "black",
            }}
            maxWidth="xl"
        >
            <Typography
                variant="button"
                sx={{
                    fontSize: { sm: 32, md: 64 },
                    fontFamily: { color: "white", textDecorationLine: "underline" }
                }}
            >
                {"welcome"}
            </Typography>
            <Typography
                variant="subtitle1"
                sx={{
                    fontFamily: { color: "white"},
                }}
            >
                {"이 웹은 포트폴리오용 데모 프로젝트입니다."}
            </Typography>
            <Typography
                variant="subtitle1"
                sx={{
                    fontFamily: { color: "white"},
                }}
            >
                {"매우 간단한 구조를 가지고 있고 축약된 기능만 구현 되었습니다."}
            </Typography>
            <Button
                variant="contained"
                href={getAuthStatus() ? "/todo" : "/signin"}
                color="error"
                startIcon={<PlayArrow />}
            >
                {"시작하기"}
            </Button>
        </Container>
    );
}