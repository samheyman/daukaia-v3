export default function Footer() {
  return (
    <footer className="">
      <div className="text-sm flex flex-col lg:flex-row lg:items-center  justify-between items-center footer mx-auto w-[calc(100%-0.75rem)] lg:w-[min(1600px,(100%-4rem))] py-8">
        <div className="flex items-center flex-col lg:flex-row">
          <p className="copy text-sm">
            &copy; 2025 Daukaia. All rights reserved
          </p>
          <ul className="flex justify-center my-2">
            <li className="lg:ml-4 lg:pl-4 lg:border-l-2 border-[var(--clr-neutral-400)]">
              <a className=" " href="/privacy">
                Privacy
              </a>
            </li>
            <li className="ml-4 pl-4 border-l-2 border-[var(--clr-neutral-400)]">
              <a className="" href="/legal">
                Legal
              </a>
            </li>
          </ul>
        </div>

        <div className=" flex lg:pr-8 items-center w-44 lg:w-60 justify-between">
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
      </div>
    </footer>
  );
}
