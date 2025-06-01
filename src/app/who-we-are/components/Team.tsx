import { newsreader } from "../../fonts";

export default function Team() {
  return (
    <section className="mx-auto flex w-full lg:w-[min(1200px,(100%-4rem))] flex-col my-12 px-4 lg:px-0">
      <div className="flex items-start flex-col">
        <h1 className={`text-6xl ${newsreader.className}`}>Team</h1>

        <h2 className={`text-3xl font-bold ${newsreader.className} my-8`}>
          The team
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-4 lg:gap-8">
          <div className="flex flex-col items-center">
            <img src="/images/team/martha.png" className="w-60" />
            <p className="font-bold mt-4">Martha Haydeé Avilés</p>
            <p>Project Coordinator and Educator</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/team/maria.png" className="w-60" />
            <p className="font-bold mt-4">María Esther Pérez Gonzalez</p>
            <p>Community Impact Officerand Educator</p>
          </div>
          <div className="flex flex-col items-center ">
            <div className="border border-4 rounded-full border-[#00b596] p-1">
              <img src="/images/team/eline_green.png" className="w-60 " />
            </div>
            <p className="font-bold mt-4">Eline Lund</p>
            <p>Managing Director</p>
          </div>
        </div>
        
        
        {/* <div className="flex flex-col lg:flex-row justify-center items-center w-full mt-8 gap-8 lg:gap-8">
          <div className="flex flex-col items-center">
            <img src="/images/team/javier.png" className="w-60" />
            <p className="font-bold mt-4">Javier Fernández</p>
            <p>Vice President</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/team/laura.png"
              className="w-60 border border-[#00b596] rounded-full bg-[#00b596]"
            />
            <p className="font-bold mt-4">Laura Ayerdi</p>
            <p>Secretary</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/team/ricardo.png" className="w-60" />
            <p className="font-bold mt-4">Ricardo Zabalegui</p>
            <p>Board Member</p>
          </div>
        </div> */}
        <div className="flex flex-col w-full my-12">
          <h2 className={`text-3xl font-bold ${newsreader.className} my-8`}>
            And all with the kind help and support of our amazing volunteers
          </h2>
          <div className="flex flex-col lg:flex-row w-full mb-12">
            <div className="flex-1">
              <ul className="list-disc ml-4">
                <li className="py-1">
                  <span className="font-bold">Alberto Alonso</span> - has been
                  on board ever since volunteering in Ocotal in 2016
                </li>
                <li className="py-1">
                  <span className="font-bold">Javier Fernández</span> -
                  co-founder
                </li>
                <li className="py-1">
                  <span className="font-bold">Laura Ayerdi</span> - with her big
                  heart and passion for international development and
                  cooperation
                </li>
                <li className="py-1">
                  <span className="font-bold">Ricardo Zabalegui</span> - Board
                  Member
                </li>
                <li className="py-1">
                  <span className="font-bold">Rebecca Nekstad</span> - from
                  brainstorming ideas and strategy to promote health to
                  proofreading project applications
                </li>
                <li className="py-1">
                  <span className="font-bold">Lilli Pope</span> - with her drive
                  and creative fundraising ideas
                </li>
                <li className="py-1">
                  <span className="font-bold">Zaneta Statevska</span> - giving
                  our communications plan rigor
                </li>
                <li className="py-1">
                  <span className="font-bold">Jenny Hernandez</span> - helping
                  out with legal stuff
                </li>
                <li className="py-1">
                  <span className="font-bold">Alexandra Beltran</span> - who has
                  gifted us a wonderful logo and made the design for our website
                </li>
                <li className="py-1">
                  <span className="font-bold">Sam Heyman</span> - our very own
                  web developer and Ambassador (and Team Lead's husband)
                </li>
<li className="py-1">
                  <span className="font-bold">Mayelling Gonzalez</span> - Educator (Volunteer)</li>
                <li className="py-1">
                  <span className="font-bold">
                    Paty, Criky, Marta, Lucas, Maialen, Carla, Anna, Núria,
                    Paula, Mònica, María, Pepe, Alberto, Alex, Roger, Clara,
                    Manu, Natàlia, Monica, Riky, Carmen, Laura, Javi, Marina,
                    Sara, Ale, Alicia, María and Melani
                  </span>{" "}
                  - amazing teachers, social workers, photographers, who have
                  travelled all the way to Ocotal to volunteer
                </li>
                <li className="py-1">
                  <span className="font-bold">
                    Pablo Millanes, Carles López, Daniel Olalla, Jara Costa,
                    Javier Fernández, Julián Martín
                  </span>{" "}
                  - thanks to them for founding Daukaia in 2012
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
