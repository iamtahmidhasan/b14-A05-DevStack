import { useState } from "react";
import logo from "/assets/logo-text.png";
import hamburger from "/ui/hamburger.png";

export default function Header() {
  const [click, setClick] = useState(false);

  const btnHandler = () => {
    setClick(!click);
  };

  return (
    <header className="border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="logo-area">
          <img
            src={logo}
            alt="Logo"
            className="w-32 sm:w-36"
          />
        </div>
        <div className="hidden md:block nav-area">
          <nav className="flex gap-6 items-center text-zinc-800">
            <a className="text-pink-600 font-bold" href="#">
              Home
            </a>
            <a href="#">Technologies</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>
        <div className="flex gap-3">
            <div className="flex btn-area gap-3 items-center">
          <button>Sign In</button>

          <button className="bg-linear-65 from-orange-600 to-purple-600 px-4 py-2 text-white rounded-full">
            Sign Up
          </button>
        </div>
        <button
          onClick={btnHandler}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <img
            src={hamburger}
            alt="Menu"
            className="w-5 h-5"
          />
        </button>
        </div>
      </div>
      {click && (
        <div className="md:hidden border-t border-zinc-200 px-4 py-5">
          <nav className="flex flex-col gap-4 text-zinc-800">
            <a className="text-pink-600 font-bold" href="#">
              Home
            </a>
            <a href="#">Technologies</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}