import { newsreader } from "../fonts";

export default function Team() {
  return (
    <section className="mx-auto flex w-[calc(100%-0.75rem)] lg:w-[min(1200px,(100%-4rem))] flex-col my-12 border border-red-50">
      <div className="flex items-start flex-col">
        <h1 className={`text-6xl ${newsreader.className}`}>Team</h1>
        <h2 className={`text-3xl font-bold ${newsreader.className} my-8`}>
          Our team in Ocotal
        </h2>
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-col items-center mx-16">
            <img src="/images/team/martha.png" className="w-60" />
            <p className="font-bold mt-4">Martha Haydeé Avilés</p>
            <p>Project Coordinator and Educator</p>
          </div>
          <div className="flex flex-col items-center mx-16">
            <img src="/images/team/maria.png" className="w-60" />
            <p className="font-bold mt-4">María Esther Pérez Gonzalez</p>
            <p>Community Impact Officerand Educator</p>
          </div>
          <div className="flex flex-col items-center mx-16">
            <img src="/images/team/mayelling.png" className="w-60" />
            <p className="font-bold mt-4">Mayelling Gonzalez</p>
            <p>Educator (Volunteer)</p>
          </div>
        </div>
        <h2 className={`text-3xl font-bold ${newsreader.className} my-8`}>
          Leadership team
        </h2>
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-col items-center mx-16">
            <img src="/images/team/eline_green.png" className="w-60" />
            <p className="font-bold mt-4">Eline Lund</p>
            <p>President (Norway) and Treasurer</p>
          </div>
          <div className="flex flex-col items-center mx-16">
            <img src="/images/team/alberto_green.png" className="w-60" />
            <p className="font-bold mt-4">Alberto Alonso</p>
            <p>President (Spain)</p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full mt-8">
          <div className="flex flex-col items-center mx-16">
            <img src="/images/team/javier.png" className="w-60" />
            <p className="font-bold mt-4">Javier Fernández</p>
            <p>Vice President</p>
          </div>
          <div className="flex flex-col items-center mx-16">
            <img src="/images/team/laura.png" className="w-60" />
            <p className="font-bold mt-4">Laura Ayerdi</p>
            <p>Secretary</p>
          </div>
          <div className="flex flex-col items-center mx-16">
            <img src="/images/team/ricardo.png" className="w-60" />
            <p className="font-bold mt-4">Ricardo Zabalegui</p>
            <p>Board Member</p>
          </div>
        </div>
      </div>
    </section>
  );
}
