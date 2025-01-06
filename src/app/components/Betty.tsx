import { newseader } from "../fonts";

export default function Betty() {
  return (
    <section className=" betty">
      <div className="betty-container">
        <img
          src="./images/betty.jpg"
          alt="young girl standing outside against a wall and smiling"
        />
        <div className="text">
          <p
            style={{ fontWeight: "bold", fontSize: 54 }}
            className={newseader.className}
          >
            This is Betty.
          </p>
          <p>And this photo was taken when we first met her in 2012.</p>
          <p>
            We worked with Betty for three years to help her find her own voice,
            get an education and build her grit and confidence. Today, she is a
            young and driven accountant, feeling fulfilled at work and helping
            her family thrive.
          </p>
          <p>
            <em>
              &quot;I&apos;m proud of who I am. I have strong values, I am
              determined, I care about my family and about doing good. I will
              always be grateful to Daukaia.&quot;
            </em>{" "}
            - Betty, age 25
          </p>
        </div>
      </div>
    </section>
  );
}
