import wellnessHero from "@/assets/wellness-retreat-4.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  dateLabel: string;
  readTime: string;
  tags: string[];
  cover: string;
  content: { type: "h2" | "h3" | "p" | "ul" | "blockquote"; text?: string; items?: string[] }[];
};

export const posts: BlogPost[] = [
  {
    slug: "designing-from-the-ground-up",
    title:
      "Designing From the Ground Up: How Context, Nature, and Community Shape Extraordinary African Architecture",
    excerpt:
      "Why the most enduring buildings in Africa grow from the land, the people, and the ecology that surround them — and what that means for nature-focused homes and luxury lodges.",
    date: "2026-05-08",
    dateLabel: "08 May 2026",
    readTime: "8 min read",
    tags: [
      "Biophilic Design",
      "Sustainable Architecture",
      "African Architecture",
      "Luxury Lodge Design",
      "Hospitality Design",
      "Residential Architecture",
      "Eco-Conscious Design",
      "Contextual Design",
      "Community Engagement",
      "Experiential Architecture",
      "Okavango",
      "Safari Lodges",
    ],
    cover: wellnessHero,
    content: [
      {
        type: "p",
        text: "At Radical Earth Studio, we believe the most enduring buildings emerge from the ground they stand on. Our design philosophy is rooted in a simple but demanding principle: every project must grow from its context. That means engaging deeply with the history of a place, the land itself, and the people who have a stake in what gets built there.",
      },
      {
        type: "p",
        text: "This approach is especially powerful in Africa, where the layered complexity of landscape, ecology, culture, and community offers architects and developers something rare — to create spaces that feel genuinely irreplaceable. Whether you're commissioning a private home that responds to its natural surroundings or developing a luxury lodge that needs to earn its place in a sensitive ecosystem, the path to something truly exceptional begins long before a single wall goes up.",
      },
      { type: "h2", text: "Nature as Architect: The Case for Biophilic Design" },
      {
        type: "p",
        text: "There is a reason people feel better after a walk through the bush, or after spending an afternoon under the shade of a sprawling tree, or in awe at magnificent flora and fauna. It isn't incidental. Decades of environmental psychology research confirms that proximity to nature reduces cortisol levels, lowers blood pressure, and restores cognitive function in ways that urban, enclosed environments simply cannot replicate.",
      },
      {
        type: "p",
        text: "Biophilic design takes this understanding and builds it into the architecture itself. Rather than treating the natural world as a backdrop or a framed view, biophilic architecture integrates living systems, natural materials, light, ventilation, and organic form into the bones of a building. The result isn't a building that tries to look natural — it's a building that behaves naturally, one that shifts with the light, breathes with the seasons, and makes you feel more alive simply by being inside it.",
      },
      {
        type: "p",
        text: "For residential projects, this translates into homes that genuinely nourish the people who live in them:",
      },
      {
        type: "ul",
        items: [
          "Indoor-outdoor continuity that dissolves the boundary between living spaces and landscape while balancing comfort.",
          "Natural material palettes — stone, reclaimed timber, thatch, raw plaster — that age gracefully and carry the character of their origin.",
          "Passive design strategies that use prevailing winds, canopy shade, and thermal mass to regulate temperature with minimal mechanical intervention.",
          "Water features and living walls that reintroduce sensory richness — sound, movement, humidity — into everyday domestic life.",
          "Views calibrated to the landscape, not imposed upon it, drawing the eye outward and anchoring inhabitants in their environment.",
        ],
      },
      {
        type: "p",
        text: "For luxury lodge developers operating in Africa's wilderness areas, biophilic design is no longer a differentiator — it is a baseline expectation of an increasingly discerning eco-conscious market. Today's high-end safari guest has options. They can choose from a proliferating landscape of lodges that all promise proximity to wildlife and spectacular scenery. What they cannot find everywhere is a built environment that feels like it belongs — one that heightens rather than dulls the sensory experience of being somewhere wild and extraordinary.",
      },
      {
        type: "blockquote",
        text: "A lodge designed with genuine biophilic intent makes the boundary between the built and the natural dissolve — falling asleep to the sounds of the bush without a window in the way; waking to light that moves across a textured surface the way it moves across a kopje at dawn.",
      },
      {
        type: "h2",
        text: "Community as Foundation: Why Stakeholder Engagement Makes or Breaks a Project",
      },
      {
        type: "p",
        text: "No project exists in isolation. Every development, regardless of scale, sits within an intertwined network of relationships, histories, and dependencies that will shape its success or failure as much as any design decision. In Africa, where land tenure is complex, communities often hold deep ancestral connections to the land, and the economic stakes of development extend far beyond the boundary fence — this is not a box to be ticked. It is fundamental to executing a sustainable project.",
      },
      {
        type: "p",
        text: "At Radical Earth Studio, we understand that projects begin with community and stakeholder engagement at inception — not as an afterthought once the concept is already formed. Arriving with a finished vision and asking for community buy-in is fundamentally different from arriving with genuine curiosity and building something together. The former creates resistance. The latter creates ownership.",
      },
      {
        type: "p",
        text: "Effective stakeholder engagement in African hospitality and residential development involves several overlapping layers:",
      },
      {
        type: "ul",
        items: [
          "Principal stakeholder alignment — ensuring landowners, investors, conservation authorities, and development partners share a coherent vision from the outset.",
          "Community consultation and co-design — engaging meaningfully with the communities adjacent to or affected by a project, understanding their concerns and aspirations.",
          "Local procurement strategies — sourcing labour, materials, and services locally wherever possible, keeping economic value circulating within the region.",
          "Relationship-building with local artisans — commissioning craftspeople whose skills carry the cultural DNA of a place, adding layers of meaning no imported product can replicate.",
        ],
      },
      {
        type: "p",
        text: "The artisans working in communities surrounding a development site are among the most underutilised resources in African architecture and hospitality design. When these skills are integrated into a project deliberately and respectfully, the project is anchored in its context — from a carved door at the entrance to a bed frame that tells a story specific to that landscape and its people. These are the details a guest remembers, and that an owner values more deeply with every passing year.",
      },
      {
        type: "p",
        text: "The practical benefits are substantial. A project with genuine community support navigates approval processes more smoothly, experiences fewer disruptions during construction, and builds the kind of local goodwill that protects it in the long run. Conversely, a development that bypasses meaningful engagement often pays for it later — in delays, disputes, reputational damage, or the quiet but persistent friction of being perceived as an outsider.",
      },
      {
        type: "h2",
        text: "Putting It Together: Experiential Architecture as a Complete Language",
      },
      {
        type: "p",
        text: "Biophilic design and community engagement are not parallel tracks running alongside each other — they are complementary forces that, brought together thoughtfully, produce something greater than the sum of their parts. Nature informs the spatial language of a project. Community informs its cultural grammar. The architecture that results speaks fluently in both.",
      },
      {
        type: "p",
        text: "This is what we mean by experiential design — not spectacle for its own sake, not the engineered Instagram moment, but spaces that accumulate meaning through lived experience. A lodge where the thatching was laid by artisans using reeds from the land. A private home where the stone floors were quarried from the ridge visible through the bedroom window. A reception area where the light at golden hour falls exactly where it does because the building was oriented to receive it.",
      },
      { type: "h3", text: "For nature-focused homeowners" },
      {
        type: "ul",
        items: [
          "Homes that respond to microclimate, orientation, and topography rather than working against them.",
          "Buildings that develop a patina over time, becoming more beautiful as they age into their landscape.",
          "Spaces that feel restorative rather than performative — designed for the people who live in them, not for the photograph.",
        ],
      },
      { type: "h3", text: "For luxury lodge developers" },
      {
        type: "ul",
        items: [
          "An authentic sense of place that cannot be manufactured or replicated elsewhere.",
          "Operational resilience built on strong local relationships and supply chains.",
          "A guest experience grounded in something real — the land, the people, the craft — that gives visitors a reason to return.",
        ],
      },
      {
        type: "p",
        text: "The African landscape has always asked something of those who build within it — a degree of humility, a willingness to listen, a recognition that the land was here long before the project and will outlast it. The most successful developments answer that call honestly. They are the ones guests describe not with the language of amenity but with the language of feeling: it felt like it had always been there. It felt like it belonged.",
      },
      {
        type: "p",
        text: "That is what we build toward at Radical Earth Studio. Not buildings that tick boxes, but places that endure — in the landscape, in the community, and in the memory of everyone who passes through them.",
      },
    ],
  },
];
