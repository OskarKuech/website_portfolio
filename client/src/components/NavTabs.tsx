import { NavLink } from "react-router-dom";

const linkBase =
  "px-1 pb-3 text-sm tracking-wide uppercase border-b-2 transition-colors";

export default function NavTabs() {
  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center justify-between pt-8">
          <span className="text-lg font-semibold tracking-tight">Jordan Reyes</span>
          <nav className="flex gap-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive
                    ? "border-neutral-900 text-neutral-900"
                    : "border-transparent text-neutral-400 hover:text-neutral-700"
                }`
              }
            >
              Writing
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive
                    ? "border-neutral-900 text-neutral-900"
                    : "border-transparent text-neutral-400 hover:text-neutral-700"
                }`
              }
            >
              About
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
