import { newseader } from "../fonts";
import Button from "./Button";

export default function WhatWeDo() {
  return (
    <section className="wrapper what-we-do">
      <img src="./images/flower-in-hands.png" alt="Children playing" />

      <div>
        <h1 className={newseader.className}>What we do</h1>
        <p>
          We support children in Ocotal, Nicaragua, through education, health,
          personal development and community support so they can overcome
          challenges and thrive.
        </p>
        <p>
          We offer a safe and nurturing space for children and their families,
          where they can access emotional support, build strong relationships,
          and engage in community activities that promote well-being and
          collaboration.
        </p>
        <p>
          We encourage children to explore their creativity, develop their
          talents, and find sustainable ways to contribute to their community
          and the environment, transforming their world from the ground up.
        </p>
        <div className="buttons">
          <Button text="Read more" path="/what-we-do" type="primary" />
        </div>
      </div>
    </section>
  );
}
