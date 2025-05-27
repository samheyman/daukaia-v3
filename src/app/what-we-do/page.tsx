import DaukaiaMeaning from "../components/DaukaiaMeaning";
import Stats from "../components/Stats";
import { OurModel } from "./components/OurModel";
import { OurWork } from "./components/OurWork";
import { WhyOcotal } from "./components/WhyOcotal";

export default function Home() {
  return (
    <>
      <OurWork />
      <Stats />

      <WhyOcotal />
      <OurModel />
    </>
  );
}
