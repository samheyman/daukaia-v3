import { newsreader } from "../../fonts";

export default function Team() {
  return (
    <section className="mx-auto flex w-[calc(100%-0.75rem)] lg:w-[min(1200px,(100%-4rem))] flex-col my-12">
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
        <h2 className={`text-3xl font-bold ${newsreader.className} my-12`}>
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
            <img
              src="/images/team/laura.png"
              className="w-60 border border-[#00b596] rounded-full bg-[#00b596]"
            />
            <p className="font-bold mt-4">Laura Ayerdi</p>
            <p>Secretary</p>
          </div>
          <div className="flex flex-col items-center mx-16">
            <img src="/images/team/ricardo.png" className="w-60" />
            <p className="font-bold mt-4">Ricardo Zabalegui</p>
            <p>Board Member</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full my-12">
          <div className="flex-1">
            <h2 className={`text-3xl font-bold ${newsreader.className} my-8`}>
              Permanent Volunteers
            </h2>
            <ul className="list-disc ml-4">
              <li className="py-1">
                <span className="font-bold">Rebecca Nekstad</span> - Health
                Advisor
              </li>
              <li className="py-1">
                <span className="font-bold">Lilli Pope</span> - Fundraising
                Coordinator
              </li>
              <li className="py-1">
                <span className="font-bold">Zaneta Statevska</span> -
                Communications Manager
              </li>
              <li className="py-1">
                <span className="font-bold">Laura Ayerdi</span> - Volunteer
                Coordinator
              </li>
              <li className="py-1">
                <span className="font-bold">Javier García</span> - Impact
                Manager
              </li>
              <li className="py-1">
                <span className="font-bold">Jenny Hernandez</span> - Legal
                Advisor
              </li>
              <li className="py-1">
                <span className="font-bold">
                  Alexandra Beltran, Marina Graell, Sara Ramio
                </span>{" "}
                - Teacher trainers
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h2 className={`text-3xl font-bold ${newsreader.className} my-8`}>
              Co-founders and Advisory Board
            </h2>
            <ul className="list-disc ml-4">
              <li className="py-1">
                <span className="font-bold">Carles López</span> - Empieza por
                Educar
              </li>
              <li className="py-1">
                <span className="font-bold">Daniel Olalla</span> - Universidad
                Rey Juan Carlos
              </li>
              <li className="py-1">
                <span className="font-bold">Jara Costa</span> - Institut Escola
                Renaixença
              </li>
              <li className="py-1">
                <span className="font-bold">Javier Fernández</span> - Instituto
                Cervantes
              </li>
              <li className="py-1">
                <span className="font-bold">Julián Martín</span> - CP IFP
                Federica Montseny
              </li>
              <li className="py-1">
                <span className="font-bold">Pablo Millanes</span> - Teach for
                All
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
