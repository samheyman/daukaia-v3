import Link from "next/link";
import { newseader } from "../fonts";

export default function JoinUs() {
  return (
    <section className="wrapper join-us flex flex-col items-center">
      <div className="flex items-center flex-col">
        <h1 className={`text-6xl ${newseader.className}`}>Join us!</h1>
        <p>
          We need passionate, innovative individuals like you to join us as
          Ambassadors, volunteers or donors. Whether through a bake sale, a
          creative project, or spreading our mission, your unique talents and
          efforts can light up the path to a brighter future for a child. Maybe
          you want to involve your class, your company or a group of friends?
        </p>
        <p>
          Your support empowers children like Betty to build better lives for
          themselves and their families by providing the safety, skills, and
          mindset they need to follow their dreams and contribute positively to
          the world.
        </p>
        <p>
          Discover more about our work and how you can make a lasting impact on
          a child’s life:
        </p>
        <div className="flex my-12 flex-row justify-evenly items-center">
          <Link
            className="max-w-fit mx-3 px-8 py-1 rounded-full bg-yellow-300 px-3 py-3 text-3 font-semibold whitespace-nowrap text-neutral-500"
            href="/what-we-do"
          >
            Volunteer
          </Link>
          <Link
            className="max-w-fit mx-3 px-8 py-1 rounded-full bg-yellow-300 px-3 py-3 text-3 font-semibold whitespace-nowrap text-neutral-500"
            href="/what-we-do"
          >
            Become an ambassador
          </Link>
          <Link
            className="max-w-fit mx-3 px-8 py-1 rounded-full bg-yellow-300 px-3 py-3 text-3 font-semibold whitespace-nowrap text-neutral-500"
            href="/what-we-do"
          >
            Daukaia for schools
          </Link>
          <Link
            className="max-w-fit mx-3 px-8 py-1 rounded-full bg-yellow-300 px-3 py-3 text-3 font-semibold whitespace-nowrap text-neutral-500"
            href="/what-we-do"
          >
            Partnerships with companies
          </Link>
        </div>
      </div>
    </section>
  );
}
