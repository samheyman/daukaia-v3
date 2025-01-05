import Button from "./Button";

export default function Hero() {
  return (
    <section className="hero">
      <div className="image-container">
        <div className="gradient-right"></div>
        <img
          src="./images/girl-heart.jpg"
          alt="Girl making a heart with her hands"
        />
      </div>
      <div className="text-container">
        <div className="text">
          <p>
            Creating <em>safer lives</em>
          </p>
          <p>
            and <em>brighter futures</em>
          </p>
          <Button text="Donate" path="/donate" type="neutral" />
        </div>
      </div>
    </section>
  );
}
