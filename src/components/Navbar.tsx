import { useState } from "react";
import { Link } from "react-router";
import { Code2, Feather, Zap, X, Menu } from "lucide-react";

const navLinks = [
  { to: "/software", label: "Software Dev", icon: Code2 },
  { to: "/writing", label: "Creative Writing", icon: Feather },
  { to: "/electrical", label: "Electrical Engineering", icon: Zap },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse-slow" />
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-primary relative z-10"
                  fill="currentColor"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <span className="text-xl font-semibold tracking-wide text-foreground group-hover:text-primary transition-colors">
                Themba Workshops
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(({ to, label, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              ))}
            </div>

            {/* Hamburger button */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="md:hidden text-foreground p-2 hover:text-primary transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 z-50 md:hidden flex flex-col
          bg-background border-l border-border/50 shadow-2xl
          transition-transform duration-[420ms] ease-[cubic-bezier(0.76,0,0.24,1)]
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border/50">
          <div className="flex items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-primary"
              fill="currentColor"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <span className="text-sm font-semibold tracking-wide text-foreground">
              Themba Workshops
            </span>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="text-muted-foreground hover:text-primary transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer nav links */}
        <nav className="flex flex-col px-4 pt-6 gap-1 flex-1">
          {navLinks.map(({ to, label, icon: Icon }, i) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              style={{
                transitionDelay: open ? `${0.1 + i * 0.06}s` : "0s",
              }}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-lg
                text-muted-foreground hover:text-primary hover:bg-primary/5
                transition-all duration-300 text-sm font-medium
                ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </Link>
          ))}
        </nav>

        {/* Drawer footer */}
        <div className="px-6 py-5 border-t border-border/50">
          <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/50 font-mono">
            Currently working on
          </p>
          <p className="text-primary text-sm font-mono mt-1 tracking-wider">
            AWS Cloud Practitioner
          </p>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
