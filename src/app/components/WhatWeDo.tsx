import Link from "next/link";
import { newsreader } from "../fonts";

export default function WhatWeDo() {
  return (
    <section className="mx-auto flex w-[calc(100%-0.75rem)] lg:w-[min(1200px,(100%-4rem))] flex-col my-12">
      <div className="flex lg:flex-row what-we-do flex-col-reverse items-end">
        <div className="mx-0 lg:w-1/2">
          <h1 className={`${newsreader.className} text-6xl mt-4 mb-6`}>
            What we do
          </h1>
          <p className="text-base my-4">
            We support children in Ocotal, Nicaragua, through education, health,
            personal development and community support so they can overcome
            challenges and thrive.
          </p>
          <p className="text-base my-4">
            We offer a safe and nurturing space for children and their families,
            where they can access emotional support, build strong relationships,
            and engage in community activities that promote well-being and
            collaboration.
          </p>
          <p className="text-base my-4">
            We encourage children to explore their creativity, develop their
            talents, and find sustainable ways to contribute to their community
            and the environment, transforming their world from the ground up.
          </p>
          <div className="flex my-8 flex-row justify-start items-center">
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
          className="w-40 mt-4 ml-20 lg:w-96 "
        />
      </div>
    </section>
  );
}
