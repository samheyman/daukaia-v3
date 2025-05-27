import Link from "next/link";
import { newsreader } from "../../fonts";

export default function ContactUs() {
  return (
    <section className="mx-auto w-full lg:w-[min(1200px,100%)] flex flex-col items-center my-12 px-4 lg:px-0">
      <div className="flex items-start flex-col w-full my-12">
        <h1 className={`text-6xl mb-12 ${newsreader.className}`}>Contact us</h1>
        <p className="text-lg md:text-base my-4">
          Interested in learning more about our mission to empower children in
          Ocotal and how you can make a difference? Have questions, ideas, or
          simply want to connect? We're here and eager to hear from you!
        </p>

        <p className="text-lg md:text-base my-4">
          Send us an e-mail:{" "}
          <a
            className="font-bold text-blue-500"
            href="mailto:hello@daukaia.org"
          >
            hello@daukaia.org
          </a>
        </p>
      </div>
    </section>
  );
}
