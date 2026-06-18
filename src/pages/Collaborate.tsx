import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Collaborate = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Collaborate — Radical Earth Studio</title>
        <meta name="description" content="Start a conversation with Radical Earth Studio. We work with private clients, hospitality visionaries, and fellow creatives." />
        <meta property="og:title" content="Collaborate — Radical Earth Studio" />
        <meta property="og:description" content="Start a conversation with Radical Earth Studio. We work with private clients, hospitality visionaries, and fellow creatives." />
        <meta property="og:url" content="https://radical-earth.lovable.app/collaborate" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://radical-earth.lovable.app/collaborate" />
      </Helmet>
      <Navigation />

      {/* Header */}
      <section className="pt-32 md:pt-48 pb-12 md:pb-20 px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9]">
            Architecture is a <br />
            <span className="italic">conversation.</span>
          </h1>
        </div>
        <div className="md:col-span-4 md:col-start-9 flex flex-col justify-end">
          <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
            We believe the most extraordinary spaces emerge from genuine collaboration — with clients, craftspeople, engineers, and fellow creatives. Every project is a partnership.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 md:px-8 pb-20 md:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Design Consulting",
              "Design Resolution",
              "Rendering & Visualisation",
              "Presentation Work",
              "Concept Development",
              "Feasibility Studies",
            ].map((service) => (
              <div
                key={service}
                className="bg-secondary border border-border p-6 md:p-8 flex items-center justify-center text-center min-h-[140px]"
              >
                <span className="font-serif text-lg md:text-xl tracking-tight">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 md:px-8 py-20 md:py-32 bg-foreground text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tighter leading-tight mb-12 md:mb-16">
            We don't work <span className="italic">for</span> our clients. We work <span className="italic">with</span> them.
          </h2>
          <p className="font-sans text-base md:text-lg opacity-70 max-w-2xl mx-auto leading-relaxed">
            Every project begins with deep listening. We take the time to understand your vision, your rituals, the way light enters your mornings. From there, we build together.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-8 py-20 md:py-32 bg-secondary text-center">
        <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-6">Start a Conversation</span>
        <h2 className="font-serif text-3xl md:text-5xl tracking-tighter max-w-2xl mx-auto leading-tight mb-8">
          We're currently accepting select commissions for 2026.
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

export default Collaborate;
