import Button from "./ui/Button";

export default function Header() {
  return (
    <header className="w-full fixed top-0 z-50 bg-white/80 backdrop-blur-md">
      <nav className="flex justify-between py-4 px-6 items-center w-full">
        <a href="" className="font-bold">
          Logo
        </a>
        <ul className="md:flex font-semibold hidden space-x-12">
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
        <a href="/auth/login">
          <Button
            type="button"
            aria-label="login"
            className="rounded-full bg-darkSlateGray text-white font-bold px-5 py-2"
          >
            Login
          </Button>
        </a>
      </nav>
    </header>
  );
}
