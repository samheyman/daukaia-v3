export default function Stats() {
  return (
    <section className=" bg-slate-100 ">
      <dl className="my-4 py-4 wrapper flex flex-row justify-evenly">
        <div className="m-8">
          <dd className="text-5xl text-center">500</dd>
          <dt className="text-lg text-center pt-2">children empowered</dt>
        </div>
        <div className="m-8">
          <dd className="text-5xl text-center">65%</dd>
          <dt className="text-lg text-center pt-2">achieve higher grades</dt>
        </div>
        <div className="m-8">
          <dd className="text-5xl text-center">34</dd>
          <dt className="text-lg text-center pt-2">international volunteers</dt>
        </div>
        <div className="m-8">
          <dd className="text-5xl text-center">50+</dd>
          <dt className="text-lg text-center pt-2">teachers trained</dt>
        </div>
      </dl>
    </section>
  );
}
