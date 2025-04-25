import { newsreader } from "../fonts";
// import Button from "./Button";

export default function Hero() {
  return (
    <section className="hero mx-auto lg:h-[500px] flex flex-col lg:flex-row w-[100%] lg:w-[min(1600px,(100%))]">
      <div className="image-container h-full lg:w-1/2 overflow-hidden">
        <div className="gradient-right h-full"></div>
        <img
          src="./images/girl-heart-2.jpg"
          alt="Girl making a heart with her hands"
        />
      </div>
      <div className=" bg-yellow-500 pt-12 pb-16 lg:py-8 flex flex-col justify-center items-center w-full h-full lg:w-1/2">
        <div className="flex flex-col items-center justify-center">
          <p className={`${newsreader.className}`}>
            Providing a <span>safe space</span>
          </p>
          <p className={`${newsreader.className}`}>
            for <span>brighter futures</span>
          </p>
          <a
            className="mt-8 text-xl lg:text-3xl font-bold bg-white uppercase rounded-full border border-solid transition-colors flex items-center justify-center text-[--clr-accent-500] py-2 px-4 sm:px-9 hover:bg-clr-accent-500 w-fit"
            href="/donate"
          >
            Donate
          </a>
        </div>
      </div>
    </section>
  );
}
