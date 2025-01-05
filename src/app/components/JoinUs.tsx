import Button from "./Button";

export default function JoinUs() {
  return (
    <section className="wrapper join-us">
      <h1>Join us!</h1>
      <p>
        We need passionate, innovative individuals like you to join us as
        Ambassadors, volunteers or donors. Whether through a bake sale, a
        creative project, or spreading our mission, your unique talents and
        efforts can light up the path to a brighter future for a child. Maybe
        you want to involve your class, your company or a group of friends?
      </p>
      <p>
        Your support empowers children like Betty to build better lives for
        themselves and their families by providing the safety, skills, and
        mindset they need to follow their dreams and contribute positively to
        the world.
      </p>
      <p>
        Discover more about our work and how you can make a lasting impact on a
        child’s life:
      </p>
      <div className="buttons">
        <Button text="Learn more" path="/donate" type="primary" />
        <Button text="Get involved" path="/donate" type="primary" />
        <Button text="Donate" path="/donate" type="primary" />
      </div>
    </section>
  );
}
