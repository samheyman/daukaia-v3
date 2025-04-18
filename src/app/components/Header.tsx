"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto flex w-[calc(100%-0.75rem)] lg:w-[min(1600px,(100%-4rem))] flex-col-reverse items-end">
      <div className="header w-full mb-4 flex flex-col lg:flex-row px-0 mx-0">
        <Link href="/">
          <img className="logo" src="./images/logo.png" alt="Daukaia" />
        </Link>
        <button
          onClick={() => {
            document.querySelector(".close")?.classList.remove("hidden");
            // document.querySelector(".close")?.classList.add("block");
            document.querySelector(".hamburger")?.classList.add("hidden");
            document.querySelector(".menu")?.classList.remove("hidden");
            document.querySelector(".menu")?.classList.add("flex");
          }}
          className="hamburger absolute top-0 right-0 mt-12 mr-8 flex lg:hidden items-center justify-center w-10 h-10 bg-neutral-100 rounded-full"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <button
          onClick={() => {
            document.querySelector(".close")?.classList.add("hidden");
            document.querySelector(".hamburger")?.classList.remove("hidden");
            document.querySelector(".menu")?.classList.add("hidden");
          }}
          className="close hidden absolute top-0 right-0 mt-12 mr-8  lg:hidden flex items-center justify-center w-10 h-10 bg-neutral-100 rounded-full"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>
        <ul className="hidden lg:flex flex-col items-center w-full gap-4 lg:flex lg:w-fit lg:flex-row lg:gap-16 text-lg lg:pt-5">
          <li className="text-center">
            <Link href="/who-we-are">Who we are</Link>
          </li>
          <li className="text-center">
            <Link href="/what-we-do">What we do</Link>
          </li>
          {/* <li className="text-center">
            <Link href="/ignite-change">Ignite change</Link>
          </li> */}
          <Link
            href="/donate"
            className="group relative inline-flex  border border-yellow-400 rounded-full transition focus:outline-none"
          >
            <span className="py-2 px-5 border border-yellow-400 text-black bg-yellow-400 rounded-full transition transfor hover:-translate-x-1 hover:-translate-y-1">
              Donate
            </span>
          </Link>
        </ul>
        <ul className="menu hidden flex-col items-center w-full gap-4 lg:hidden text-lg mt-2 py-4 border border-t-1 border-l-0 border-r-0">
          <li className="text-center">
            <Link href="/who-we-are">Who we are</Link>
          </li>
          <li className="text-center">
            <Link href="/what-we-do">What we do</Link>
          </li>
          <li className="text-center">
            <Link href="/ignite-change">Ignite change</Link>
          </li>
          <Link
            href="/donate"
            className="group relative inline-flex  border border-yellow-400 rounded-full transition focus:outline-none"
          >
            <span className="py-2 px-5 border border-yellow-400 text-black bg-yellow-400 rounded-full transition transfor hover:-translate-x-1 hover:-translate-y-1">
              Donate
            </span>
          </Link>
        </ul>
      </div>
      {/* <div className="hidden lg:flex mt-2 -mb-4 pr-8 items-center w-72 justify-between">
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
        <a href="mailto:hello@daukaia.org">M</a>
      </div> */}
    </header>
  );
}
