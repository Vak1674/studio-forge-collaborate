import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Collaborate = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-32 md:pt-48 pb-12 md:pb-20 px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7">
          <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-6">Collaborate</span>
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

      {/* Image */}
      <section className="px-6 md:px-8 pb-20 md:pb-32">
        <div className="aspect-[21/9] w-full overflow-hidden bg-secondary">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=80&auto=format"
            alt="Studio workspace"
            className="w-full h-full object-cover brightness-95"
          />
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

      {/* Who We Work With */}
      <section className="px-6 md:px-8 py-20 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
        <div className="md:col-span-5 md:col-start-2">
          <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-8">Who We Work With</span>
          <div className="space-y-10">
            <div className="space-y-3">
              <h3 className="font-sans text-sm font-medium tracking-widest uppercase">Private Clients</h3>
              <p className="font-serif text-lg italic text-muted-foreground leading-relaxed">
                Individuals and families seeking homes that transcend convention — spaces that feel inevitable, as if they've always existed.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-sans text-sm font-medium tracking-widest uppercase">Hospitality Visionaries</h3>
              <p className="font-serif text-lg italic text-muted-foreground leading-relaxed">
                Hoteliers and developers who understand that architecture is the first chapter of every guest experience.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-sans text-sm font-medium tracking-widest uppercase">Fellow Creatives</h3>
              <p className="font-serif text-lg italic text-muted-foreground leading-relaxed">
                Interior designers, landscape architects, and artists who share our commitment to material honesty and spatial emotion.
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 md:col-start-8">
          <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-8">What We Bring</span>
          <div className="space-y-10">
            <div className="space-y-3">
              <h3 className="font-sans text-sm font-medium tracking-widest uppercase">Fearless Exploration</h3>
              <p className="font-serif text-lg italic text-muted-foreground leading-relaxed">
                We're not afraid to push boundaries, test unconventional ideas, and challenge assumptions — that's how the best work happens.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-sans text-sm font-medium tracking-widest uppercase">Practical Ambition</h3>
              <p className="font-serif text-lg italic text-muted-foreground leading-relaxed">
                Bold design grounded in buildability. We bring consultants in early to ensure every vision can become reality.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-sans text-sm font-medium tracking-widest uppercase">Ecological Responsibility</h3>
              <p className="font-serif text-lg italic text-muted-foreground leading-relaxed">
                Sustainability isn't an add-on — it's woven into every decision, from material sourcing to passive design strategies.
              </p>
            </div>
          </div>
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
