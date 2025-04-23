import { newsreader } from "../../fonts";
import Image from "next/image";
import Group from "../../../../public/images/group.jpg";

export const OurModel = () => {
  return (
    <section className=" mx-auto w-[calc(100%-0.75rem)] lg:w-[min(1200px,(100%-4rem))] my-12">
      <h1 className={`${newsreader.className} text-4xl mt-4 mb-6`}>
        Our model
      </h1>
      <div className="flex flex-col">
        <h2 className={` text-xl mb-6 font-semibold`}>
          A NURTURING ENVIRONMENT
        </h2>
        <div className="flex flex-col mt-8 lg:flex-row  ">
          <div className="flex-1">
            <p>
              Feeling safe and loved is the foundation for healthy development.
              Fostering a culture of love and acceptance is our educators’
              super-power!
            </p>
          </div>
          <div className="flex-1 ml-8 mt-1">
            <Image
              src={Group}
              alt=""
              className=""
              style={{ width: "100%", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col mt-8">
          <h2 className={` text-xl mt-4 mb-6 font-semibold`}>4 PILLARS </h2>
          <p>Our work revolves around 4 pillars:</p>
          <div className="flex flex-col lg:flex-row justify-between mt-4 lg:gap-8">
            <div className="flex-1 my-4 border border-4 border-[--clr-accent-500] rounded-xl px-6 py-4">
              <span className="uppercase font-semibold">Education</span>
              <p className="my-4">
                The time spent within the formal education system significantly
                predicts future personal, professional, and economic well-being.
                Therefore, we help children succeed at school.
              </p>
              <ul className="list-disc ml-4">
                <li>Homework support</li>
                <li>Basic skills</li>
                <li>Play-based learning</li>
                <li>Personalized support</li>
              </ul>
            </div>
            <div className="flex-1 my-4 border border-4 border-[--clr-accent-500] rounded-xl px-6 py-4">
              <span className="uppercase font-semibold">
                Personal development
              </span>
              <p className="my-4">
                Having a strong sense of who they are, knowing their unique
                gifts and being able to manage their emotions, cooperate, and
                inspire others are the ultimate tools for a life of fulfillment
                and contribution.
              </p>
              <ul className="list-disc ml-4">
                <li>Self-awareness</li>
                <li>Soft skills</li>
                <li>Social and emotional learning</li>
                <li>Growth mindset</li>
                <li>Agency</li>
              </ul>
            </div>
            <div className="flex-1 my-4 border border-4 border-[--clr-accent-500] rounded-xl px-6 py-4">
              <span className="uppercase font-semibold">Nutrition</span>
              <p className="my-4">
                We educate and raise awareness around food, nutrition and
                healthy eating habits, teaching our children and their families
                how to grow vegetables and cook healthy meals.
              </p>
              <ul className="list-disc ml-4">
                <li>Raising awareness</li>
                <li>Growing vegetables</li>
                <li>Cooking skills</li>
                <li>Daily home-made meals</li>
              </ul>
            </div>
            <div className="flex-1 my-4 border border-4 border-[--clr-accent-500] rounded-xl px-6 py-4">
              <span className="uppercase font-semibold">Hygiene</span>
              <p className="my-4">
                We promote and develop habits that are important in preventing
                illness and fostering dignity, in collaboration with nurses of
                the local health center.
              </p>
              <ul className="list-disc ml-4">
                <li>Personal hygiene</li>
                <li>Cleanliness</li>
                <li>Health</li>
                <li>Sex education</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
