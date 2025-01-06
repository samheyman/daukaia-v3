import { newseader } from "../fonts";
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
          <p className={newseader.className}>
            Creating <span style={{ fontWeight: "bold" }}>safer lives</span>
          </p>
          <p className={newseader.className}>
            and <span style={{ fontWeight: "bold" }}>brighter futures</span>
          </p>
          <Button text="Donate" path="/donate" type="neutral" />
        </div>
      </div>
    </section>
  );
}
