import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Studio = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-32 md:pt-48 pb-12 md:pb-20 px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7">
          <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-6">Our Studio</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9]">
            Young, restless, <br />
            <span className="italic">grounded.</span>
          </h1>
        </div>
        <div className="md:col-span-4 md:col-start-9 flex flex-col justify-end">
          <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
            We are an emerging studio grounded in a sensitive and considered approach to design. Every project begins with deep understanding of the land, the brief, and the ultimately end-user experience.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="px-6 md:px-8 pb-20 md:pb-32 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
        <div className="md:col-span-5 md:col-start-2">
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-muted-foreground">
            Our practice is defined by exploration. We work holistically, keeping the big picture in view while pursuing the unexpected details that make spaces genuinely memorable. We are not afraid to take risks when they add value to the work.
          </p>
        </div>
        <div className="md:col-span-4 md:col-start-8 flex flex-col justify-end">
          <p className="font-serif text-lg italic text-muted-foreground leading-relaxed">
            We draw on a trusted network of engineers, quantity surveyors, and specialist consultants to ensure every project is as buildable as it is beautiful.
          </p>
        </div>
      </section>

      {/* Person Image */}
      <section className="px-6 md:px-8 pb-20 md:pb-32 grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-5 md:col-start-2 aspect-[3/4] overflow-hidden bg-secondary">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&auto=format"
            alt="Alexander Konchev — Director"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-4 md:col-start-8 flex flex-col justify-end">
          <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-4">Director</span>
          <h3 className="font-serif text-3xl md:text-4xl tracking-tighter mb-4">Alexander Konchev</h3>
          <p className="font-serif text-lg italic text-muted-foreground leading-relaxed">
            With extensive exposure to the hospitality sector — designing lodges and villas across diverse landscapes — Alexander brings a deep understanding of how architecture shapes guest experience and connects people to place.
          </p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="px-6 md:px-8 py-20 md:py-32 bg-foreground text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tighter leading-tight mb-12 md:mb-16">
            We blend the <span className="italic">practical</span> with the <span className="italic">poetic</span>.
          </h2>
          <p className="font-sans text-base md:text-lg opacity-70 max-w-2xl mx-auto leading-relaxed">
            Our work sits at the intersection of experiential hospitality architecture and high-end residential design. We believe luxury isn't excess — it's precision, material honesty, and a deep respect for context and climate.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="px-6 md:px-8 py-20 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
        <div className="md:col-span-5 md:col-start-2">
          <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-8">What We Do</span>
          <div className="space-y-10">
            <div className="space-y-3">
              <h3 className="font-sans text-sm font-medium tracking-widest uppercase">Hospitality Architecture</h3>
              <p className="font-serif text-lg italic text-muted-foreground leading-relaxed">
                Boutique hotels, retreats, and experiential venues where architecture becomes the story guests remember long after they leave.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-sans text-sm font-medium tracking-widest uppercase">Luxury Residential</h3>
              <p className="font-serif text-lg italic text-muted-foreground leading-relaxed">
                Homes that respond to landscape, light, and the specific rhythms of how people live — not templates, but tailored spatial experiences.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-sans text-sm font-medium tracking-widest uppercase">Eco-Conscious Design</h3>
              <p className="font-serif text-lg italic text-muted-foreground leading-relaxed">
                Sustainability isn't a checkbox. We integrate passive strategies, local materials, and regenerative thinking from day one — because beautiful design and responsible design are the same thing.
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 md:col-start-8">
          <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-8">How We Think</span>
          <div className="space-y-10">
            <div className="space-y-3">
              <h3 className="font-sans text-sm font-medium tracking-widest uppercase">Fearlessly Exploratory</h3>
              <p className="font-serif text-lg italic text-muted-foreground leading-relaxed">
                Being a young studio means freedom — freedom to question convention, test new ideas, and approach every project with fresh eyes. We don't carry the weight of "how things have always been done."
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-sans text-sm font-medium tracking-widest uppercase">Practically Grounded</h3>
              <p className="font-serif text-lg italic text-muted-foreground leading-relaxed">
                Bold ideas mean nothing without rigour. We balance ambition with buildability, bringing engineering and cost consultants into the conversation early so that creative vision and practical reality walk hand in hand.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-sans text-sm font-medium tracking-widest uppercase">Deeply Collaborative</h3>
              <p className="font-serif text-lg italic text-muted-foreground leading-relaxed">
                We thrive on working alongside clients, makers, and specialists. The best architecture comes from genuine dialogue — not ego.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-8 py-20 md:py-32 bg-secondary text-center">
        <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-6">Get to Know Us</span>
        <h2 className="font-serif text-3xl md:text-5xl tracking-tighter max-w-2xl mx-auto leading-tight mb-8">
          We'd love to tell you more over a coffee — <span className="italic">virtual or otherwise</span>.
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

export default Studio;
