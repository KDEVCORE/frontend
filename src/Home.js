import { Fragment } from "react";
import IntroHero from "./pages/intro/Hero";
import IntroTechBack from "./pages/intro/TechBack";
import IntroTechFront from "./pages/intro/TechFront";
import IntroTechServer from "./pages/intro/TechServer";

function Home() {
  return (
    <Fragment>
      <IntroHero />
      <IntroTechBack />
      <IntroTechFront />
      <IntroTechServer />
    </Fragment>
  );
}

export default Home;
