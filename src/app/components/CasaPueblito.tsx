import Link from "next/link";
import { newsreader } from "../fonts";

export default function CasaPueblito() {
  return (
    <section className="casapueblito flex flex-col items-center">
      <p
        className={`text-4xl ${newsreader.className} text-center pb-4 max-w-[16ch]`}
      >
        Proud partner of <em className="font-bold">Casa Pueblito</em>
      </p>
      <Link href="https://www.casapueblito.org/" target="_blank">
        <img src="./images/casaPueblito.png" alt="Casa Pueblito logo" />
      </Link>
    </section>
  );
}
