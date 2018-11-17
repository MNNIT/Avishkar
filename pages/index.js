import Meta from "../components/Meta";
import AboutAvishkar from "../components/AboutAvishkar";

import Socials from "../components/Socials";

import ParticlesBanner from "../components/ParticlesBanner";
import { withRouter } from "next/router";

const Index = props => {
  return (
    <>
      <Meta />
      <ParticlesBanner />
      <AboutAvishkar />
      <Socials />
    </>
  );
};
export default withRouter(Index);
