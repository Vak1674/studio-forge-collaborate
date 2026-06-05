import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import wellnessRetreat1 from "@/assets/wellness-exterior.jpg";
import houseNonna1 from "@/assets/house-nonna-front.jpg";
import heroImg from "@/assets/hero-house-nonna.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Radical Earth Studio — Experiential Architecture</title>
        <meta name="description" content="An emerging practice at the intersection of experiential hospitality, luxury residential design, and ecological responsibility." />
        <meta property="og:title" content="Radical Earth Studio — Experiential Architecture" />
        <meta property="og:description" content="An emerging practice at the intersection of experiential hospitality, luxury residential design, and ecological responsibility." />
        <meta property="og:url" content="https://radical-earth.lovable.app/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://radical-earth.lovable.app/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Radical Earth Studio",
          url: "https://radical-earth.lovable.app/",
          description: "An emerging architecture practice at the intersection of experiential hospitality, luxury residential design, and ecological responsibility.",
          sameAs: [
            "https://www.linkedin.com/in/alexander-konchev-507a7497/",
            "https://www.instagram.com/radicalearthstudio",
          ],
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Radical Earth Studio",
          url: "https://radical-earth.lovable.app/",
        })}</script>
      </Helmet>
      <Navigation />

      {/* Hero with background image */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Radical Earth Studio — House Nonna in Bishopscourt, Cape Town, set against the mountainside"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-foreground/40" />

        <div className="relative w-full px-4 md:px-8 pt-28 md:pt-40 pb-12 md:pb-20 text-primary-foreground">
          <div className="bg-foreground/30 backdrop-blur-md rounded-sm p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <div className="md:col-span-8">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[9rem] leading-[0.85] tracking-tighter">
                Architecture <br />
                <span className="italic pl-4 md:pl-12 lg:pl-24">Rooted in</span> <br />
                Experience
              </h1>
            </div>
            <div className="md:col-span-4 flex flex-col justify-end pb-2 md:pb-4">
              <p className="font-sans text-sm md:text-lg max-w-[35ch] leading-relaxed opacity-90">
                An emerging practice at the intersection of experiential hospitality, luxury residential design, and ecological responsibility. We craft spaces that connect people to place.
              </p>
              <Link
                to="/projects"
                className="mt-6 inline-block self-start font-sans text-[10px] md:text-xs tracking-widest uppercase border-b border-primary-foreground pb-2 hover:pb-3 transition-all"
              >
                View Selected Works →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-4 md:px-8 py-16 md:py-32 bg-foreground text-primary-foreground grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-6">
        <div className="md:col-start-2 md:col-span-5">
          <span className="font-sans text-[10px] md:text-xs tracking-widest uppercase opacity-50 mb-4 md:mb-8 block">Our Ethos</span>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl leading-tight">
            We design for the senses — spaces that breathe, adapt, and belong to the earth.
          </h2>
        </div>
        <div className="md:col-start-8 md:col-span-4 flex flex-col justify-center gap-8 md:gap-12">
          <div className="space-y-2 md:space-y-4">
            <h3 className="font-sans text-xs md:text-sm font-medium tracking-widest uppercase">Eco-Conscious</h3>
            <p className="font-serif text-base md:text-xl italic opacity-70 leading-relaxed">
              Every material choice, every orientation decision, every system — considered through the lens of environmental impact.
            </p>
          </div>
          <div className="space-y-2 md:space-y-4">
            <h3 className="font-sans text-xs md:text-sm font-medium tracking-widest uppercase">Experiential</h3>
            <p className="font-serif text-base md:text-xl italic opacity-70 leading-relaxed">
              Architecture isn't just seen — it's felt. We choreograph light, texture, and atmosphere to create lasting emotional resonance.
            </p>
          </div>
        </div>
      </section>

      {/* Work Preview */}
      <section className="px-4 md:px-8 py-16 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-y-24 gap-x-6">
        <div className="md:col-span-6 flex flex-col">
          <Link to="/projects/house-nonna" className="block bg-secondary mb-4 md:mb-8 aspect-[4/5] overflow-hidden group">
            <img src={houseNonna1} alt="House Nonna front elevation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </Link>
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-serif text-xl md:text-3xl">House Nonna</h4>
              <p className="font-sans text-[10px] md:text-xs tracking-widest uppercase text-muted-foreground mt-1 md:mt-2">Bishopscourt, Cape Town — 2026</p>
            </div>
            <div className="font-sans text-[10px] md:text-xs border border-foreground/20 px-2 md:px-4 py-1.5 md:py-2 uppercase tracking-tighter">
              Residential
            </div>
          </div>
        </div>

        <div className="md:col-span-5 md:col-start-8 flex flex-col md:pt-24">
          <Link to="/projects/wellness-retreat" className="block bg-secondary mb-4 md:mb-8 aspect-[3/4] overflow-hidden group">
            <img src={wellnessRetreat1} alt="Wellness Retreat desert exterior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </Link>
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-serif text-xl md:text-3xl">Wellness Retreat</h4>
              <p className="font-sans text-[10px] md:text-xs tracking-widest uppercase text-muted-foreground mt-1 md:mt-2">UAE — 2026</p>
            </div>
            <div className="font-sans text-[10px] md:text-xs border border-foreground/20 px-2 md:px-4 py-1.5 md:py-2 uppercase tracking-tighter">
              Hospitality
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="px-4 md:px-8 py-16 md:py-32 bg-secondary text-center">
        <span className="font-sans text-[10px] md:text-xs tracking-widest uppercase text-muted-foreground block mb-4 md:mb-6">Open to Collaboration</span>
        <h2 className="font-serif text-2xl md:text-5xl lg:text-6xl tracking-tighter max-w-3xl mx-auto leading-tight mb-6 md:mb-12">
          Great architecture begins with <span className="italic">great partnerships</span>.
        </h2>
        <Link
          to="/collaborate"
          className="inline-block font-sans text-xs md:text-sm font-medium tracking-widest uppercase border-b border-foreground pb-2 hover:pb-3 transition-all"
        >
          Learn about working with us →
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
