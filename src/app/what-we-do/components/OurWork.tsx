import { newsreader } from "../../fonts";
import Image from "next/image";
import GirlWorking from "../../../../public/images/girl-working.jpg";

export const OurWork = () => {
  return (
    <section className=" mx-auto w-[calc(100%-0.75rem)] lg:w-[min(1200px,(100%-4rem))] ">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <h1 className={`${newsreader.className} text-4xl mt-4 mb-6`}>
            Our work
          </h1>
          <p>
            We provide daily, direct support to children in vulnerable
            situations, complementing their formal education in collaboration
            with their schools and families.
          </p>
          <p>
            We are located in a pre-school in the Noel Wheelock neighborhood in
            Ocotal, where we have our own classroom, kitchen, playground and
            vegetable garden.
          </p>
          <p>
            Children at Daukaia receive a daily meal, educational and emotional
            support, and the opportunity to engage in activities and play.
          </p>
        </div>
        <div className="w-96 ml-8 mt-1">
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
