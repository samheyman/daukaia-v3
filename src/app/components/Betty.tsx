import { newseader } from "../fonts";

export default function Betty() {
  return (
    <section className=" betty">
      <div className="betty-container">
        <img
          className="w-full"
          src="./images/betty.jpg"
          alt="young girl standing outside against a wall and smiling"
        />
        <div className="text px-12 py-14 ma">
          <p className={`${newseader.className} text-6xl font-bold`}>
            This is Betty.
          </p>
          <p className="text-base my-4">
            And this photo was taken when we first met her in 2012.
          </p>
          <p className="text-base my-4">
            We worked with Betty for three years to help her find her own voice,
            get an education and build her grit and confidence. Today, she is a
            young and driven accountant, feeling fulfilled at work and helping
            her family thrive.
          </p>
          <p className="text-base my-4">
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
