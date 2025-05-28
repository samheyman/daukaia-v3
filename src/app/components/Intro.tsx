import { newsreader } from "../fonts";

export default function Intro() {
  return (
    <section className={`meaning ${newsreader.className} text-center`}>
      <p className="text-3xl max-w-4xl mx-12 lg:mx-0">
        We are a small nonprofit working with children and families in Ocotal,
        Nicaragua. We provide support and a safe space for learning, play,
        growth, and healing. The kind of space every child deserves.
      </p>
    </section>
  );
}
