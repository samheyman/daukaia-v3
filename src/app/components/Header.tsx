export default function Header() {
  return (
    <header className="wrapper wrapper--full-width flex">
      <img className="logo" src="./images/logo.png" alt="Daukaia" />
      <ul>
        <li><Link href="/who-we-are">Who we are</Link></li>
        <li><Link href="/what-we-do">What we do</Link></li>
        <li>Ignite change</li>
        <li className="accent">Donate</li>
      </ul>
    </header>
  );
}
