import Link from "next/link";

export default function Header() {
  return (
    <header className="wrapper wrapper--wide flex flex-col-reverse items-end">
      <div className="header w-full mb-4">
        <Link href="/">
          <img className="logo" src="./images/logo.png" alt="Daukaia" />
        </Link>
        <ul>
          <li>
            <Link href="/who-we-are">Who we are</Link>
          </li>
          <li>
            <Link href="/what-we-do">What we do</Link>
          </li>
          <li>
            <Link href="/ignite-change">Ignite change</Link>
          </li>
          {/* <li className="accent">
          <Link href="/donate">Donate</Link>
        </li> */}
          <Link
            href="/donate"
            className="group relative inline-flex  border border-yellow-500 rounded-full transition focus:outline-none"
          >
            <span className="py-2 px-5 border border-yellow-400 text-black bg-yellow-400 rounded-full transition transfor hover:-translate-x-1 hover:-translate-y-1">
              Donate
            </span>
          </Link>
        </ul>
      </div>
      <div className=" flex mt-2 -mb-4 pr-8 items-center w-72 justify-between">
        <div className="language text-base text-neutral-500 px-3 py-0.5">
          English
        </div>
        <a href="https://www.facebook.com/daukaianorge" target="_blank">
          <img className="h-6" src="./images/icon-facebook.png" />
        </a>
        <a href="https://www.instagram.com/daukaia_no" target="_blank">
          <img className="h-8" src="./images/icon-instagram.png" />
        </a>
        <a href="https://no.linkedin.com/company/daukaia" target="_blank">
          <img className="h-8" src="./images/icon-linkedin.png" />
        </a>
        <a href="https://www.youtube.com/@daukaia4625" target="_blank">
          <img className="h-6" src="./images/icon-youtube.png" />
        </a>
      </div>
    </header>
  );
}
