import { useEffect, useState } from "react";
import logo from "@/assets/logo.svg";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setExit(true), 4000);
    const t2 = setTimeout(() => onFinish(), 4800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-background transition-opacity duration-700 ${
        exit ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6 splash-rise">
        <img
          src={logo}
          alt="Radical Earth Studio"
          className="h-32 md:h-48 splash-fade"
        />
      </div>

      <style>{`
        @keyframes splashFade {
          0% { opacity: 0; transform: scale(0.92); filter: blur(6px); }
          100% { opacity: 1; transform: scale(1); filter: blur(0); }
        }
        @keyframes splashRise {
          0% { transform: translateY(8px); }
          100% { transform: translateY(0); }
        }
        .splash-fade { animation: splashFade 1.4s ease-out both; }
        .splash-rise { animation: splashRise 1.4s ease-out both; }
      `}</style>
    </div>
  );
};

export default SplashScreen;
