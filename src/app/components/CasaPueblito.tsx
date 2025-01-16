import { newseader } from "../fonts";

export default function CasaPueblito() {
  return (
    <section className="casapueblito">
      <p className={`text-4xl ${newseader.className}`}>
        Proud partner of <em className="font-bold">Casa Pueblito</em>
      </p>
      <img src="./images/casaPueblito.png" alt="Casa Pueblito logo" />
    </section>
  );
}
