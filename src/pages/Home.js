import { Divider } from "@mui/material";
import { Fragment } from "react";
import IntroHero from "./intro/Hero";
import IntroTechBack from "./intro/TechBack";
import IntroTechFront from "./intro/TechFront";
import IntroTechPlatform from "./intro/TechPlatform";
import IntroDesign from "./intro/Design";

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
