import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section className=" wrapper who-we-are">
      <div>
        <h1>Who we are</h1>
        <p>
          We are a passionate collective of local and global changemakers
          committed to giving the children of Ocotal the opportunity of a
          fulfilling life. Most of all, we&apos;re normal people wanting to make
          a difference.
        </p>
        <p>
          We believe in the transformative power of community, and foster
          long-term impact through a holistic, grassroots approach that combines
          education, empowerment, and sustainable practices.
        </p>
        <div className="buttons">
          <Link href="/who-we-are">Read more</Link>
        </div>
      </div>
      <img src="./images/three-flowers.png" alt="Children playing" />
    </section>
  );
}
