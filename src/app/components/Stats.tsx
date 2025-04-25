import { newsreader } from "../fonts";

export default function Stats() {
  return (
    <section className=" bg-slate-100 ">
      <dl className="mx-auto flex py-8 py-4 w-full lg:w-[min(1200px,(100%-4rem))] flex-col lg:flex-row justify-evenly px-4 lg:px-0">
        <div className="m-8 flex-1">
          <dd className={`${newsreader.className} text-5xl text-center`}>
            500
          </dd>
          <dt className="text-lg text-center pt-2">
            children empowered since 2012
          </dt>
        </div>
        <div className="m-8 flex-1">
          <dd className={`${newsreader.className} text-5xl text-center`}>
            65%
          </dd>
          <dt className="text-lg text-center pt-2">
            of beneficiaires achieve top grades
          </dt>
        </div>
        <div className="m-8 flex-1">
          <dd className={`${newsreader.className} text-5xl text-center`}>34</dd>
          <dt className="text-lg text-center pt-2">
            international volunteers engaged
          </dt>
        </div>
        <div className="m-8 flex-1">
          <dd className={`${newsreader.className} text-5xl text-center`}>
            50+
          </dd>
          <dt className="text-lg text-center pt-2">
            teachers trained in local schools
          </dt>
        </div>
      </dl>
    </section>
  );
}
