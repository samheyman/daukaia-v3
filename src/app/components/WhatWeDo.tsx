import Link from "next/link";
import { newsreader } from "../fonts";

export default function WhatWeDo() {
  return (
    <section className="mx-auto flex w-full lg:w-[min(1200px,(100%-4rem))] flex-col my-12 px-4 lg:px-0">
      <div className="flex lg:flex-row what-we-do flex-col-reverse items-center">
        <div className="mx-0 lg:w-1/2">
          <h1 className={`${newsreader.className} text-6xl mt-4 mb-6`}>
            What we do
          </h1>

          <p className="text-lg md:text-base my-4">
            Nicaragua is one of the poorest countries in South America, and the
            children we work with grow up in a reality marked by instability,
            poverty, and a lack of opportunity.
          </p>
          <p className="text-lg md:text-base my-4">
            Our goal is to help children in the town of Ocotal overcome these
            challenges and build a better future for themselves and their
            communities by providing them a safe space, caring adults,
            education, emotional support, health and personal development -
            knowledge that can change lives.
          </p>
          {/* <p className="text-lg md:text-base my-4">
            Our goal is to ensure that children and young people in Ocotal,
            Nicaragua, gain safety, knowledge, and opportunities to build a
            better future for themselves and their communities. We do this by
            supporting personal and social development through play, learning,
            and a sense of belonging.
          </p> */}
          <p className="text-lg md:text-base my-4">
            We support personal and social development through play, learning,
            and a sense of belonging, and we encourage children to explore their
            creativity, develop their talents, and find sustainable ways to
            contribute to their community and the environment, build strong
            relationships and transform their world from the ground up.
          </p>

          <div className="flex my-8 flex-row justify-center lg:justify-start items-center">
            <Link
              className="max-w-fit mr-8 px-8 py-1 rounded-full bg-yellow-300 px-3 py-3 text-3 font-semibold whitespace-nowrap text-neutral-500"
              href="/what-we-do"
            >
              Learn more
            </Link>
            <Link
              className="max-w-fit px-8 py-1 rounded-full bg-yellow-300 px-3 py-3 text-3 font-semibold whitespace-nowrap text-neutral-500"
              href="/what-we-do"
            >
              Get involved
            </Link>
          </div>
        </div>
        <img
          src="./images/flower-in-hands.png"
          alt="Children playing"
          className="w-60 h-auto mt-0 ml-20 lg:w-96 "
        />
      </div>
    </section>
  );
}
