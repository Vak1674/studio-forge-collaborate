import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import alexanderPhoto from "@/assets/alexander-konchev.jpeg";

const Studio = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Our Studio — Radical Earth Studio</title>
        <meta name="description" content="Meet the team behind Radical Earth Studio. A young, exploratory practice grounded in context-led, experiential architecture." />
        <meta property="og:title" content="Our Studio — Radical Earth Studio" />
        <meta property="og:description" content="Meet the team behind Radical Earth Studio. A young, exploratory practice grounded in context-led, experiential architecture." />
        <meta property="og:url" content="https://radical-earth.lovable.app/studio" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://radical-earth.lovable.app/studio" />
      </Helmet>
      <Navigation />

      {/* Header + Text + Director */}
      <section className="pt-32 md:pt-48 pb-20 md:pb-32 px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
        {/* Left: Heading + Director Image */}
        <div className="md:col-span-5 md:col-start-2 space-y-8">
          <div>
            <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-6">Our Studio</span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9]">
              Young, restless, <br />
              <span className="italic">grounded.</span>
            </h1>
          </div>
          <div className="aspect-[3/4] overflow-hidden bg-secondary">
            <img
              src={alexanderPhoto}
              alt="Alexander Konchev — Director"
              className="w-full h-full object-cover object-top saturate-[0.85] contrast-[1.05] brightness-[1.02]"
            />
          </div>
        </div>

        {/* Right: All text */}
        <div className="md:col-span-4 md:col-start-8 flex flex-col justify-between space-y-10">
          <div className="space-y-8 pt-0 md:pt-16">
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
              We are an emerging studio grounded in a sensitive and considered approach to design. Every project begins with deep understanding of the land, the brief, and the ultimately end-user experience.
            </p>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
              Our practice is defined by exploration. We work holistically, keeping the big picture in view while pursuing the unexpected details that make spaces genuinely memorable. We are not afraid to take risks when they add value to the work.
            </p>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
              Our work sits at the intersection of experiential hospitality architecture and high-end residential design. We believe luxury isn't excess — it's precision, material honesty, and a deep respect for context and climate. We draw on a trusted network of engineers, quantity surveyors, and specialist consultants to ensure every project is as buildable as it is beautiful.
            </p>
          </div>
          <div>
            <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-4">Director</span>
            <h3 className="font-serif text-3xl md:text-4xl tracking-tighter mb-4">Alexander Konchev</h3>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
              With extensive exposure to the hospitality sector — designing lodges and villas across diverse landscapes — Alexander brings a deep understanding of how architecture shapes guest experience and connects people to place.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="px-6 md:px-8 py-20 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
        <div className="md:col-span-5 md:col-start-2">
          <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-8">What We Do</span>
          <ul className="space-y-4 font-serif text-lg md:text-xl">
            <li>— Hospitality Architecture</li>
            <li>— Luxury Residential</li>
            <li>— Eco-Conscious Design</li>
            <li>— Interiors & Landscape</li>
            <li>— Concept & Feasibility Studies</li>
          </ul>
        </div>

        <div className="md:col-span-4 md:col-start-8">
          <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-8">How We Think</span>
          <ul className="space-y-4 font-serif text-lg md:text-xl">
            <li>— Fearlessly Exploratory</li>
            <li>— Practically Grounded</li>
            <li>— Deeply Collaborative</li>
            <li>— Context-Led</li>
            <li>— Material Honesty</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-8 py-20 md:py-32 bg-secondary text-center">
        <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-6">Get to Know Us</span>
        <h2 className="font-serif text-3xl md:text-5xl tracking-tighter max-w-2xl mx-auto leading-tight mb-8">
          We'd love to tell you more over a coffee — <span className="italic">virtual or otherwise</span>.
        </h2>
        <a
          href="mailto:info@radical-earth.com?subject=Inquiry%20—%20Radical%20Earth%20Studio"
          className="inline-block font-sans text-sm font-medium tracking-widest uppercase border-b border-foreground pb-2 hover:pb-3 transition-all"
        >
          info@radical-earth.com
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Studio;
