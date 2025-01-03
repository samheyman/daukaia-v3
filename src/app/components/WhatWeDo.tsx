import Button from "./Button";

export default function WhatWeDo() {
  return (
    <section className="what-we-do">
      <h1>What we do</h1>
      <p>
        We support children in Ocotal, Nicaragua, through education, health,
        personal development and community support so they can overcome
        challenges and thrive.
      </p>
      <p>
        We offer a safe and nurturing space for children and their families,
        where they can access emotional support, build strong relationships, and
        engage in community activities that promote well-being and
        collaboration.
      </p>
      <p>
        We encourage children to explore their creativity, develop their
        talents, and find sustainable ways to contribute to their community and
        the environment, transforming their world from the ground up.
      </p>
      <Button text="Volunteer" path="/donate" type="primary" />
      <Button text="Become an ambassador" path="/donate" type="primary" />
      <Button text="Daukaia for schools" path="/donate" type="primary" />
      <Button
        text="Partnerships with companies"
        path="/donate"
        type="primary"
      />
      <img src="./images/flower-in-hands.png" alt="Children playing" />
    </section>
  );
}
