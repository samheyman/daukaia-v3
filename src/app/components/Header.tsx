import Link from "next/link";

export default function Header() {
  return (
    <header className="wrapper wrapper--full">
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
          className="py-2 px-5 text-black transition-colors duration-150 bg-yellow-500 rounded-full focus:shadow-outline hover:bg-yellow-300"
          href="/donate"
        >
          Donate
        </Link>
      </ul>
      <div className="language my-4 mr-8">English</div>
    </header>
  );
}
