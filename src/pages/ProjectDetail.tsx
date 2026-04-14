import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const projectsData: Record<string, {
  title: string;
  location: string;
  year: string;
  type: string;
  description: string;
  details: { label: string; value: string }[];
  gallery: string[];
}> = {
  "casa-silencio": {
    title: "Casa Silêncio",
    location: "Comporta, Portugal",
    year: "2025",
    type: "Residential",
    description: "A private residence carved into the dunes of the Alentejo coast. Raw concrete volumes frame views of the Atlantic, while interior courtyards of local stone create intimate moments of stillness.",
    details: [
      { label: "Client", value: "Private" },
      { label: "Size", value: "450 m²" },
      { label: "Status", value: "In Progress" },
      { label: "Scope", value: "Full architectural design & interiors" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80&auto=format",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80&auto=format",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80&auto=format",
    ],
  },
  "hotel-mineral": {
    title: "Hôtel Mineral",
    location: "Sifnos, Greece",
    year: "2024",
    type: "Hospitality",
    description: "A 12-suite boutique hotel that reinterprets the Cycladic vernacular through a lens of material austerity. Travertine terraces descend toward the Aegean, each suite a private observatory of light and sea.",
    details: [
      { label: "Client", value: "Confidential" },
      { label: "Size", value: "1,200 m²" },
      { label: "Status", value: "Completed" },
      { label: "Scope", value: "Architecture, landscape & FF&E" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80&auto=format",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80&auto=format",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80&auto=format",
    ],
  },
  "the-clearing-house": {
    title: "The Clearing House",
    location: "Hudson Valley, NY",
    year: "2024",
    type: "Residential",
    description: "A weekend retreat that dissolves the boundary between structure and forest. Floor-to-ceiling glass walls retract entirely, transforming the living space into an elevated clearing within the woodland canopy.",
    details: [
      { label: "Client", value: "Private" },
      { label: "Size", value: "320 m²" },
      { label: "Status", value: "Completed" },
      { label: "Scope", value: "Architecture & landscape integration" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80&auto=format",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80&auto=format",
    ],
  },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-4xl mb-4">Project not found</h1>
            <Link to="/projects" className="font-sans text-sm tracking-widest uppercase border-b border-foreground pb-1">
              Back to Works
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-32 md:pt-48 pb-12 md:pb-16 px-6 md:px-8">
        <Link to="/projects" className="font-sans text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors mb-8 block">
          ← Back to Works
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <div className="font-sans text-xs border border-foreground/20 px-3 py-2 uppercase tracking-tighter inline-block mb-6">
              {project.type}
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9]">
              {project.title}
            </h1>
            <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground mt-4">
              {project.location} — {project.year}
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex flex-col justify-end">
            <p className="font-serif text-lg italic text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Carousel */}
      <section className="px-6 md:px-8 pb-16 md:pb-24">
        <Carousel opts={{ loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {project.gallery.map((img, i) => (
              <CarouselItem key={i} className="pl-4 basis-full md:basis-4/5">
                <div className="aspect-[16/10] overflow-hidden bg-secondary">
                  <img
                    src={img}
                    alt={`${project.title} — Image ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-6">
            <CarouselPrevious className="relative inset-auto translate-y-0 h-10 w-10 rounded-none border-foreground/20" />
            <CarouselNext className="relative inset-auto translate-y-0 h-10 w-10 rounded-none border-foreground/20" />
          </div>
        </Carousel>
      </section>

      {/* Project Details */}
      <section className="px-6 md:px-8 pb-20 md:pb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 border-t border-border pt-8">
          {project.details.map((detail) => (
            <div key={detail.label}>
              <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground block mb-2">{detail.label}</span>
              <p className="font-serif text-lg">{detail.value}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
