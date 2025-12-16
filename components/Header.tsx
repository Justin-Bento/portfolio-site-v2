import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-teal-50 shadow-sm shadow-teal-950/10 border-b border-teal-950/10">
      <div className="wrapper p-6 grid grid-cols-1 lg:grid-cols-2 lg:items-center">
        <ul className="lg:flex lg:items-center lg:justify-between">
          <li>Logo</li>
          <li className="lg:hidden">Menu</li>
        </ul>
        <ul className="hidden lg:flex lg:items-center lg:justify-end lg:gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <li className="space-x-4">
            <button className="px-3 py-2 rounded bg-teal-900 text-teal-50 border border-teal-900/30">
              &#9788;
            </button>
            <button className="px-3 py-2 rounded bg-teal-100 border border-teal-900/30">
              &#9790;
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
