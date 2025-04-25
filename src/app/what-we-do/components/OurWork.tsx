import { newsreader } from "../../fonts";
import Image from "next/image";
import GirlWorking from "../../../../public/images/girl-working.jpg";

export const OurWork = () => {
  return (
    <section className=" mx-auto w-full lg:w-[min(1200px,(100%-4rem))] my-12 px-4 lg:px-0  ">
      <div className="flex flex-col">
        <h1 className={`${newsreader.className} text-6xl mt-4 mb-6`}>
          What we do
        </h1>
        <div className="flex-1">
          <h2 className={`${newsreader.className} text-4xl mt-4 mb-6`}>
            Our work
          </h2>
          <p className="text-lg md:text-base my-4">
            We provide daily, direct support to children in vulnerable
            situations, complementing their formal education in collaboration
            with their schools and families.
          </p>
          <p className="text-lg md:text-base my-4">
            We are located in a pre-school in the Noel Wheelock neighborhood in
            Ocotal, where we have our own classroom, kitchen, playground and
            vegetable garden.
          </p>
          <p className="text-lg md:text-base my-4">
            Children at Daukaia receive a daily meal, educational and emotional
            support, and the opportunity to engage in activities and play.
          </p>
        </div>
        <div className="w-96 lg:ml-8 mt-12 lg:mt-1">
          <Image
            src={GirlWorking}
            alt=""
            className=""
            style={{ width: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};
