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
import wellnessRetreat1 from "@/assets/wellness-retreat-1.jpg";
import wellnessRetreat2 from "@/assets/wellness-retreat-2.jpg";
import wellnessRetreat3 from "@/assets/wellness-retreat-3.jpg";
import wellnessRetreat4 from "@/assets/wellness-retreat-4.jpg";
import wellnessRetreat5 from "@/assets/wellness-retreat-5.jpg";
import wellnessRetreat6 from "@/assets/wellness-retreat-6.jpg";
import houseNonna1 from "@/assets/house-nonna-1.jpg";
import houseNonna2 from "@/assets/house-nonna-2.jpg";
import houseNonna3 from "@/assets/house-nonna-3.jpg";
import houseNonna4 from "@/assets/house-nonna-4.jpg";
import houseNonna5 from "@/assets/house-nonna-5.jpg";
import houseNonna6 from "@/assets/house-nonna-6.jpg";
import houseNonna7 from "@/assets/house-nonna-7.jpg";
import houseNonna8 from "@/assets/house-nonna-8.png";

const projectsData: Record<string, {
  title: string;
  location: string;
  year: string;
  type: string;
  description: string;
  details: { label: string; value: string }[];
  gallery: string[];
}> = {
  "house-nonna": {
    title: "House Nonna",
    location: "Bishopscourt, Cape Town",
    year: "2026",
    type: "Residential",
    description: "A single-family home inspired by the heritage cottages and dramatic landscape of Bishopscourt. Every room is crafted to hold a moment of surprise — from framed garden views to unexpected material transitions — while the spatial arrangement ensures a compact home feels effortlessly generous.",
    details: [
      { label: "Client", value: "Private" },
      { label: "Size", value: "280 m²" },
      { label: "Status", value: "In Design" },
      { label: "Scope", value: "Full architectural design, interiors & landscape" },
    ],
    gallery: [
      houseNonna3,
      houseNonna4,
      houseNonna1,
      houseNonna2,
      houseNonna5,
      houseNonna6,
      houseNonna7,
      houseNonna8,
    ],
  },
  "wellness-retreat": {
    title: "Wellness Retreat",
    location: "UAE",
    year: "2026",
    type: "Hospitality",
    description: "A desert wellness sanctuary comprising four private villas and a communal gathering pavilion. Each suite is conceived as a private world — rammed earth walls anchor the architecture to the land while expansive openings dissolve the boundary between interior refuge and the vast surrounding landscape. Privacy and immersion in nature sit at the heart of the design.",
    details: [
      { label: "Client", value: "Confidential" },
      { label: "Size", value: "1,800 m²" },
      { label: "Status", value: "In Design" },
      { label: "Scope", value: "Architecture, landscape & interiors" },
    ],
    gallery: [
      wellnessRetreat1,
      wellnessRetreat2,
      wellnessRetreat3,
      wellnessRetreat4,
      wellnessRetreat5,
      wellnessRetreat6,
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
