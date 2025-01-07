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
        <li className="accent">
          <Link href="/donate">Donate</Link>
        </li>
      </ul>
      <div className="language">English</div>
    </header>
  );
}
