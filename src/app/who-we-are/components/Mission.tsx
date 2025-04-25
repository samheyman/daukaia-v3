import { newsreader } from "../../fonts";
import Image from "next/image";
import kidsInPlayground from "../../../../public/images/kids-in-playground.jpg";

export default function Mission() {
  return (
    <section className=" mx-auto w-full lg:w-[min(1200px,(100%-4rem))] px-4 lg:px-0 flex flex-col lg:flex-row items-end my-12">
      {/* <img
        className="w-40 mr-20"
        src="./images/three-flowers.png"
        alt="Children playing"
      /> */}{" "}
      <h1 className={`${newsreader.className} text-6xl mt-4 mb-6`}>
        Who we are
      </h1>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <h2
            className={`${newsreader.className} text-4xl mt-4 mb-6 font-bold`}
          >
            Mission
          </h2>

          <p className="text-lg md:text-base my-4">
            We are committed to creating conditions in which the children of
            Ocotal can thrive, today and in generations to come.
          </p>
          <p className="text-lg md:text-base my-4">
            We believe that every child deserves a healthy and safe, supportive
            environment where their individuality is encouraged to flourish and
            their rights respected.
          </p>
          <p className="text-lg md:text-base my-4">
            We aspire to build a community where all children have a real chance
            of becoming independent adults who can pursue a career, make
            empowered, autonomous life choices and become change agents that
            contribute to the greater good.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src={kidsInPlayground}
            alt="Kids playing outside in the playground"
            className="h-96 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
