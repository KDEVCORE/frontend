import { Box, Container, Link, Typography } from "@mui/material";


const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[800],
            }}
        >
            <Container maxWidth="sm">
                <Typography variant="subtitle1" color="InfoText" align="center">
                    {"Copyright " + new Date().getFullYear() + " "}
                    <Link href="/">
                        {"KDEVCORE"}
                    </Link>
                    {", Demo Web Application."}
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;