import logo from "/assets/logo-text.png";
export default function Header() {

    
  return (
    <header className="border-b border-zinc-200">
      <div className="max-w-7xl mx-auto py-5 px-4 flex justify-between">
        <div className="logo-area">
          <img src={logo} alt="" />
        </div>
        <div className="nav-area">
            <nav className="flex gap-4 justify-between text-zinc-800 text-md">
                <a className="text-pink-600 font-bold" href="#">Home</a>
                <a href="#">Technologies</a>
                <a href="#">Projects</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        </div>
        <div className="btn-area flex gap-3">
          <button className="">Sign In</button>
          <button className="bg-linear-65 from-orange-500 to-purple-500 px-4 text-white py-1 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
