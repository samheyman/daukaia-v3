import Link from "next/link";
import { newseader } from "../fonts";

export default function WhoWeAre() {
  return (
    <section className=" wrapper who-we-are">
      <img
        className="mr-20"
        src="./images/three-flowers.png"
        alt="Children playing"
      />
      <div>
        <h1 className={`text-6xl ${newseader.className}`}>Who we are</h1>
        <p>
          We are a passionate collective of local and global changemakers
          committed to giving the children of Ocotal the opportunity of a
          fulfilling life. Most of all, we&apos;re normal people wanting to make
          a difference.
        </p>
        <p>
          We believe in the transformative power of community, and foster
          long-term impact through a holistic, grassroots approach that combines
          education, empowerment, and sustainable practices.
        </p>
        <div>
          <Link
            className="block max-w-fit my-4 px-8 py-1 rounded-full bg-yellow-300 px-3 py-3 text-3 font-semibold whitespace-nowrap text-neutral-500"
            href="/who-we-are"
          >
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
}
