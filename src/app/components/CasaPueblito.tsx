import { newseader } from "../fonts";

export default function CasaPueblito() {
  return (
    <section className="casapueblito">
      <p className={newseader.className}>
        Proud partner of <em>Casa Pueblito</em>
      </p>
      <img src="./images/casaPueblito.png" alt="Casa Pueblito logo" />
    </section>
  );
}
