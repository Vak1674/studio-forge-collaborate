import { Link } from "react-router-dom";
import icon from "@/assets/icon.svg";

const Footer = () => {
  return (
    <footer className="mt-auto px-6 md:px-8 pt-24 md:pt-40 pb-12 bg-background border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6 mb-16 md:mb-24">
        <div className="md:col-span-6">
          <h2 className="font-serif text-4xl md:text-6xl tracking-tighter">
            Let's shape <br /> something real.
          </h2>
        </div>
        <div className="md:col-span-3 md:col-start-7">
          <span className="font-sans text-xs tracking-widest uppercase block mb-4 md:mb-6">Inquiries</span>
          <a href="mailto:info@radical-earth.com?subject=Inquiry%20—%20Radical%20Earth%20Studio" className="font-serif text-xl md:text-2xl hover:text-muted-foreground transition-colors">info@radical-earth.com</a>
        </div>
        <div className="md:col-span-3">
          <span className="font-sans text-xs tracking-widest uppercase block mb-4 md:mb-6">Studio</span>
          <p className="font-serif text-lg md:text-xl text-muted-foreground">
            Based remotely<br />
            Available worldwide
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-border pt-8 md:pt-12">
        <div className="flex items-center gap-4">
          <img src={icon} alt="RE" className="h-6" />
          <p className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground">
            © 2026 Radical Earth Studio — All Rights Reserved
          </p>
        </div>
        <div className="flex gap-8">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
          <Link to="/collaborate" className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">Collaborate</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
