import { newsreader } from "../fonts";

export default function Vision() {
  return (
    <section className="mx-auto flex w-[calc(100%-0.75rem)] lg:w-[min(1200px,(100%-4rem))] flex-col my-12">
      <div className="flex lg:flex-row what-we-do flex-col-reverse items-end">
        <div className="mx-0 lg:w-1/2">
          <h1 className={`${newsreader.className} text-6xl mt-4 mb-6`}>
            Vision
          </h1>
          <p className="text-base my-4">
            We envision a world where every child has the opportunity to live a
            fulfilling life, supported by a nurturing environment and
            opportunities to make a difference.
          </p>
        </div>
      </div>
    </section>
  );
}
