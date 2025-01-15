import Link from "next/link";
import { newseader } from "../fonts";

export default function WhatWeDo() {
  return (
    <section className="flex wrapper flex-col my-12">
      <div className="flex lg:flex-row what-we-do flex-col-reverse">
        <div className="mx-0 w-1/2">
          <h1 className={`${newseader.className} text-6xl my-4`}>What we do</h1>
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
          <div className="flex my-6 flex-row justify-start items-center">
            <Link
              className="max-w-fit mx-3 px-8 py-1 rounded-full bg-yellow-300 px-3 py-3 text-3 font-semibold whitespace-nowrap text-neutral-500"
              href="/what-we-do"
            >
              Learn more
            </Link>
            <Link
              className="max-w-fit mx-3 px-8 py-1 rounded-full bg-yellow-300 px-3 py-3 text-3 font-semibold whitespace-nowrap text-neutral-500"
              href="/what-we-do"
            >
              Get involved
            </Link>
          </div>
        </div>
        <img
          src="./images/flower-in-hands.png"
          alt="Children playing"
          className=" w-1/2 mt-4 ml-20 w-96 "
        />
      </div>
    </section>
  );
}
