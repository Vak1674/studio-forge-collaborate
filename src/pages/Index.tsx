import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import wellnessRetreat1 from "@/assets/wellness-retreat-1.jpg";
import houseNonna1 from "@/assets/house-nonna-3.jpg";

import heroImg from "@/assets/wellness-retreat-4.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 md:pt-48 pb-16 md:pb-24 px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-7">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[9rem] leading-[0.85] tracking-tighter">
            Architecture <br />
            <span className="italic pl-6 md:pl-12 lg:pl-24">Rooted in</span> <br />
            Experience
          </h1>
        </div>
        <div className="md:col-span-5 flex flex-col justify-end pb-4">
          <p className="font-sans text-base md:text-lg max-w-[35ch] leading-relaxed text-muted-foreground">
            An emerging practice at the intersection of experiential hospitality, luxury residential design, and ecological responsibility. We craft spaces that connect people to place.
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 md:px-8 pb-20 md:pb-32">
        <Link to="/projects" className="block relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-secondary group">
          <img
            src={heroImg}
            alt="Featured architectural project"
            className="w-full h-full object-cover brightness-95 scale-105 transition-transform duration-1000 group-hover:scale-100"
          />
          <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 font-sans text-xs tracking-widest uppercase text-primary-foreground">
            View Selected Works →
          </div>
        </Link>
      </section>

      {/* Philosophy */}
      <section className="px-6 md:px-8 py-24 md:py-40 bg-foreground text-primary-foreground grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
        <div className="md:col-start-2 md:col-span-5">
          <span className="font-sans text-xs tracking-widest uppercase opacity-50 mb-6 md:mb-8 block">Our Ethos</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
            We design for the senses — spaces that breathe, adapt, and belong to the earth.
          </h2>
        </div>
        <div className="md:col-start-8 md:col-span-4 flex flex-col justify-center gap-10 md:gap-12">
          <div className="space-y-3 md:space-y-4">
            <h3 className="font-sans text-sm font-medium tracking-widest uppercase">Eco-Conscious</h3>
            <p className="font-serif text-lg md:text-xl italic opacity-70 leading-relaxed">
              Every material choice, every orientation decision, every system — considered through the lens of environmental impact.
            </p>
          </div>
          <div className="space-y-3 md:space-y-4">
            <h3 className="font-sans text-sm font-medium tracking-widest uppercase">Experiential</h3>
            <p className="font-serif text-lg md:text-xl italic opacity-70 leading-relaxed">
              Architecture isn't just seen — it's felt. We choreograph light, texture, and atmosphere to create lasting emotional resonance.
            </p>
          </div>
        </div>
      </section>

      {/* Work Preview */}
      <section className="px-6 md:px-8 py-20 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-24 gap-x-6">
        <div className="md:col-span-6 flex flex-col">
          <Link to="/projects/house-nonna" className="block bg-secondary mb-6 md:mb-8 aspect-[4/5] overflow-hidden group">
            <img src={houseNonna1} alt="House Nonna" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </Link>
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-serif text-2xl md:text-3xl">House Nonna</h4>
              <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground mt-2">Bishopscourt, Cape Town — 2026</p>
            </div>
            <div className="font-sans text-xs border border-foreground/20 px-3 md:px-4 py-2 uppercase tracking-tighter">
              Residential
            </div>
          </div>
        </div>

        <div className="md:col-span-5 md:col-start-8 flex flex-col md:pt-24">
          <Link to="/projects/wellness-retreat" className="block bg-secondary mb-6 md:mb-8 aspect-[3/4] overflow-hidden group">
            <img src={wellnessRetreat1} alt="Wellness Retreat" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </Link>
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-serif text-2xl md:text-3xl">Wellness Retreat</h4>
              <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground mt-2">UAE — 2026</p>
            </div>
            <div className="font-sans text-xs border border-foreground/20 px-3 md:px-4 py-2 uppercase tracking-tighter">
              Hospitality
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="px-6 md:px-8 py-20 md:py-32 bg-secondary text-center">
        <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-6">Open to Collaboration</span>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tighter max-w-3xl mx-auto leading-tight mb-8 md:mb-12">
          Great architecture begins with <span className="italic">great partnerships</span>.
        </h2>
        <Link
          to="/collaborate"
          className="inline-block font-sans text-sm font-medium tracking-widest uppercase border-b border-foreground pb-2 hover:pb-3 transition-all"
        >
          Learn about working with us →
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
