import { AssignmentOutlined, ContactMailOutlined, EmailOutlined, PersonPinOutlined, SignpostOutlined } from "@mui/icons-material";
import { Alert, AlertTitle, Box, Button, Card, CardActions, CardContent, CardHeader, Chip, Paper, Stack, Step, StepContent, StepLabel, Stepper, Tab, Tabs, Tooltip, Typography } from "@mui/material";
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
        description: "SI/SM 업무 환경에서 유연하지 못한 시스템을 경험하면서 느꼈던, 실행만 되는 로직이 아닌 효율적인 코드 작성의 중요성을 깨달았습니다. 알고리즘 코드부터 사용했던 기술과 앞으로 사용할 기술의 이론적인 내용까지 꾸준히 공부하고 있습니다.",
    },
    {
        label: "목표",
        title: "안주하지 않고 발전하고 싶은 개발자",
        description: "학부 시절 C, C++, Java 언어들을 경험해 보면서, Java에 흥미를 느꼈습니다. Java로 할 수 있는 것을 찾으면서 웹 개발에 대한 내용을 찾았고 조사했습니다. 그래서, Spring Legacy Project로 Web 개발을 시작했고, 실무에서 작지만 역할을 맡아 구현했습니다. 하지만, 개발자는 새로운 기술 습득이 중요하다고 생각합니다. 최근에는 Spring Boot, JPA를 사용하여 웹 개발환경도 경험했고, 그것을 바탕으로 Spring Security, OAuth, JWT를 주입해서 포트폴리오 개발, AWS에 배포하여 도메인 발급 및 https를 적용했습니다.",
    },
    {
        label: "경험",
        title: "Java 기반 Spring Framework 웹 개발",
        description: "대형 시스템에 대한 경험은 부족하지만, 개발자의 기본기라고 생각하는 분석, 설계, 구현 경험은 다양합니다.",
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
        { key: 7, label: 'OAuth' },
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
            <Box
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider'
                }}
            >
                <Tabs value={tabIndex} onChange={handleTabChange}>
                    <Tab icon={<PersonPinOutlined />} label="me" {...a11yProps(0)} onClick={handleStepReset} />
                    <Tab icon={<ContactMailOutlined />} label="contact" {...a11yProps(1)} />
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
                                <Alert
                                    severity="info"
                                >
                                    <AlertTitle><strong>{step.title}</strong></AlertTitle>
                                    {step.description}
                                    {index === steps.length - 1 && (
                                        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                                            {chipData.map((data) => {
                                                return (
                                                    <Chip key={data.key} label={data.label} variant="outlined" />
                                                );
                                            })}
                                        </Stack>
                                    )}
                                </Alert>
                                <Box sx={{ my: 2 }}>
                                    <Button
                                        variant="contained"
                                        disabled={index === 0}
                                        onClick={handleBackStep}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {"back"}
                                    </Button>
                                    <Button
                                        variant="contained"
                                        onClick={handleNextStep}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1 ? 'finish' : 'next'}
                                    </Button>
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
                <Card sx={{ width: "auto" }}>
                    <CardHeader
                        title="Information"
                        subheader="자세한 내용이 궁금하시면, '상세 이력' 또는 '블로그'를 살펴주시길 바랍니다. 😊"
                    />
                    <CardContent>
                        <Tooltip title="E-Mail" placement="bottom">
                            <Chip icon={<EmailOutlined />} label="kdevcore@gmail.com" variant="outlined" />
                        </Tooltip>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="text"
                            href="https://kdevcore.notion.site/About-me-c77a689de8114d4b91af9d35f7c59230"
                            color="inherit"
                            size="large"
                            target="_blank"
                            startIcon={<SignpostOutlined />}
                        >
                            {"상세 이력"}
                        </Button>
                        <Button
                            variant="text"
                            href="https://kdevcore.notion.site/252f99974c2a4a87b13f0ce53a70ca68"
                            color="inherit"
                            size="large"
                            target="_blank"
                            startIcon={<AssignmentOutlined />}
                        >
                            {"블로그"}
                        </Button>
                    </CardActions>
                </Card>
            </TabPanel>
        </Paper>
    );
}