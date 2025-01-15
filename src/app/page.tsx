import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import WhoWeAre from "./components/WhoWeAre";
import DaukaiaMeaning from "./components/DaukaiaMeaning";
import Betty from "./components/Betty";
import CasaPueblito from "./components/CasaPueblito";
import JoinUs from "./components/JoinUs";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Stats />
      <WhoWeAre />
      <DaukaiaMeaning />
      <Betty />
      <CasaPueblito />
      <JoinUs />
    </>
  );
}
