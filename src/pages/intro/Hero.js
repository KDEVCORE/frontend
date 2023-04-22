import { Button, Container, Divider, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";

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
            <Button variant="text" disabled>
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
            </Button>
            <Box
                sx={{
                    my: 4,
                    textAlign: "center",
                    fontFamily: {
                        color: "#ffffff",
                    }
                }}
            >
                <Divider />
                <Typography variant="subtitle1">
                    {"이 웹사이트는 데모 프로젝트용입니다."}
                    {/* {"This website is for a demo project."} */}
                </Typography>
                <Typography variant="subtitle1">
                    {"매우 간단한 구조를 가지고 있으며 프런트 엔드의 기능도 축약되어 있습니다."}
                    {/* {"It has a very simple structure, and the function of the front end is also abbreviated."} */}
                </Typography>
                <Typography variant="subtitle1">
                    {"이 웹이 어떻게 작동하는지 궁금하시면 이 페이지를 아래로 스크롤하십시오."}
                    {/* {"If you're curious about how this web works, please scroll down this page."} */}
                </Typography>
                <Typography variant="subtitle1">
                    {"또는 아래의 '시작하기' 버튼을 클릭하여 주요 콘텐츠를 경험해 보세요."}
                    {/* {"Or click the 'GET STARTED' button below to experience main content."} */}
                </Typography>
            </Box>
            <Link
                href="/todo"
                underline="none"
                variant="button"
            >
                <Button
                    variant="contained"
                    color="info"
                    sx={{ mb: 8 }}
                >
                    {"get started"}
                </Button>
            </Link>
        </Container>
    );
}