import { newsreader } from "../fonts";

export default function CasaPueblito() {
  return (
    <section className="casapueblito flex flex-col items-center">
      <p
        className={`text-4xl ${newsreader.className} text-center pb-4 max-w-[16ch]`}
      >
        Proud partner of <em className="font-bold">Casa Pueblito</em>
      </p>
      <img src="./images/casaPueblito.png" alt="Casa Pueblito logo" />
    </section>
  );
}
