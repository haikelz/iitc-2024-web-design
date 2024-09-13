import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "./ui/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-white/80 backdrop-blur-md">
      <nav className="flex flex-col justify-center py-4 px-6 items-center w-full">
        <div className="w-full flex justify-between items-center">
          <a href="" className="font-bold">
            Logo
          </a>
          <button
            className="md:hidden block"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
          <ul className="md:flex hidden md:justify-center md:items-center md:mt-0 mt-4 text-center space-y-4 md:space-y-0 font-semibold md:space-x-12">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <a href="/auth/login" className="hidden md:block">
            <Button
              type="button"
              aria-label="login"
              className="rounded-full bg-darkSlateGray md:w-fit w-56 text-white font-bold px-5 py-2"
            >
              Login
            </Button>
          </a>
        </div>
        {isOpen ? (
          <ul className="md:hidden mt-4 text-center space-y-4 font-semibold md:space-x-12">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="/auth/login" className="w-full">
                <Button
                  type="button"
                  aria-label="login"
                  className="rounded-full bg-darkSlateGray w-56 text-white font-bold px-5 py-2"
                >
                  Login
                </Button>
              </a>
            </li>
          </ul>
        ) : null}
      </nav>
    </header>
  );
}
