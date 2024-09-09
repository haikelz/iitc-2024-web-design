export default function Header() {
  return (
    <header className="w-full">
      <nav className="flex justify-between p-6 items-center w-full">
        <a href="" className="font-bold">
          Logo
        </a>
        <ul className="flex font-semibold space-x-12">
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
          <button
            type="button"
            aria-label="login"
            className="rounded-full bg-darkSlateGray text-white font-bold px-5 py-2"
          >
            Login
          </button>
        </a>
      </nav>
    </header>
  );
}
