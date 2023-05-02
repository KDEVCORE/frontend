import { Box, Button, Card, CardContent, CardHeader, Chip, Divider, Link, Paper, Stack, Step, StepContent, StepLabel, Stepper, Tab, Tabs, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Paper
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component="span">{children}</Typography>
                </Box>
            )}
        </Paper>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}

const steps = [
    {
        label: "가치관",
        title: "처음부터 완벽할 수 없으므로, 리뷰(Review)와 리팩토링(Refactoring)으로 좋은 개발자가 된다.",
        description: "SI/SM 업무 환경에서 유연하지 못한 시스템을 경험하면서 느꼈던 실행만 되는 로직이 아닌, 효율적인 코드 작성의 중요성을 깨달았습니다.",
    },
    {
        label: "목표",
        title: "성장하고 싶은 개발자",
        description: "Spring Legacy Project로 Web 개발을 시작했지만, 개발자는 새로운 기술 습득이 중요하다고 생각합니다. 최근에는 Spring Boot, JPA를 사용하여 웹 개발환경도 경험했고, 그것을 바탕으로 Spring Security, JWT, OAuth 2를 주입해서 포트폴리오 개발, AWS에 배포하여 도메인 발급 및 https를 적용했습니다.",
    },
    {
        label: "기술 경험",
        title: "Java 기반 Spring Framework 웹 개발",
        description: "분석, 설계, 배포에 대한 경험은 다소 부족하지만, 개발자의 기본기라고 생각하는 구현 경험은 다양합니다.",
    },
];


export default function About() {
    const [tabIndex, setTabIndex] = useState(0);
    const [activeStep, setActiveStep] = useState(0);
    const [chipData] = useState([
        { key: 0, label: 'Java' },
        { key: 1, label: 'Spring Framework' },
        { key: 2, label: 'Spring Boot' },
        { key: 3, label: 'Spring Security' },
        { key: 4, label: 'REST API' },
        { key: 5, label: 'JPA' },
        { key: 6, label: 'JWT' },
        { key: 7, label: 'OAuth 2' },
        { key: 8, label: 'JavaScript' },
        { key: 9, label: 'jQuery' },
        { key: 10, label: 'React' },
        { key: 11, label: 'GitHub' },
        { key: 12, label: 'AWS' },
    ]);

    const handleTabChange = (event, swapIndex) => {
        setTabIndex(swapIndex);
    };

    const handleNextStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBackStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepReset = () => {
        setActiveStep(0);
    };

    return (
        <Paper>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={tabIndex} onChange={handleTabChange}>
                    <Tab label="me" onClick={handleStepReset} {...a11yProps(0)} />
                    <Tab label="contact" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={tabIndex} index={0}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={index}>
                            <StepLabel>
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                <Card>
                                    <CardHeader title={step.title} />
                                    <CardContent>
                                        {step.description}
                                    </CardContent>
                                    {index === steps.length - 1 && (
                                        <CardContent>
                                            <Stack direction="row" spacing={1}>
                                                {chipData.map((data) => {
                                                    return (
                                                        <Chip key={data.key} label={data.label} variant="outlined" />
                                                    );
                                                })}
                                            </Stack>
                                        </CardContent>
                                    )}
                                </Card>
                                <Box sx={{ mb: 2 }}>
                                    <div>
                                        <Button
                                            variant="contained"
                                            onClick={handleNextStep}
                                            sx={{ mt: 1, mr: 1 }}
                                            >
                                            {index === steps.length - 1 ? 'finish' : 'next'}
                                        </Button>
                                        <Button
                                            variant="contained"
                                            disabled={index === 0}
                                            onClick={handleBackStep}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            {"back"}
                                        </Button>
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                        <Box>
                            <Typography component="span">{"감사합니다.😄"}</Typography>
                        </Box>
                        <Button variant="outlined" onClick={handleStepReset} sx={{ mt: 1, mr: 1 }}>
                            {"처음부터 다시 보기"}
                        </Button>
                    </Paper>
                )}
            </TabPanel>
            <TabPanel value={tabIndex} index={1}>
                <Stack
                    divider={<Divider orientation="vertical" flexItem />}
                    direction={{ sm: "column", md: "row" }}
                    spacing={{ sm: 1, md: 2 }}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Card sx={{ width: "auto" }}>
                        <CardHeader
                            title="Information"
                            subheader="과도한 개인정보 유출을 막기 위해, Email 주소만을 알려 드립니다.🤐"
                        />
                        <CardContent>
                            <Typography component="span">{"E-mail: kdevcore@gmail.com"}</Typography>
                        </CardContent>
                        <CardContent>
                            <Typography component="span">
                                {"상세 이력: "}
                                <Link
                                    href="https://kdevcore.notion.site/About-me-c77a689de8114d4b91af9d35f7c59230"
                                    underline="hover"
                                    target="_blank"
                                >
                                    {"보러 가기"}
                                </Link>
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader
                            title="Blog"
                            subheader="아직 준비중입니다.😓 그 대신에 GitHub 주소를 첨부합니다."
                        />
                        <CardContent>
                            <Typography component="span">
                                {"GitHub: "}
                                <Link
                                    href="https://github.com/KDEVCORE"
                                    underline="hover"
                                    target="_blank"
                                >
                                    {"https://github.com/KDEVCORE"}
                                </Link>
                            </Typography>
                        </CardContent>
                    </Card>
                </Stack>
            </TabPanel>
        </Paper>
    );
}