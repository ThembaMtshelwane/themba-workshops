import { Link } from "react-router";
import { Code2, Feather, Zap } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
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

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/software"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              <Code2 className="w-4 h-4" />
              Software Dev
            </Link>
            <Link
              to="/writing"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              <Feather className="w-4 h-4" />
              Creative Writing
            </Link>
            <Link
              to="/electrical"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              <Zap className="w-4 h-4" />
              Electrical Engineering
            </Link>
          </div>

          <button className="md:hidden text-foreground p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
