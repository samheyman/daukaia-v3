import { newsreader } from "../../fonts";

export default function Vision() {
  return (
    <section className="bg-[--clr-accent-100] lg:px-32 py-12 mx-auto flex w-full lg:w-[min(1200px,(100%-4rem))] flex-col my-12 px-4 lg:px-0">
      <div className="flex lg:flex-row what-we-do flex-col-reverse items-end">
        <div className="mx-0 w-full text-center">
          <h1 className={`${newsreader.className} text-4xl mt-4 mb-6`}>
            Vision
          </h1>
          <p className="text-xl lg:my-4">
            We envision a world where every child has the opportunity to live a
            fulfilling life, supported by a nurturing environment and
            opportunities to make a difference.
          </p>
        </div>
      </div>
    </section>
  );
}
