import DaukaiaMeaning from "../components/DaukaiaMeaning";
import { OurModel } from "./components/OurModel";
import { OurWork } from "./components/OurWork";
import { WhyOcotal } from "./components/WhyOcotal";

export default function Home() {
  return (
    <>
      <OurWork />
      <WhyOcotal />
      <OurModel />
    </>
  );
}
