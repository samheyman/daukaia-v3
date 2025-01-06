import { newseader } from "../fonts";

export default function DaukaiaMeaning() {
  return (
    <section className={`meaning ${newseader.className}`}>
      <p>
        Daukaia: (verb)&nbsp;
        <em style={{ fontWeight: "bold" }}>to do, to teach.</em>&nbsp;
        <span style={{ fontStyle: "italic" }}>[Miskito]</span>
      </p>
    </section>
  );
}
