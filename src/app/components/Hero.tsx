import { newsreader } from "../fonts";
// import Button from "./Button";

export default function Hero() {
  return (
    <section className="hero mx-auto bg-yellow-500 lg:h-max flex flex-col items-center lg:flex-row w-full lg:w-[min(1600px,(100%))]">
      <div className="flex-1 h-full relative overflow-hidden">
        <div className="gradient-right h-full hidden lg:block"></div>
        <img
          src="./images/girl-heart-2.jpg"
          alt="Girl making a heart with her hands"
          className="w-full object-cover"
        />
      </div>
      <div className="flex-1 h-full  bg-yellow-500 pt-12 pb-16 lg:py-8 flex flex-col justify-center items-center ">
        <div className="flex flex-col items-center justify-center h-full">
          <p
            className={`${newsreader.className} text-3xl lg:text-5xl text-center tracking-[-2px] lg:leading-[1.2em]`}
          >
            With your support
            {/* <span className="font-bold italic">safe space</span> */}
          </p>
          <p
            className={`${newsreader.className} text-3xl lg:text-5xl text-center tracking-[-2px] lg:leading-[1.2em]`}
          >
            we help make
            {/* <span className="font-bold italic">safe space</span> */}
          </p>
          <p
            className={`${newsreader.className} text-3xl lg:text-5xl text-center tracking-[-2px] lg:leading-[1.2em]`}
          >
            <span className="font-bold italic">dreams come true</span>
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
