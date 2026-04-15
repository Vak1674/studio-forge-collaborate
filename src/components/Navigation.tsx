import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";

const Navigation = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  const links = [
    { to: "/projects", label: "Works" },
    { to: "/studio", label: "Studio" },
    { to: "/approach", label: "Approach" },
    { to: "/collaborate", label: "Collaborate" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 mix-blend-difference px-4 md:px-8 py-6 md:py-10 flex justify-between items-center">
        <Link to="/" className="block">
          <img src={logo} alt="Radical Earth Studio" className="h-14 md:h-20 invert" />
        </Link>
        
        {/* Desktop links */}
        <div className="hidden md:flex gap-10 font-sans text-xs font-medium tracking-widest uppercase text-primary-foreground">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`hover:opacity-60 transition-opacity ${isActive(to) ? 'opacity-60' : ''}`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-foreground flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-6 right-4 text-primary-foreground"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <img src={logo} alt="Radical Earth Studio" className="h-16 invert mb-8" />
          </Link>
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={`font-sans text-sm font-medium tracking-widest uppercase text-primary-foreground hover:opacity-60 transition-opacity ${isActive(to) ? 'opacity-60' : ''}`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navigation;
