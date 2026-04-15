import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const steps = [
  {
    number: "01",
    title: "Listen & Understand",
    subtitle: "Context & Feasibility",
    description: "Immerse in site, climate, culture. Bring consultants in early to ensure feasibility and mitigate risk.",
  },
  {
    number: "02",
    title: "Explore & Experiment",
    subtitle: "Design & Materials",
    description: "Multiple directions through sketches, models, and material research. Test ideas fearlessly.",
  },
  {
    number: "03",
    title: "Refine & Resolve",
    subtitle: "Precision & Dialogue",
    description: "Develop with precision. Every detail considered. Transparent client communication throughout.",
  },
  {
    number: "04",
    title: "Realize & Deliver",
    subtitle: "Construction & Care",
    description: "Closely involved through build. Ongoing stewardship after handover.",
  },
];

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

      {/* Process Diagram */}
      <section className="px-6 md:px-8 py-20 md:py-32">
        <div className="max-w-5xl mx-auto">
          <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-16 text-center">The Process</span>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[3.25rem] left-0 right-0 h-px bg-border" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
              {steps.map((step, index) => (
                <div key={step.number} className="relative text-center group">
                  {/* Node dot */}
                  <div className="relative mx-auto mb-8">
                    <div className="w-[6.5rem] h-[6.5rem] rounded-full border border-border flex items-center justify-center mx-auto bg-background relative z-10 group-hover:border-foreground transition-colors duration-300">
                      <span className="font-serif text-3xl text-muted-foreground group-hover:text-foreground transition-colors duration-300">{step.number}</span>
                    </div>
                  </div>

                  {/* Arrow between nodes (mobile) */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center -mt-4 mb-4">
                      <div className="w-px h-8 bg-border" />
                    </div>
                  )}

                  <h3 className="font-sans text-sm font-medium tracking-widest uppercase mb-2">{step.title}</h3>
                  <p className="font-sans text-xs tracking-wider uppercase text-muted-foreground mb-4">{step.subtitle}</p>
                  <p className="font-serif text-base italic text-muted-foreground leading-relaxed max-w-[22ch] mx-auto">
                    {step.description}
                  </p>
                </div>
              ))}
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
          href="mailto:info@radical-earth.com"
          className="inline-block font-sans text-sm font-medium tracking-widest uppercase border-b border-foreground pb-2 hover:pb-3 transition-all"
        >
          info@radical-earth.com
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Approach;
