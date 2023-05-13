import { Button, Container, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getAuthStatus } from "../../service/ApiService";

const HeroBackgroundImage = "/static/images/background/Black_and_White_MOKOKO.jpg";

export default function IntroHero () {
    return (
        <Container
            component="section"
            sx={{
                height: "auto",
                display: "flex",
                flexDirection: "column",
                backgroundImage: `url(${HeroBackgroundImage})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
            }}
        >
            <Typography
                variant="button"
                sx={{
                    mt: 6,
                    fontSize: { sm: 32, md: 64 },
                    fontFamily: { color: "white", textDecorationLine: "underline" }
                }}
            >
                {"welcome"}
            </Typography>
            <Box
                sx={{
                    my: 4,
                    textAlign: "center",
                    fontFamily: {
                        color: "#ffffff",
                    }
                }}
            >
                <Typography variant="subtitle1">
                    {"매우 간단한 구조를 가지고 있고 축약된 기능만 구현 되었습니다."}
                </Typography>
                <Typography variant="subtitle1">
                    {"현재 페이지 아래로 이동하면, 어떻게 설계되었는지 알 수 있습니다."}
                </Typography>
                <Typography variant="subtitle1">
                    {"또는 '시작하기' 버튼을 클릭하여 데모 콘텐츠를 경험할 수 있습니다."}
                </Typography>
                <Typography variant="subtitle1">
                    {"(단, 인증이 필요합니다. 인증 후에 콘텐츠를 경험할 수 있습니다.)"}
                </Typography>
            </Box>
            <Link
                href={getAuthStatus() ? "/todo" : "/signin"}
                underline="none"
                variant="button"
            >
                <Button
                    variant="contained"
                    color="info"
                    sx={{ mb: 8 }}
                >
                    {"시작하기"}
                </Button>
            </Link>
        </Container>
    );
}