import { newseader } from "../fonts";
// import Button from "./Button";

export default function Hero() {
  return (
    <section className="hero wrapper wrapper--wide">
      <div className="image-container h-full lg:w-1/2">
        <div className="gradient-right"></div>
        <img
          src="./images/girl-heart.png"
          alt="Girl making a heart with her hands"
        />
      </div>
      <div className=" bg-yellow-500 flex flex-col justify-center items-center w-full h-full lg:w-1/2">
        <div className="flex flex-col items-center justify-center">
          <p className={`${newseader.className}`}>
            Creating <span>safer lives</span>
          </p>
          <p className={`${newseader.className}`}>
            and <span>brighter futures</span>
          </p>
          <a
            className="mt-8 rounded-full border border-solid transition-colors flex items-center justify-center text-background gap-2 py-2 px-4 sm:px-9 hover:bg-clr-accent-500"
            href="/donate"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "white",
              color: "var(--clr-accent-500)",
              textTransform: "uppercase",
              fontWeight: 900,
              maxWidth: "fit-content",
              fontSize: 32,
            }}
          >
            Donate
          </a>{" "}
        </div>
      </div>
    </section>
  );
}
