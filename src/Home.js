import { Divider } from "@mui/material";
import { Fragment } from "react";
import IntroHero from "./pages/intro/Hero";
import IntroTechBack from "./pages/intro/TechBack";
import IntroTechFront from "./pages/intro/TechFront";
import IntroTechPlatform from "./pages/intro/TechPlatform";
import IntroDesign from "./pages/intro/Design";

function Home() {
  return (
    <Fragment>
      <IntroHero />
      <Divider />
      <IntroTechBack />
      <Divider />
      <IntroTechFront />
      <Divider />
      <IntroTechPlatform />
      <Divider />
      <IntroDesign />
      <Divider />
    </Fragment>
  );
}

export default Home;
