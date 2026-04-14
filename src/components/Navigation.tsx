import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 mix-blend-difference px-6 md:px-8 py-8 md:py-10 flex justify-between items-baseline">
      <Link to="/" className="font-sans text-sm font-medium tracking-widest uppercase text-primary-foreground">
        Mantle Atelier
      </Link>
      <div className="flex gap-6 md:gap-12 font-sans text-xs font-medium tracking-widest uppercase text-primary-foreground">
        <Link 
          to="/projects" 
          className={`hover:opacity-60 transition-opacity ${isActive('/projects') ? 'opacity-60' : ''}`}
        >
          Works
        </Link>
        <Link 
          to="/collaborate" 
          className={`hover:opacity-60 transition-opacity ${isActive('/collaborate') ? 'opacity-60' : ''}`}
        >
          Collaborate
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
