import { newsreader } from "../../fonts";
import Image from "next/image";
import Ocotal from "../../../../public/images/ocotal.jpg";

export const WhyOcotal = () => {
  return (
    <section className=" mx-auto w-full lg:w-[min(1200px,(100%-4rem))] my-12 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row w-full justify-between">
        <div className="w-96 lg:mr-8 mt-8">
          <Image
            src={Ocotal}
            alt="Photo of Ocotal"
            className=""
            style={{ width: "100%", objectFit: "contain" }}
          />
        </div>
        <div className="flex-1 mt-12 lg:mt-0">
          <h1 className={`${newsreader.className} text-4xl mt-4 mb-6`}>
            Why Ocotal
          </h1>
          <p className="text-lg md:text-base my-4">
            People ask us: “Why Ocotal?”. Fate brought us here in the summer of
            2012. Meeting the children, witnessing their needs, and realizing
            that change could only come with decisive action made our mission
            clear. Years later, we remain committed to our promise.
          </p>
          <p className="text-lg md:text-base my-4">
            There is something special about Ocotal—a community where life could
            be wonderful but is often hindered by challenges like poverty, food
            and water insecurity, violence, poor health, lack of family support,
            and limited access to opportunities. Despite these hurdles, we see
            immense potential and resilience.
          </p>
          <p className="text-lg md:text-base my-4">
            We don’t shy away from a challenge, and we’re working hard to
            implement replicable and scalable solutions that can inspire others
            to change their little corner of the world too. So really, Ocotal is
            our little laboratory of hope, a testament to what’s possible with
            empathy and action.
          </p>
        </div>
      </div>
      <p className="my-12 px-8 py-12  bg-[--clr-accent-100] rounded-xl">
        Ocotal is a municipality of around 50.000 inhabitants in the north of
        Nicaragua, nested between mountains and pine trees, and is the capital
        of the department of Nueva Segovia.
      </p>
    </section>
  );
};
