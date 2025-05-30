import Image from "next/image";
import kidsInPlayground from "../../../public/images/kids-in-playground.jpg";
import { newsreader } from "../fonts";
import DonorBoxForm from "./components/DonorBoxForm";

export default function Home() {
  return (
    <>
      <section className="mx-auto flex w-full lg:w-[min(1200px,(100%-4rem))] flex-col my-12 px-4 lg:px-0">
        <div className="flex flex-col">
          <h1 className={`${newsreader.className} text-6xl lg:mt-4 mb-1`}>
            Donate
          </h1>
          <h2 className={`${newsreader.className} text-5xl mt-4 mb-0`}>
            Invest in a child&apos;s potential - donate today!
          </h2>
          <div className="flex flex-col lg:flex-row justify-between mt-4">
            <div className="flex flex-col flex-1 ">
              <p className="text-lg md:text-base my-4">
                Your donation provides children of Ocotal with the opportunity
                of a brighter future in a safe and caring environment. By
                donating today, you will help create lasting, positive change in
                their lives and in their community.
              </p>
              <p className="text-lg md:text-base my-2">
                Children need stability. Please consider making a recurring
                donation as this helps us plan our work ahead. Every
                contribution, big or small, goes a long way in helping us build
                a better future, one child at a time. Your support helps
                provide:
              </p>
              <ul className="list-disc ml-4 text-lg md:text-base">
                <li className="py-1">school materials and tutoring</li>
                <li className="py-1">
                  emotional support and life skills workshops
                </li>
                <li className="py-1">
                  healthy snacks and a safe space to learn and grow
                </li>
              </ul>
            </div>
            <div className="flex flex-col flex-1 ">
              <Image
                src={kidsInPlayground}
                alt="Kids playing outside in the playground"
                className="mx-auto h-96 object-contain mt-4"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section
        className={` ${newsreader.className} flex flex-col text-lg items-start justify-center  my-8 py-12`}
      > */}
      <section className="mx-auto flex w-full lg:w-[min(1200px,(100%-4rem))] flex-col mt-12 px-4 lg:px-0 justify-start">
        <div className="flex flex-col lg:flex-row justify-between mt-4">
          <div className="flex flex-col flex-1 overflow-x-scroll">
            <h3 className={`${newsreader.className} text-3xl mt-2 mb-6`}>
              Via DonorBox
            </h3>
            <DonorBoxForm />
            {/* <p className="text-xl px-4 text-center">
              You can also go to our Donorbox donations page:{" "}
              <a
                href="https://donorbox.org/daukaia"
                target="_blank"
                className="block"
              >
                https://donorbox.org/daukaia
              </a>
            </p> */}
          </div>
          <div className="flex flex-col flex-1 ">
            <h3 className={`${newsreader.className} text-3xl mt-2 mb-6`}>
              Via bank transfer
            </h3>
            {/* <p className="text-lg md:text-base my-4">
          If you prefer not to use our online form, there are several other
          options available:
        </p> */}
            {/* <h2 className="py-1">
          <span className="font-bold">VIPS</span> - If you live in Norway, you
          can donate by
        </h2>
        <h2 className="py-1">
          <span className="font-bold">Bank transfer</span> - You can make a
          direct transfer to one of our bank accounts:
        </h2> */}
            <ul className="text-lg md:text-base my-4">
              <li className="py-4">
                <span className="font-semibold">Daukaia Norge (Norway)</span>
                <ul>
                  <li>IBAN: NO1315067985335</li>
                  <li>BIC: DNBANOKK</li>
                </ul>
                <span>or</span>
                <a
                  className="block"
                  target="_blank"
                  href="https://qr.vipps.no/donations/999705?amount=20000&reference="
                >
                  <img
                    src="/images/vipps_button.png"
                    alt="VIPPS logo"
                    className="inline h-8"
                  />
                </a>
              </li>
              <li className="py-4">
                <span className="font-semibold">
                  Asociación Daukaia (Spain)
                </span>
                <ul>
                  <li>IBAN: ES85 00491954112010009978</li>
                  <li>BIC: BSCHESMMXXX</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto flex w-full lg:w-[min(1200px,(100%-4rem))] flex-col my-12 px-4 lg:px-0">
        <h1 className={`${newsreader.className} text-6xl mt-4 mb-1`}>FAQ</h1>
        <p className="font-bold pt-8 pb-2 text-lg md:text-base">
          How will my donation be spent?
        </p>
        <p className="text-lg md:text-base text-lg md:text-base">
          100% of your donation goes directly to Ocotal. Our main expenses are
          our educators’ salaries, maintenance of our space, the purchase of
          educational resources, food and other costs needed to help us
          accomplish our mission. Other administrative expenses, such as website
          hosting and financial fees, are covered by the founders and members of
          the board, none of which receive any economic compensation for their
          work and commitment.
        </p>

        <p className="font-bold pt-8 pb-2 text-lg md:text-base">
          How can I manage the amount and frequency of my donations?
        </p>
        <p className="text-lg md:text-base">
          You retain control of your donation and can effortlessly manage the
          way you give at any time. A donor account is set up automatically for
          recurring donations and you will receive an email with your account
          info. You can easily access your account through the Donor Login on
          <a href="www.donorbox.org" target="_blank" className="underline">
            https://donorbox.org/daukaia
          </a>{" "}
          to manage or cancel your donations any time.
        </p>
        {/* <p className="font-bold pt-8 pb-2">
          Are there any alternative ways I can donate?
        </p>
        <p className="pl-4">
          Of course! If you for any reason prefer not using our online form,
          there are several other options available:
        </p>
        <ul className="list-disc ml-4 pl-4">
          <li className="py-1">
            You can make a direct wire transfer to one of our bank accounts:
            <ul className="">
              <li className="py-2">
                <span className="font-semibold">Asociación Daukaia</span>
                <ul>
                  <li>IBAN: ES85 00491954112010009978</li>
                  <li>BIC: BSCHESMMXXX</li>
                </ul>
              </li>
              <li className="">
                <span className="font-semibold">Daukaia Norge</span>
                <ul>
                  <li>IBAN: NO1315067985335</li>
                  <li>BIC: DNBANOKK</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="py-1">
            If you live in Norway, you can donate by Vipps to #11760
          </li>
          <li className="py-1">
            If you live in Spain, you can get tax deductions from donations made
            through{" "}
            <a
              href="https://www.migranodearena.org/usuario/daukaia-a09"
              target="_blank"
              className="underline"
            >
              https://www.migranodearena.org/usuario/daukaia-a09
            </a>
          </li>
        </ul> */}
        <p className="font-bold pt-8 pb-2 text-lg md:text-base">
          How will you inform me about the developments of your work?
        </p>
        <p className="text-lg md:text-base">
          We will send you newsletters from time to time to give you the latest
          updates on our work. We won’t saturate your inbox, so don’t worry, and
          you can unsubscribe if you’d rather just follow our work through
          social media. We love talking about what we do, and we’re always open
          for a video call to let you in on the juicy stuff.{" "}
        </p>
        <p className="font-bold pt-8 pb-2 text-lg md:text-base">
          Are my donations tax deductible?
        </p>
        <ul className="list bullet pl-4 text-lg md:text-base">
          <li className="py-1">
            If you live in Spain, you can get tax deductions from donations made
            through{" "}
            <a
              href="https://www.migranodearena.org/usuario/daukaia-a09"
              target="_blank"
            >
              https://www.migranodearena.org/usuario/daukaia-a09
            </a>
          </li>
          <li className="py-1">
            Donations made in Norway are not yet tax deductible, but we are
            working on it.
          </li>
          <li className="py-1">
            Donations made from other countries are unfortunately not
            deductible.
          </li>
        </ul>
        <p className="font-bold pt-8 pb-2 text-lg md:text-base">
          I really want to be involved in what’s happening. Can I?
        </p>
        <p className="text-lg md:text-base">
          Of course! Let’s chat and plan how.
        </p>
        <p className="text-lg md:text-base">
          Contact us at:{" "}
          <a href="mailto:hello@daukaia.org" className="underline">
            hello@daukaia.org
          </a>
        </p>
      </section>
    </>
  );
}
