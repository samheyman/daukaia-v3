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
            Daukaia helps children and families in Ocotal build a safer, more
            sustainable future. A future grounded in learning, creativity, care,
            and community.
          </p>
          <p className="text-lg md:text-base my-4">
            We provide a safe space where children can grow, supported by
            trusted adults and provided with opportunities to learn, play, and
            thrive. Through education, emotional support, personal development,
            and environmental awareness, we help young people discover their
            strengths and shape their own futures.
          </p>

          <p className="text-lg md:text-base my-4">
            We believe change begins with belonging. That’s why we nurture
            strong relationships, celebrate local culture and creativity, and
            work alongside families and schools to plant the seeds of lasting
            transformation.
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
