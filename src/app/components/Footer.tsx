export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row md:items-center">
      <div className="footer wrapper wrapper--wide flex flex-row justify-between items-center py-8">
        <div className="text-sm">
          <p className="copy">&copy; 2021 Daukaia. All rights reserved</p>
          <ul>
            <li>
              <span className="copy--md">
                &copy;2025 Daukaia. All rights reserved
              </span>
            </li>
            <li>
              <a className="disabled pr-4" href="">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="" href="/legal">
                Legal
              </a>
            </li>
          </ul>
        </div>

        <div className=" flex pr-8 items-center w-60 justify-between">
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
