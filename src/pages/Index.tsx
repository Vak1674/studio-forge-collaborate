import { Helmet } from "react-helmet-async";
import logo from "@/assets/logo.svg";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Helmet>
        <title>Radical Earth Studio — Experiential Architecture</title>
        <meta name="description" content="An emerging practice at the intersection of experiential hospitality, luxury residential design, and ecological responsibility." />
        <meta property="og:title" content="Radical Earth Studio — Experiential Architecture" />
        <meta property="og:description" content="An emerging practice at the intersection of experiential hospitality, luxury residential design, and ecological responsibility." />
        <meta property="og:url" content="https://radical-earth.lovable.app/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://radical-earth.lovable.app/" />
      </Helmet>
      <img src={logo} alt="Radical Earth Studio" className="h-24 md:h-32" />
    </div>
  );
};

export default Index;
