import { useEffect, useState } from "react";
import logo from "@/assets/logo.svg";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setExit(true), 2200);
    const t2 = setTimeout(() => onFinish(), 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-foreground transition-opacity duration-700 ${
        exit ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6 splash-rise">
        <img
          src={logo}
          alt="Radical Earth Studio"
          className="h-24 md:h-36 invert splash-fade"
        />
        <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-primary-foreground/70 splash-line">
          Radical Earth Studio
        </span>
      </div>

      <style>{`
        @keyframes splashFade {
          0% { opacity: 0; transform: scale(0.92); filter: blur(6px); }
          100% { opacity: 1; transform: scale(1); filter: blur(0); }
        }
        @keyframes splashLine {
          0% { opacity: 0; letter-spacing: 0.2em; }
          100% { opacity: 1; letter-spacing: 0.4em; }
        }
        @keyframes splashRise {
          0% { transform: translateY(8px); }
          100% { transform: translateY(0); }
        }
        .splash-fade { animation: splashFade 1.4s ease-out both; }
        .splash-line { animation: splashLine 1.6s ease-out 0.6s both; }
        .splash-rise { animation: splashRise 1.4s ease-out both; }
      `}</style>
    </div>
  );
};

export default SplashScreen;
