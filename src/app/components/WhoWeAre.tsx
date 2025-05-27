import Link from "next/link";
import { newsreader } from "../fonts";

export default function WhoWeAre() {
  return (
    <section className="flex mx-auto w-full lg:w-[min(1200px,(100%-4rem))] who-we-are flex-col lg:flex-row items-end my-12 px-4 lg:px-0">
      <img
        className="w-40 lg:mr-20 lg:w-96"
        src="./images/three-flowers.png"
        alt="Children playing"
      />
      <div>
        <h1 className={`${newsreader.className} text-6xl mt-4 mb-6`}>
          Who we are
        </h1>
        <p className="text-lg md:text-base my-4">
          We are a small volunteer-run organization led by a school teacher in
          Norway, and with a small, passionate team on the ground.
        </p>

        <p className="text-lg md:text-base my-4">
          We believe in the transformative power of community, and foster
          long-term impact through a holistic, grassroots approach that combines
          education, empowerment, and sustainable practices.
        </p>
        <p className="text-lg md:text-base my-4">
          And, of course, we’re able to do this thanks to the kind donations
          from people who choose to care and lend a helping hand. With your help
          we can truly make dreams come true.
        </p>
        <div className="flex my-8 justify-start items-center">
          <Link
            className="block max-w-fit mr-8 px-8 py-1 rounded-full bg-yellow-300 px-3 py-3 text-3 font-semibold whitespace-nowrap text-neutral-500"
            href="/who-we-are"
          >
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
}
