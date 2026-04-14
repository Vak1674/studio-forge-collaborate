import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "Casa Silêncio",
    location: "Comporta, Portugal",
    year: "2025",
    type: "Residential",
    description: "A private residence carved into the dunes of the Alentejo coast. Raw concrete volumes frame views of the Atlantic, while interior courtyards of local stone create intimate moments of stillness.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80&auto=format",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Hôtel Mineral",
    location: "Sifnos, Greece",
    year: "2024",
    type: "Hospitality",
    description: "A 12-suite boutique hotel that reinterprets the Cycladic vernacular through a lens of material austerity. Travertine terraces descend toward the Aegean, each suite a private observatory of light and sea.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80&auto=format",
    aspect: "aspect-[16/10]",
  },
  {
    title: "The Clearing House",
    location: "Hudson Valley, NY",
    year: "2024",
    type: "Residential",
    description: "A weekend retreat that dissolves the boundary between structure and forest. Floor-to-ceiling glass walls retract entirely, transforming the living space into an elevated clearing within the woodland canopy.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format",
    aspect: "aspect-[3/4]",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-32 md:pt-48 pb-12 md:pb-20 px-6 md:px-8">
        <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-6">Selected Works</span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9]">
          Three gestures <br />
          <span className="italic">in permanence.</span>
        </h1>
      </section>

      {/* Projects */}
      <section className="px-6 md:px-8 pb-20 md:pb-32 space-y-24 md:space-y-40">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 ${index % 2 === 1 ? 'md:direction-rtl' : ''}`}
          >
            <div className={`${index % 2 === 0 ? 'md:col-span-7' : 'md:col-span-7 md:col-start-6'}`}>
              <div className={`${project.aspect} overflow-hidden bg-secondary group`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className={`${index % 2 === 0 ? 'md:col-span-4 md:col-start-9' : 'md:col-span-4 md:col-start-1 md:row-start-1'} flex flex-col justify-end`}>
              <div className="font-sans text-xs border border-foreground/20 px-3 py-2 uppercase tracking-tighter inline-block self-start mb-4">
                {project.type}
              </div>
              <h2 className="font-serif text-3xl md:text-4xl mb-2">{project.title}</h2>
              <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-6">
                {project.location} — {project.year}
              </p>
              <p className="font-serif text-base md:text-lg italic text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
