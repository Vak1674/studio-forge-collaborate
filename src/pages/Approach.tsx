import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Approach = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-32 md:pt-48 pb-12 md:pb-20 px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7">
          <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-6">Our Approach</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9]">
            Context-led. <br />
            Exploratory. <br />
            <span className="italic">Experiential.</span>
          </h1>
        </div>
        <div className="md:col-span-4 md:col-start-9 flex flex-col justify-end">
          <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
            Every project begins with place. We let the site, the climate, the culture, and the client's vision guide our exploration — then we push the boundaries of what's possible.
          </p>
        </div>
      </section>

      {/* Image */}
      <section className="px-6 md:px-8 pb-20 md:pb-32">
        <div className="aspect-[21/9] w-full overflow-hidden bg-secondary">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80&auto=format"
            alt="Architectural process"
            className="w-full h-full object-cover brightness-95"
          />
        </div>
      </section>

      {/* Philosophy statement */}
      <section className="px-6 md:px-8 py-20 md:py-32 bg-foreground text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tighter leading-tight mb-12 md:mb-16">
            Design is a <span className="italic">journey</span>, not a destination.
          </h2>
          <p className="font-sans text-base md:text-lg opacity-70 max-w-2xl mx-auto leading-relaxed">
            We treat each project as a unique investigation. Rather than imposing a fixed style, we let the design emerge from rigorous research, creative experimentation, and honest dialogue — always grounded in the realities of construction and budget.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="px-6 md:px-8 py-20 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
        <div className="md:col-span-10 md:col-start-2">
          <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-12">The Process</span>

          <div className="space-y-16 md:space-y-20">
            {/* Step 01 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-2">
                <span className="font-serif text-4xl md:text-5xl text-muted-foreground">01</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-sans text-sm font-medium tracking-widest uppercase mb-3">Listen & Understand</h3>
                <p className="font-serif text-lg italic text-muted-foreground leading-relaxed">
                  We immerse ourselves in your world — the site, the brief, the aspirations. Deep listening comes before any line is drawn. We study the landscape, the local climate, and the cultural context to build a foundation of understanding.
                </p>
              </div>
              <div className="md:col-span-4 md:col-start-8">
                <h3 className="font-sans text-sm font-medium tracking-widest uppercase mb-3">Early Feasibility</h3>
                <p className="font-serif text-lg italic text-muted-foreground leading-relaxed">
                  From the very start, we bring key consultants — structural engineers, cost consultants, sustainability advisors — into the conversation. This isn't about limiting ideas; it's about giving creative ambition a solid foundation and mitigating risk before it compounds.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-2">
                <span className="font-serif text-4xl md:text-5xl text-muted-foreground">02</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-sans text-sm font-medium tracking-widest uppercase mb-3">Explore & Experiment</h3>
                <p className="font-serif text-lg italic text-muted-foreground leading-relaxed">
                  This is where we play. We develop multiple design directions — through sketches, physical models, material samples, and digital explorations. We test ideas fearlessly, knowing that the most interesting solutions often come from unexpected places.
                </p>
              </div>
              <div className="md:col-span-4 md:col-start-8">
                <h3 className="font-sans text-sm font-medium tracking-widest uppercase mb-3">Material Research</h3>
                <p className="font-serif text-lg italic text-muted-foreground leading-relaxed">
                  We source, touch, and test. Material palettes are developed through hands-on research — visiting quarries, workshops, and suppliers to find finishes that are both beautiful and responsible.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-2">
                <span className="font-serif text-4xl md:text-5xl text-muted-foreground">03</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-sans text-sm font-medium tracking-widest uppercase mb-3">Refine & Resolve</h3>
                <p className="font-serif text-lg italic text-muted-foreground leading-relaxed">
                  The chosen direction is developed with precision. Every detail is considered — from how light enters a room at different hours, to how a handrail meets a wall. We work closely with consultants to ensure the design is technically robust and budget-aligned.
                </p>
              </div>
              <div className="md:col-span-4 md:col-start-8">
                <h3 className="font-sans text-sm font-medium tracking-widest uppercase mb-3">Client Dialogue</h3>
                <p className="font-serif text-lg italic text-muted-foreground leading-relaxed">
                  Design is never done in isolation. Regular, transparent communication ensures the project evolves in step with your expectations — no surprises, only deepening conviction.
                </p>
              </div>
            </div>

            {/* Step 04 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-2">
                <span className="font-serif text-4xl md:text-5xl text-muted-foreground">04</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-sans text-sm font-medium tracking-widest uppercase mb-3">Realize & Deliver</h3>
                <p className="font-serif text-lg italic text-muted-foreground leading-relaxed">
                  We stay closely involved through construction — ensuring that the quality of the built work matches the ambition of the design. The final space should feel effortless, even though every detail was fought for.
                </p>
              </div>
              <div className="md:col-span-4 md:col-start-8">
                <h3 className="font-sans text-sm font-medium tracking-widest uppercase mb-3">Ongoing Care</h3>
                <p className="font-serif text-lg italic text-muted-foreground leading-relaxed">
                  A building is a living thing. We remain available after handover to support the ongoing life of the space — because great architecture deserves stewardship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-8 py-20 md:py-32 bg-secondary text-center">
        <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-6">Work With Us</span>
        <h2 className="font-serif text-3xl md:text-5xl tracking-tighter max-w-2xl mx-auto leading-tight mb-8">
          Every great project starts with a <span className="italic">conversation</span>.
        </h2>
        <a
          href="mailto:hello@radicalearthstudio.com"
          className="inline-block font-sans text-sm font-medium tracking-widest uppercase border-b border-foreground pb-2 hover:pb-3 transition-all"
        >
          hello@radicalearthstudio.com
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Approach;
