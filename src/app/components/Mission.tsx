import { newsreader } from "../fonts";

export default function Mission() {
  return (
    <section className="flex mx-auto w-[calc(100%-0.75rem)] lg:w-[min(1200px,(100%-4rem))] who-we-are flex-col lg:flex-col items-end">
      {/* <img
        className="w-40 mr-20"
        src="./images/three-flowers.png"
        alt="Children playing"
      /> */}

      <div>
        <h1 className={`${newsreader.className} text-6xl mt-4 mb-6`}>
          Mission
        </h1>
        <p className="text-base my-4">
          We are committed to creating conditions in which the children of
          Ocotal can thrive, today and in generations to come.
        </p>
        <p className="text-base my-4">
          We believe that every child deserves a healthy and safe, supportive
          environment where their individuality is encouraged to flourish and
          their rights respected.
        </p>
        <p className="text-base my-4">
          We aspire to build a community where all children have a real chance
          of becoming independent adults who can pursue a career, make
          empowered, autonomous life choices and become change agents that
          contribute to the greater good.
        </p>
      </div>
    </section>
  );
}
