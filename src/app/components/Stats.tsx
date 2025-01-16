export default function Stats() {
  return (
    <section className=" bg-slate-100 ">
      <dl className="my-8 py-8 py-4 wrapper flex flex-row justify-evenly">
        <div className="m-8 flex-1">
          <dd className="text-5xl text-center">500</dd>
          <dt className="text-lg text-center pt-2">
            children empowered since 2010
          </dt>
        </div>
        <div className="m-8 flex-1">
          <dd className="text-5xl text-center">65%</dd>
          <dt className="text-lg text-center pt-2">
            of beneficiaires achieve higher grades
          </dt>
        </div>
        <div className="m-8 flex-1">
          <dd className="text-5xl text-center">34</dd>
          <dt className="text-lg text-center pt-2">
            international volunteers engaged
          </dt>
        </div>
        <div className="m-8 flex-1">
          <dd className="text-5xl text-center">50+</dd>
          <dt className="text-lg text-center pt-2">
            teachers trained in local schools
          </dt>
        </div>
      </dl>
    </section>
  );
}
