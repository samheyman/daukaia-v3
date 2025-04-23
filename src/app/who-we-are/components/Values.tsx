import { newsreader } from "../../fonts";
import Image from "next/image";
import Integrity from "../../../../public/images/values/Integrity.png";
import Equity from "../../../../public/images/values/Equity.png";
import Sustainability from "../../../../public/images/values/Sustainability.png";
import Empowerment from "../../../../public/images/values/Empowerment.png";
import Community from "../../../../public/images/values/Community.png";
import Innovation from "../../../../public/images/values/Innovation.png";

export default function Values() {
  return (
    <section className=" mx-auto w-[calc(100%-0.75rem)] lg:w-[min(1200px,(100%-4rem))] ">
      <h2 className={`${newsreader.className} text-4xl mt-4 mb-6 font-bold`}>
        Values
      </h2>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col items-center mb-12 justify-start text-center mx-8">
          <span className="font-bold uppercase text-[--clr-accent-500] text-2xl">
            Empowerment
          </span>
          <Image
            src={Empowerment}
            alt=""
            className=""
            style={{ height: "220px", objectFit: "contain" }}
          />
          <p>
            Our aim is to empower children and youth to take control of their
            lives, pursue their dreams, and spark positive change in their
            communities.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center mb-12 justify-start text-center mx-4">
          <span className="font-bold uppercase text-[--clr-accent-500] text-2xl">
            Community
          </span>
          <Image
            src={Community}
            alt=""
            className=""
            style={{ height: "220px", objectFit: "contain" }}
          />
          <p>
            We seek to foster a sense of belonging and interconnectedness within
            the community we serve, promoting collaboration and collective
            action.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center mb-12 justify-start text-center mx-4">
          <span className="font-bold uppercase text-[--clr-accent-500] text-2xl">
            Innovation
          </span>
          <Image
            src={Innovation}
            alt=""
            className=""
            style={{ height: "220px", objectFit: "contain" }}
          />
          <p>
            We embrace creativity, innovation and adaptability to address
            complex challenges and find effective solutions that positively
            impact children&apos;s lives.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col items-center mb-12 justify-start text-center mx-4">
          <span className="font-bold uppercase text-[--clr-accent-500] text-2xl">
            Sustainability
          </span>
          <Image
            src={Sustainability}
            alt=""
            className=""
            style={{ height: "220px", objectFit: "contain" }}
          />
          <p>
            We are committed to sustainable practices and initiatives that
            promote long-term well-being for individuals, communities, and the
            environment.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center mb-12 justify-start text-center mx-4">
          <span className="font-bold uppercase text-[--clr-accent-500] text-2xl">
            Equity
          </span>
          <Image
            src={Equity}
            alt=""
            className=""
            style={{ height: "220px", objectFit: "contain" }}
          />
          <p>
            We advocate for equal access to opportunities, resources, and
            support for all children, regardless of their background or
            circumstances.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center mb-12 justify-start text-center mx-4">
          <span className="font-bold uppercase text-[--clr-accent-500] text-2xl">
            Integrity
          </span>
          <Image
            src={Integrity}
            alt=""
            className=""
            style={{ height: "220px", objectFit: "contain" }}
          />
          <p>
            We strive to uphold honesty, transparency and ethical principles in
            all aspects of our work, ensuring accountability and trustworthiness
            in everything we do.
          </p>
        </div>
      </div>
    </section>
  );
}
