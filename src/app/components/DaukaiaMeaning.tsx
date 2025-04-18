import { newsreader } from "../fonts";

export default function DaukaiaMeaning() {
  return (
    <section className={`meaning ${newsreader.className} text-center`}>
      <p className="text-4xl">
        Daukaia: (verb)&nbsp;
        <em style={{ fontWeight: "bold" }}>to do, to teach.</em>&nbsp;
        <span style={{ fontStyle: "italic" }}>[Miskito]</span>
      </p>
    </section>
  );
}
