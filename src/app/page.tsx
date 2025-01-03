import { Butcherman } from "next/font/google";
import Image from "next/image";
import Button from "./components/Button";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import WhoWeAre from "./components/WhoWeAre";
import DaukaiaMeaning from "./components/DaukaiaMeaning";
import Betty from "./components/Betty";
import CasaPueblito from "./components/CasaPueblito";
import JoinUs from "./components/JoinUs";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <DaukaiaMeaning />
      <Betty />
      <CasaPueblito />
      <JoinUs />
    </>
  );
}
