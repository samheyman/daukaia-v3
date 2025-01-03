export default function Header() {
  return (
    <header className="flex">
      <img className="logo" src="./images/logo.png" alt="Daukaia" />
      <ul>
        <li>Who we are</li>
        <li>What we do</li>
        <li>Ignite change</li>
        <li className="accent">Donate</li>
      </ul>
    </header>
  );
}
