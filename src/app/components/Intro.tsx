import { newsreader } from "../fonts";

export default function Intro() {
  return (
    <section className={`meaning ${newsreader.className} text-center`}>
      <p className="text-3xl max-w-4xl mx-12 lg:mx-0">
        We are a small, grassroots nonprofit working with children and families
        in Ocotal, Nicaragua. We create safe spaces for learning, play, growth,
        and healing. The kind of spaces every child deserves.
      </p>
    </section>
  );
}
