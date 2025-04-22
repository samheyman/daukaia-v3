// import WhoWeAre from "../components/WhoWeAre";
// import Betty from "../components/Betty";
// import CasaPueblito from "../components/CasaPueblito";
// import JoinUs from "../components/JoinUs";

import Image from "next/image";
import kidsInPlayground from "../../../public/images/kids-in-playground-2.jpg";
import Mission from "../components/Mission";
import Vision from "../components/Vision";
import Team from "../components/Team";
// import Values from "../components/Values";
// import Impact from "../components/Impact";

export default function Home() {
  return (
    <>
      <Image
        src={kidsInPlayground}
        alt="Kids playing outside in the playground"
        className="mx-auto"
        style={{ height: "400px", width: "1800px", objectFit: "contain" }}
      />
      {/* <WhoWeAre /> */}
      <Mission />
      <Vision />
      <Team />
      {/* <Values /> */}
      {/* <Impact /> */}
      {/* <Betty /> */}
      {/* <CasaPueblito /> */}
      {/* <JoinUs /> */}
    </>
  );
}
