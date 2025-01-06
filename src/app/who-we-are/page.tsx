import WhoWeAre from "../components/WhoWeAre";
import Betty from "../components/Betty";
import CasaPueblito from "../components/CasaPueblito";
import JoinUs from "../components/JoinUs";

import Image from "next/image";
import kidsInPlayground from "../../../public/images/kids-in-playground.jpg";

export default function Home() {
  return (
    <>
      <Image
        src={kidsInPlayground}
        alt="Kids playing outside in the playground"
      />
      <WhoWeAre />
      <Betty />
      <CasaPueblito />
      <JoinUs />
    </>
  );
}
